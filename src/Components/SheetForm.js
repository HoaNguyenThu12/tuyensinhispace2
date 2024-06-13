import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { GoogleSheetInfo } from "../constants/google-sheet-info";

const formKey = {
  name: "name",
  email: "email",
  tel: "tel",
  course: "course",
  object: "object",
};

const SheetsForm = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [inputData, setInputData] = useState({
    [formKey.name]: "",
    [formKey.email]: "",
    [formKey.tel]: "",
    [formKey.course]: "",
    [formKey.object]: "",
  });
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
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
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: GoogleSheetInfo.spreadsheetId,
        valueInputOption: "RAW",
        range: "Sheet1",
        resource: {
          values: [
            [
              inputData[formKey.name],
              inputData[formKey.email],
              inputData[formKey.tel],
              inputData[formKey.course],
              inputData[formKey.object],
            ],
          ],
        },
      });

      if (response.status === 200) {
        setMessage("Data submitted successfully");
        setShowSuccessMessage(true);
        // Reset input data after submission
        setInputData({
          [formKey.name]: "",
          [formKey.email]: "",
          [formKey.tel]: "",
          [formKey.course]: "",
          [formKey.object]: "",
        });
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      } else {
        setMessage("Error submitting data");
      }
    } catch (error) {
      console.error("Error writing to spreadsheet:", error);
      setMessage("Error submitting data");
    }
  };

  const handleSuccessMessageClose = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div>
      <div>
      
        <div className="container-fluid bg-registration py-5" style={{ margin: "90px 0", backgroundColor: "#B8A793" }}>
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="col-lg-7 mb-5 mb-lg-0 position-relative">
                <img
                  src="./img/DSCF9681-768x512.jpg"
                  className="img-fluid rounded"
                  alt="Sample photo"
                />
              </div>
              <div className="col-lg-5">
                <div className="card border-0">
                  
                  <div className="card-header text-center p-4">
                    <h1 className="m-0 text-dark">Điền thông tin dưới đây</h1>
                  </div>
                  <div className="card-body rounded-bottom p-5">
                    <form autoComplete='off' onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Họ và tên"
                          className="form-control border-0 p-4 form-input"
                          name={formKey.name}
                          value={inputData[formKey.name]}
                          onChange={handleInputChange}
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control border-0 p-4 form-input"
                          name={formKey.email}
                          value={inputData[formKey.email]}
                          onChange={handleInputChange}
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          placeholder="Số điện thoại"
                          className="form-control border-0 p-4 form-input"
                          name={formKey.tel}
                          value={inputData[formKey.tel]}
                          onChange={handleInputChange}
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <select
                          className="custom-select border-0 px-4 form-input"
                          style={{ height: 47 }}
                          placeholder="Ngành học"
                          name={formKey.course}
                          value={inputData[formKey.course]}
                          onChange={handleInputChange}
                        >
                          <option value="">Ngành học</option>
                          <option>An ninh mạng</option>
                          <option>Lập trình máy tính</option>
                          <option>Thiết kế đồ họa</option>
                          <option>Thương mại điện tử</option>
                          <option>Quản trị mạng</option>
                          <option>CEH</option>
                          <option>AWS</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <select
                          className="custom-select border-0 px-4 form-input"
                          style={{ height: 47 }}
                          placeholder="Đối Tượng Đăng Ký"
                          name={formKey.object}
                          value={inputData[formKey.object]}
                          onChange={handleInputChange}
                        >
                          <option value="">Đối Tượng Đăng Ký</option>
                          <option>Học sinh đang học 12 (đăng ký giữ chỗ)</option>
                          <option>Học sinh tốt nghiệp THPT</option>
                          <option>Sinh viên</option>
                          <option>Người đi làm</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-dark btn-block border-0 py-3"
                      >
                        Đăng ký
                      </button>
                      <br></br><br/>
                      {showSuccessMessage && (
        <div className="alert alert-success" role="alert">
          Đăng ký thành công! Cảm ơn bạn đã đăng ký.
          <button
            type="button"
            className="close"
            onClick={handleSuccessMessageClose}
          >
            <span>&times;</span>
          </button>
        </div>
      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheetsForm;
