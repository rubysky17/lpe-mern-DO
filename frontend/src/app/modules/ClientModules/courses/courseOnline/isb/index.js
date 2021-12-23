import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import useSiteTitle from "core/hooks/useSiteTitle";

import "./styles/styles.scss";

const intended_text = [
  {
    block: (
      <>
        Bất kì ai cũng cần có hệ miễn dịch tốt, những sẽ phù hợp nhất với những
        người <strong>trên 50 tuổi</strong>.
      </>
    ),
  },
  {
    block: (
      <>
        Người đang mắc phải những căn bệnh nền, phải{" "}
        <strong>phụ thuộc vào</strong> nhiều loại <strong>thuốc</strong> khác
        nhau.
      </>
    ),
  },
  {
    block: (
      <>
        Người luông mong muốn khỏe mạnh, nhưng đâu đó vẫn mang trong mình những{" "}
        <strong>nỗi sợ về tuổi già</strong>, sợ mình không thể ở bên con cháu.
      </>
    ),
  },
  {
    block: (
      <>
        Người có niềm tin rằng "Một khi tôi lớn tuổi,{" "}
        <strong>tôi sẽ không còn sức khỏe và sẽ mắc bệnh.</strong>"
      </>
    ),
  },
  {
    block: (
      <>
        Và chương trình cũng dành cho những người con{" "}
        <strong>mong muốn cha mẹ được khỏe mạnh!</strong> Bạn có thể tham gia để
        đồng hành với ba mẹ mình.
      </>
    ),
  },
];

const image_isb = [
  "https://lpe.vn/img/isb/isb-1.png",
  "https://lpe.vn/img/isb/isb-2.png",
  "https://lpe.vn/img/isb/isb-3.png",
  "https://lpe.vn/img/isb/isb-4.png",
  "https://lpe.vn/img/isb/isb-5.png",
];

const QA_block = [
  "Làm sao vượt qua căn bệnh của tuổi già?",
  "Làm sao để sống một cuộc sống không thuốc men?",
  "Làm sao để luôn tăng cường mức năng lượng dù tuổi tác cũng tăng?",
  "Làm sao để nhận thức và kiểm soát được Hệ thống miễn dịch của cơ thể?",
  "Làm thế nào để tận hưởng tuổi về hưu, làm bất kì điều gì mình muốn nhưng vẫn duy trì lối sống khỏe mạnh?",
];

SwiperCore.use([Autoplay, Pagination, Navigation]);

function ISBPage() {
  useSiteTitle("isb");

  return (
    <>
      <div className="isb-banner">
        <div
          className="container"
          style={{
            height: "100%",
          }}
        >
          <div className="row isb-banner_container">
            <div className="col-12 col-md-6 inner-text">
              <h2>Immune System Booster</h2>
              <p>Tăng cường hệ miễn dịch từ tâm trí.</p>
            </div>

            <div className="col-12 col-md-6 inner-pic">
              <img
                src="https://lpe.vn/img/isb/isb-8.png"
                alt="https://lpe.vn/img/isb/isb-8.png"
                className="img-fluid banner-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="dash-color"></div>

      <div className="isb-intended">
        <div
          className="container"
          style={{
            height: "100%",
          }}
        >
          <div className="row isb-banner_container">
            <div className="col-12 col-lg-6 intended-pic"></div>

            <div className="col-12 col-lg-6 py-3 intended-text">
              <h2>Chương trình này dành cho ai?</h2>

              <div className="intended-text_block">
                {intended_text.map((t, index) => {
                  return (
                    <div className="indended-block">
                      <div className="icon-inline">
                        <i className="fal fa-plus"></i>
                      </div>

                      <span className="text-inline">{t.block}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid img-isb">
        <h2>Hình ảnh</h2>

        <p>
          Tổ chức chương trình huấn luyện, đào tạo cường độ cao, hàng chục lần
          chinh phục những đỉnh núi lớn
        </p>

        <Swiper
          slidesPerView={1}
          className="swiper-container"
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {image_isb.map((t, index) => {
            return (
              <SwiperSlide key={index}>
                <div key={index} className="slick-item">
                  <img src={t} alt={t} className="img-fluid" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="isb-QA">
        <div className="overlay"></div>
        <div className="container">
          <div className="row isb-banner_container">
            <div className="col-12 col-md-6 intended-text py-5">
              <h2>
                Bạn thắc mắc Mr.Vas trở thành người đầy khỏe mạnh ở độ tuổi 66
                như thế nào?
              </h2>

              <div className="intended-text_block">
                {QA_block.map((t, index) => {
                  return (
                    <p className="text-QA" key={index}>
                      - {t}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="col-12 col-md-6 intended-pic">
              {/* <img
                src="https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/home-8-2-1.jpg"
                alt="https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/home-8-2-1.jpg"
                className="img-fluid banner-img"
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div
          className="row text-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-12 col-md-8">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/52eDVwnjbyc"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="isb-price pt-5">
        <div className="text-center">
          <h2>Bảng giá</h2>

          <div className="bg-price">
            <img
              src="https://lpe.vn/img/isb/isb-price.png"
              alt="https://lpe.vn/img/isb/isb-price.png"
              className="img-fluid"
            />

            <Link to="/chuong-trinh-huan-luyen/online/immune-system-booster/register">
              <img
                src="https://lpe.vn/img/isb/isb-btn.png"
                alt="https://lpe.vn/img/isb/isb-btn.png"
                className="img-fluid mt-3"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ISBPage;
