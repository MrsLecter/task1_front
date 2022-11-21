import "./Footer.scss";

import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__siteInfo">
        <p>
          <p>
            <a href="https://correctarium.com/terms">
              Договір публічної оферти
            </a>
          </p>
          <p>&#169; Correctarium</p>
          <p>2015–2022</p>
        </p>
      </div>
      <div className="footer__logo">
        <img src={logo} alt="logo.png" />
      </div>
      <div className="footer__feedback">
        <p>Надіслати текст на переклад:</p>
        <a href="mailto: manager@correctarium.com">manager@correctarium.com</a>
      </div>
    </div>
  );
};
