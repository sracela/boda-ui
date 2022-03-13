// import "./flexslider.css";
import "./MainSlider.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

import { FaHeart } from "react-icons/fa";

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
  return (
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
                  <div
                    class="banner-text light medium"
                    style={{ letterSpacing: "3px" }}
                  >
                    <h4>*** NOS CASAMOS ***</h4>
                  </div>
                  <div class="heart-divider" style={{ margin: "0" }}>
                    <span class="white-line" style={{ width: "10px" }}></span>
                    <span class="pink-heart">
                      <FaHeart />
                    </span>

                    <span class="white-heart">
                      <FaHeart />
                    </span>
                    <span class="white-line" style={{ width: "10px" }}></span>
                  </div>
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
          className="slide-image image-1"
          // style={{
          //   backgroundImage: "url('assets/images/banner-1.jpg')",
          // }}
        ></div>

        <div
          className="slide-image"
          style={{
            backgroundImage: "url('assets/images/banner-2.jpg')",
          }}
        ></div>
        <div
          className="slide-image image-3"
          // style={{
          //   backgroundImage: "url('assets/images/banner-3.jpg')",
          // }}
        ></div>
      </Carousel>
    </section>
  );
}

export default MainSlider;
