import "./HeartDivider.modules.css";

import { FaHeart } from "react-icons/fa";

function HeartDivider({ isWhite, noLines }) {
  return (
    <div class="heart-divider" style={{ margin: "0" }}>
      {!noLines && <span class={isWhite ? "white-line" : "grey-line"}></span>}
      <span class="pink-heart">
        <FaHeart />
      </span>

      <span class={isWhite ? "white-heart" : "grey-heart"}>
        <FaHeart />
      </span>
      {!noLines && <span class={isWhite ? "white-line" : "grey-line"}></span>}
    </div>
  );
}
export default HeartDivider;
