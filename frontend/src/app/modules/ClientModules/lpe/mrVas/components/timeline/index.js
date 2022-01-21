import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import "swiper/components/pagination/pagination.min.css";
import "./styles/styles.scss";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Timeline() {
  const refPagination = useRef();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const ref = refPagination.current;

      let year = ref
        .querySelectorAll(".swiper-slide")
        [index].getAttribute("data-year");

      return '<span class="' + className + '">' + year + "</span>";
    },
  };

  return (
    <div className="wrapper-timeline my-5">
      <div className="timeline">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="swiper-container"
          direction={"vertical"}
          pagination={pagination}
          navigation={true}
          speed={1500}
          ref={refPagination}
          allowTouchMove={false}
          noSwiping
        >
          <SwiperSlide
            style={{
              backgroundImage: "url(https://unsplash.it/1920/500?image=13)",
            }}
            className="swiper-slide"
            data-year="2020"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2020</span>

              <h4 className="timeline-title">Our nice super title</h4>
              <p className="timeline-text">
                Lorem ipsum dolor site amet, consectetur adipscing elit, sed do
                eisumod tempor incididut ut labore et dolore magna aliqua. Ut
                enim ad mimim venjam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide"
            style={{
              backgroundImage: "url(https://unsplash.it/1920/500?image=14)",
            }}
            data-year="2021"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2021</span>

              <h4 className="timeline-title">Our nice super title</h4>
              <p className="timeline-text">
                Lorem ipsum dolor site amet, consectetur adipscing elit, sed do
                eisumod tempor incididut ut labore et dolore magna aliqua. Ut
                enim ad mimim venjam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="swiper-slide"
            style={{
              backgroundImage: "url(https://unsplash.it/1920/500?image=15)",
            }}
            data-year="2022"
          >
            <div className="swiper-slide-content">
              <span className="timeline-year">2022</span>

              <h4 className="timeline-title">Our nice super title</h4>
              <p className="timeline-text">
                Lorem ipsum dolor site amet, consectetur adipscing elit, sed do
                eisumod tempor incididut ut labore et dolore magna aliqua. Ut
                enim ad mimim venjam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Timeline;
