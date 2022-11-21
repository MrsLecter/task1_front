import { HeaderProps } from "./HeaderTypes";
import "./Header.scss";
import closeSvg from "../../assets/close.svg";

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header__title">
        <p>{label}</p>
      </div>
      <div className="header__close">
        <a href="https://correctarium.com/">
          <img src={closeSvg} alt="close.svg" />
        </a>
      </div>
    </div>
  );
};
