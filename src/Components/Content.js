import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import SheetsForm from './SheetForm';


function Content() {
    
    const [isStopped, setIsStopped] = useState(false);

    const stopMarquee = () => {
        setIsStopped(true);
    };

    const startMarquee = () => {
        setIsStopped(false);
    };
    
    return (
        <div>
            <div id="background-img">
        <img
          src="./img/bgnav.jpg"
          alt="ispace" 
          className="responsive-image"
        />
      </div>
            <div className="hmv-box">
                <div className="container">
                    <div className="row">
                        <h1 className="text">CHƯƠNG TRÌNH ĐÀO TẠO CHỈ 2 NĂM 3 THÁNG</h1>
                        <div className="container text-center">
                            <div className="row align-items-start">
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="mon">
                                        <p className="tenmon"><Link to="/an-ninh-mang">AN NINH MẠNG</Link></p>
                                        <img className="hinh" src="./img/ANM.png" alt="AN NINH MẠNG" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="mon">
                                        <p className="tenmon"><Link to="/phat-trien-phan-mem">PHÁT TRIỂN PHẦN MỀM</Link></p>
                                        <img className="hinh" src="./img/PTPM.png" alt="PHÁT TRIỂN PHẦN MỀM" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="mon">
                                        <p className="tenmon"><Link to="/thiet-ke-do-hoa">THIẾT KẾ ĐỒ HỌA</Link></p>
                                        <img className="hinh" src="./img/TKDH.png" alt="THIẾT KẾ ĐỒ HỌA" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="text">
                            <h1>TRƯỜNG CAO ĐẲNG AN NINH MẠNG ISPACE </h1>
                        </div>
                        <div className="col-lg-5">
                            <img
                                className="img-fluid rounded mb-4 mb-lg-0"
                                src="./img/img_1.jpg"
                                alt="" />
                        </div>
                        <div className="col-lg-7">

                            <p>
                                Trường Cao Đẳng An ninh mạng iSPACE là đơn vị tiên phong trong đào tạo thực hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng. Từ năm 2015, Trường iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt “CNTT- Học để làm việc ngay”. Chương trình mang đến cho các bạn trẻ đam mê CNTT ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ. Năm học 2021- 2022, trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ sở vật chất với quy mô hiện đại và sáng tạo theo xu hướng trường học quốc tế.
                            </p>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                Xem Thêm {'>>'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className="text-center">
                    <h1>ISPACE VÀ NHỮNG CON SỐ BIẾT NÓI</h1>
                </div>
                <div className="container">
                    <div className="row text-left stat-wrap">
                        <div className="col-md-3 col-sm-6 col-xs-12 stat-item">
                            <div className="icon_wrap">
                                <img
                                    className="img-fluid rounded mb-4 mb-lg-0"
                                    src="./img/course2-icon2.png"
                                    alt="" />
                            </div>
                            <p className="stat_count">100%</p>
                            <h3>Sinh viên có việc làm ngay</h3>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 stat-item">

                            <div className="icon_wrap">
                                <img
                                    className="img-fluid rounded mb-4 mb-lg-0"
                                    src="./img/course2-icon1.png"
                                    alt="" />
                            </div>
                            <p className="stat_count">15,000</p>
                            <h3>Sinh viên được đào tạo</h3>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 stat-item">
                            <div className="icon_wrap">
                                <img
                                    className="img-fluid rounded mb-4 mb-lg-0"
                                    src="./img/course2-icon4.png"
                                    alt="" />
                            </div>
                            <p className="stat_count">70%</p>
                            <h3>Thực hành</h3>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 stat-item">
                            <div className="icon_wrap">
                                <img
                                    className="img-fluid rounded mb-4 mb-lg-0"
                                    src="./img/course2-icon3.png"
                                    alt="" />
                            </div>
                            <p className="stat_count">18 năm</p>
                            <h3>Kinh nghiệm đào tạo</h3>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/>
           
            <div>
            <div className="text-center">
                <h1>ĐẶC QUYỀN KHI TRỞ THÀNH SINH VIÊN ISPACE</h1>
            </div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div>
                            <img
                                className="larger-img"
                                src="./img/icon_1-768x185.png"
                                alt="icon 1" />
                            <p className="stat_count1">Hơn 300 CLB</p>
                            <h3 className="benefit-description">Cơ hội tham gia hoạt động ngoại khóa, rèn kỹ năng mềm với hơn 300 CLB tại Làng Đại học Quốc gia TP.HCM</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div>
                            <img
                                className="larger-img"
                                src="./img/icon_2.png"
                                alt="icon 2" />
                            <p className="stat_count1">Môi trường đẳng cấp</p>
                            <h3 className="benefit-description">Cao đẳng duy nhất có trung tâm SOC (Security Operation Center). Sinh viên thực hành với dự án thực tế.</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div>
                            <img
                                className="larger-img"
                                src="./img/icon-3.png"
                                alt="icon 3" />
                            <p className="stat_count1">Việc làm sẵn có</p>
                            <h3 className="benefit-description">Mô hình giảng dạy theo đặt hàng từ doanh nghiệp, đầu ra hơn 100 doanh nghiệp, cam kết giới thiệu đến khi có việc làm.</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div>
                            <img
                                className="larger-img"
                                src="./img/icon_4-768x185.png"
                                alt="icon 4" />
                            <p className="stat_count1">Liên thông đại học công TOP đầu</p>
                            <h3 className="benefit-description">Cơ hội liên thông với đại học công top đầu (ĐH CNTT, ĐH SPKT, ĐH Bách Khoa, ĐH Công nghiệp…)</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/* Registration Start */}
            <SheetsForm></SheetsForm>


            {/* Registration End */}

            <div>
            <h1 style={{ textAlign: 'center', color: '#F57E25' }}>DOANH NGHIỆP </h1>
            <marquee behavior="alternate" scrollamount="25" onMouseMove={stopMarquee} onMouseOut={startMarquee}>
                <img className="imgs" src="./img/dn1.jpg" alt="DN1" /> <img className="imgs" src="./img/dn2.jpg" alt="DN2" /> <img className="imgs"
                    src="./img/dn3.jpg" alt="DN3" />
                <img className="imgs" src="./img/dn4.jpg" alt="DN4" />
                <img className="imgs" src="./img/dn5.jpg" alt="DN5" /> <img className="imgs" src="./img/dn6.jpg" alt="DN6" /> <img className="imgs"
                    src="./img/dn7.jpg" alt="DN7" />
                <img className="imgs" src="./img/dn8.jpg" alt="DN8" />
                <img className="imgs" src="./img/dn9.jpg" alt="DN9" /> <img className="imgs" src="./img/dn10.jpg" alt="DN10" /> <img className="imgs"
                    src="./img/dn11.jpg" alt="DN11" />
                <img className="imgs" src="./img/dn12.jpg" alt="DN12" />
                <img className="imgs" src="./img/dn13.png" alt="DN13" /> <img className="imgs" src="./img/dn14.jpg" alt="DN14" /> <img className="imgs"
                    src="./img/dn15.jpg" alt="DN15" />
                <img className="imgs" src="./img/dn16.jpg" alt="DN16" />
            </marquee>
        </div>
        </div>
    );
};

export default Content;