// import "./flexslider.css";
import "./MainSlider.modules.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import HeartDivider from "../HeartDivider/HeartDivider";
import { useEffect, useState } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 1,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 870 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 870, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  arrows: true,
  autoPlaySpeed: 5000,
  // customButtonGroup: <ButtonGroup />,
  // dotListClass: "",
  className: "carousel-container",
  draggable: false,
  infinite: true,
  // itemClass: "",
  // keyBoardControl: true,
  // minimumTouchDrag: 80,
  // renderButtonGroupOutside: true,
  // renderDotsOutside: false,
  responsive: responsive,
  // showDots: false,
  // sliderClass: "",
  slidesToSlide: 1,
};

function MainSlider() {
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
    <>
      <section id="main-slider" class="flexslider" style={{ height: "100vh" }}>
        {/* MAIN SLIDER TITLE OUTTER WRAPPER */}
        <div class="slide-title-outter-wrapper">
          {/* MAIN SLIDER TITLE INNER WRAPPER */}
          <div class="slide-title-inner-wrapper">
            {/* TITLE */}
            <div class="slide-title align-middle">
              <div class="container">
                <div class="row">
                  <div class="col-md-offset-3 col-md-6 animation delay1 fadeInUp">
                    <div id="save-the-date">
                      <div id="save">Paula</div>
                      <div id="the-date">y Martín</div>
                      <div id="date">
                        - 13<span class="pink-dot">.</span>08
                        <span class="pink-dot">.</span>22 -
                      </div>
                    </div>
                    <div id="countdown">
                      <div id="countdownLi">
                        <span id="days">{Math.floor(distance / day)}</span>D
                      </div>
                      <div id="countdownLi">
                        <span id="hours">
                          {Math.floor((distance % day) / hour)}
                        </span>
                        H
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
                    <HeartDivider isWhite />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MAIN SLIDER IMAGES */}
        {/* <ul class="slides"> */}
        <Carousel {...carouselParams}>
          <div
            className="slide-image"
            style={{
              backgroundImage: "url('assets/images/formatted/banner-1.webp')",
            }}
          ></div>

          <div
            className="slide-image"
            style={{
              backgroundImage: "url('assets/images/formatted/banner-2.webp')",
            }}
          ></div>
          <div
            id="image-3"
            className="slide-image"
            style={{
              backgroundImage: "url('assets/images/formatted/banner-3.webp')",
            }}
          ></div>
        </Carousel>
      </section>
    </>
  );
}

export default MainSlider;
