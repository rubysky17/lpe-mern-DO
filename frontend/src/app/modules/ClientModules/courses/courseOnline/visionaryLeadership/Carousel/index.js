import React from "react";

import "./styles/styles.scss";

function Carousel() {
  function imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  return (
    <div className="wrapper-slider">
      <div className="carousel-inner">
        <div className="item active">
          <img
            src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/visionary-leadership/slider-01.jpg"
            alt="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/visionary-leadership/slider-01.jpg"
            className="img-fluid"
            onLoad={imageLoaded}
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
