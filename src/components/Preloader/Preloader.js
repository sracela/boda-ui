import "./Preloader.css";
import { FaHeart } from "react-icons/fa";

function Preloader() {
  return (
    <div id="preloader">
      <div class="alignment">
        <div class="v-align center-middle">
          <div class="heart-animation">
            <FaHeart />
          </div>
          <div class="heart-animation-reverse">
            <FaHeart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
