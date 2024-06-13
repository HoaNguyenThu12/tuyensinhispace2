// Navigation.js
import React, { useContext } from 'react';// Import the ThemeContext
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Contexts/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Use the ThemeContext

    return (
        <>
        <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <Link className="navbar-brand">
          <img src="./img/logo.png" alt="Logo" />
        </Link>
        <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home"><i className="fa-solid fa-house txt_deco"></i></Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                CHƯƠNG TRÌNH ĐÀO TẠO
              </a>
              <div className="dropdown-menu submenu" aria-labelledby="navbarDropdown1">
                <Link className="dropdown-item" to="/an-ninh-mang">An Ninh Mạng</Link>
                <Link className="dropdown-item" to="/phat-trien-phan-mem">Phát Triển Phần Mềm</Link>
                <Link className="dropdown-item" to="/thiet-ke-do-hoa">Thiết Kế Đồ Họa</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                KHÓA HỌC NGẮN HẠN
              </a>
              <div className="dropdown-menu submenu" aria-labelledby="navbarDropdown2">
                <Link className="dropdown-item" to="/khoa-hoc-ceh">Khóa học CEH</Link>
                <Link className="dropdown-item" to="/khoa-hoc-aws">Khóa học AWS</Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dang-ky-ngay">ĐĂNG KÝ NGAY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data-board">DATABOARD</Link>
            </li>
            <li className="nav-item">
              <button onClick={toggleTheme} >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </>
    );
};

export default Header;