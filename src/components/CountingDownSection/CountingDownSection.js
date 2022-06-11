import "./CountingDownSection.modules.css";
import HeartDivider from "../HeartDivider/HeartDivider";
import { useEffect, useState } from "react";

function CountingDownSection() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const countDown = new Date("8/13/2022").getTime();
  const [distance, setDistance] = useState(countDown - new Date().getTime());

  useEffect(() => {
    const intervalID = setInterval(() => {
      const now = new Date().getTime();
      setDistance(countDown - now);
    }, 1000);
    return () => clearInterval(intervalID);
  }, [countDown]);

  return (
    <section id="location-countdown">
      <div
        class="image-divider auto-height"
        style={{ backgroundImage: "url(assets/images/torredenunez.jpg)" }}
      >
        <div class="divider-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-offset-1 col-md-10 text-center">
              <div class="">
                <div id="counting-down">
                  <div id="counting">Cuenta</div>
                  <div id="down">Atrás</div>
                </div>
              </div>

              <HeartDivider isWhite />
              <div id="countdown">
                <div id="countdownLi">
                  <span id="days">{Math.floor(distance / day)}</span>D
                </div>
                <div id="countdownLi">
                  <span id="hours">{Math.floor((distance % day) / hour)}</span>H
                </div>
                <div id="countdownLi">
                  <span id="minutes">
                    {Math.floor((distance % hour) / minute)}
                  </span>
                  M
                </div>
                <div id="countdownLi">
                  <span id="seconds">
                    {Math.floor((distance % minute) / second)}
                  </span>
                  S
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountingDownSection;
