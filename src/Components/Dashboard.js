import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { GoogleSheetInfo } from "../constants/google-sheet-info";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: GoogleSheetInfo.spreadsheetId,
          range: "Sheet1!A2:E", // Lấy từ dòng thứ 2 đến hết các cột A, B, C, D, E
        });

        const values = response.result.values;
        if (values && values.length) {
          setData(values);
          setFilteredData(values); // Khởi tạo dữ liệu lọc với toàn bộ dữ liệu ban đầu
        } else {
          console.log("No data found.");
        }
      } catch (error) {
        console.error("Error fetching data from spreadsheet:", error);
      }
    };

    const initClient = () => {
      gapi.load("client:auth2", () => {
        gapi.client.init({
          apiKey: GoogleSheetInfo.apiKey,
          clientId: GoogleSheetInfo.clientId,
          scope: "https://www.googleapis.com/auth/spreadsheets",
          discoveryDocs: [
            "https://sheets.googleapis.com/$discovery/rest?version=v4",
          ],
        });
      });
    };

    const authenticate = async () => {
      const token = await getAccessToken();
      gapi.auth.setToken({ access_token: token });
    };

    const getAccessToken = async () => {
      const url = "https://oauth2.googleapis.com/token";
      const params = new URLSearchParams();
      params.append(
        "grant_type",
        "urn:ietf:params:oauth:grant-type:jwt-bearer"
      );
      params.append("assertion", createJwt());

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      const data = await response.json();
      return data.access_token;
    };

    const createJwt = () => {
      const header = {
        alg: "RS256",
        typ: "JWT",
      };

      const now = Math.floor(Date.now() / 1000);
      const payload = {
        iss: GoogleSheetInfo.serviceAccountEmail,
        scope: "https://www.googleapis.com/auth/spreadsheets",
        aud: "https://oauth2.googleapis.com/token",
        exp: now + 3600,
        iat: now,
      };

      const encodedHeader = btoa(JSON.stringify(header));
      const encodedPayload = btoa(JSON.stringify(payload));
      const signatureInput = `${encodedHeader}.${encodedPayload}`;

      const signature = signWithPrivateKey(
        signatureInput,
        GoogleSheetInfo.privateKey
      );

      return `${signatureInput}.${signature}`;
    };

    const signWithPrivateKey = (input, privateKey) => {
      // Implement the signing function using a library like jsrsasign
      // For example:
      const KJUR = require("jsrsasign");
      const key = KJUR.KEYUTIL.getKey(privateKey);
      const sig = new KJUR.crypto.Signature({ alg: "SHA256withRSA" });
      sig.init(key);
      sig.updateString(input);
      const signature = sig.sign();
      return KJUR.hextob64(signature);
    };

    initClient();
    authenticate();
    fetchData();
  }, []);

  // Hàm lọc dữ liệu dựa trên từ khóa tìm kiếm
  const filterData = () => {
    if (!searchTerm) {
      setFilteredData(data); // Nếu không có từ khóa tìm kiếm, hiển thị toàn bộ dữ liệu
    } else {
      const filtered = data.filter((row) =>
        row.some((cell) =>
          cell.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
  };

  // Gọi hàm lọc dữ liệu mỗi khi từ khóa tìm kiếm thay đổi
  useEffect(() => {
    filterData();
  }, [searchTerm, data]);

  return (
    <div className="p-6 dark:bg-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Danh sách nhập học
        </h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 dark:border-gray-500 rounded"
            placeholder="Tìm kiếm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table">
           <thead>
              <tr>
                <th className="py-3 px-4 ">Học và Tên</th>
                <th className="py-3 px-4 ">Email</th>
                <th className="py-3 px-4 ">Số điện thoại</th>
                <th className="py-3 px-4 ">Môn học</th>
                <th className="py-3 px-4 ">Đối tượng đăng kí</th>
              </tr>
              </thead>
              {filteredData.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } dark:bg-gray-600`}
                >
                  <td className="py-3 px-4">{row[0]}</td>
                  <td className="py-3 px-4">{row[1]}</td>
                  <td className="py-3 px-4">{row[2]}</td>
                  <td className="py-3 px-4">{row[3]}</td>
                  <td className="py-3 px-4">{row[4]}</td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}
