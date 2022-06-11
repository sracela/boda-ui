import "./Preloader.modules.css";
import { FaHeart } from "react-icons/fa";

function Preloader() {
  return (
    <div id="preloader">
      <div className="alignment">
        <div className="v-align center-middle">
          <div className="heart-animation">
            <FaHeart />
          </div>
          <div className="heart-animation-reverse">
            <FaHeart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
