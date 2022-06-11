import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Nav.modules.css";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";

export const Nav = () => {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);

  return (
    <header
      className={isMobile ? "main-slide-header-mobile" : "main-slide-header"}
    >
      <nav className="nav-header">
        <ul className={isMobile ? "ul-header-mobile" : "ul-header"}>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/la-boda">LA BODA</Link>
          </li>
          <li>
            <Link to="/la-musica">PON LA MÚSICA</Link>
          </li>

          <li className="disabled">
            <Link to="/sube-tus-fotos">SUBE TUS FOTOS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
