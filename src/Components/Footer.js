import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
          <div id="header2" >
            <h3 className="overlay-title">BẠN MUỐN TRỞ THÀNH CHUYÊN GIA CÔNG NGHỆ?</h3>
              <p className="overlay-content">
              Hãy đến với chúng tôi - Trường Cao đẳng An ninh mạng iSPACE - Đơn vị trực thuộc NGS Group.
              </p>
              <a className="overlay-title">
                <a className="btn btn-outline-light mr-2" href="#"><i class="fab fa-twitter fa-2x"></i></a>
                <a className="btn btn-outline-light mr-2" href="https://www.facebook.com/ispace.vn"><i class="fab fa-facebook-f fa-2x"></i></a>
                <a className="btn btn-outline-light mr-2" href="https://www.youtube.com/user/ispacechannel"><i class="fa-brands fa-youtube fa-2x"></i></a>
              </a>
          </div>
    );
  };
  export default Footer;