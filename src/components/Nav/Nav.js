import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Nav.modules.css";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";
import { FiHome, FiInfo, FiMusic, FiCamera } from "react-icons/fi";

export const Nav = ({ isDefault }) => {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);

  return (
    <header
      className={
        isMobile
          ? "main-slide-header-mobile"
          : isDefault
          ? "default-header"
          : "main-slide-header"
      }
    >
      <nav className="nav-header">
        <ul className={isMobile ? "ul-header-mobile" : "ul-header"}>
          <li>
            <Link to="/home">
              <FiHome />
              <span className="icon-text">INICIO</span>
              <span className="icon-text"></span>
            </Link>
          </li>
          <li>
            <Link to="/la-boda">
              <FiInfo />
              <span className="icon-text">LA BODA</span>
              <span className="icon-text"></span>
            </Link>
          </li>
          <li>
            <Link to="/la-musica">
              <FiMusic />
              <span className="icon-text">LA MÚSICA</span>
              <span className="icon-text"></span>
            </Link>
          </li>

          <li className="disabled">
            <Link to="/sube-tus-fotos">
              <FiCamera />
              <span className={`icon-text ${isMobile ? "large-text" : ""}`}>
                SUBE TUS FOTOS
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
