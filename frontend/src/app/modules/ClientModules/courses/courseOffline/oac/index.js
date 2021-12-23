import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import "./styles/styles.scss";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function OAC() {
  useSiteTitle("OAC_program");

  const imgStudent = [
    "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/oac/trai-thieu-nien-xuat-chung-oac-lpe-hinhhocvien-01.jpg",
    "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/oac/trai-thieu-nien-xuat-chung-oac-lpe-hinhhocvien-02.jpg",
    "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/oac/trai-thieu-nien-xuat-chung-oac-lpe-hinhhocvien-03.jpg",
    "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/oac/trai-thieu-nien-xuat-chung-oac-lpe-hinhhocvien-04.jpg",
  ];

  return (
    <div className="container-fluid oac">
      <div className="">
        <div className="row flex-alignitem">
          <img
            src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/oac/trai-thieu-nien-xuat-chung-oac-lpe-banner.jpg"
            alt="img"
          />
          <div className="col-md-6 offset-md-3 mt-3">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/9zXcFWl9u2Y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="row flex-alignitem mt-3">
          <div className="col-xl-8 offset-xl-2">
            <div className="row flex-alignitem ">
              <div className="col-xl-3 offset-xl-0 col-sm-8 offset-sm-2">
                <img
                  src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/oac/trai-thieu-nien-xuat-chung-oac-lpe-hinh-01.png"
                  alt="img"
                  className="img-500"
                />
              </div>
              <div className="col-xl-9 ">
                <div className="camp flex-alignitem">
                  <p>
                    TRẠI THIẾU NIÊN XUẤT CHÚNG (Outstanding Achiever Camp) -
                    Trại Huấn Luyện Thiếu Niên Xuất Chúng về Tâm trí và Thể Chất
                    thông qua phương pháp NLP (Neuro - Linguistic Programming)
                    do chuyên gia hàng đầu Châu Á - NLP Master Trainer Vasanth
                    Gopalan thiết kế và trực tiếp huấn luyện.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 text-center">
          <div className="col-md-10 offset-md-1">
            <h3>
              CÁC BÉ NHẬN ĐƯỢC GIÁ TRỊ VÀ CHUYỂN HÓA NHƯ THẾ NÀO TRONG TRẠI HUẤN
              LUYỆN NÀY?
            </h3>

            <Swiper
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              pagination={{ clickable: true }}
            >
              {imgStudent.map((item, index) => {
                return (
                  <SwiperSlide className="item-swiper" key={index}>
                    <img src={item} alt={item} className="img-fluid" />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="mt-5">
              <p>Giúp các bé hiểu & nhận biết tài năng của mình là gì?</p>
              <p>Nhận ra được đam mê của các bé là gì?</p>
              <p>Hiểu rõ tầm quan trọng của đội nhóm & làm việc đội nhóm.</p>
              <p>Tạo dựng kỹ năng làm việc nhóm - hỗ trợ nhóm.</p>
              <p>Thực hiện các trò chơi mang tính học tập & đội nhóm cao.</p>
              <p>
                Biết được vì sao lại có trẻ thông minh và trẻ không thông minh.
              </p>
              <p>Quy trình làm tăng sự tự tin của các bé.</p>
              <p>
                Khai mở khả năng sáng tạo không giới hạn có sẵn trong mỗi bé.
              </p>
              <p>Thiết lập tầm nhìn, mục tiêu cho các em.</p>
              <p>
                Đây chỉ là một trong số ít những giá trị mà Mr.Vas mang lại, sẽ
                còn nhiều bài học & bài tập thực hành thú vị nữa đến với các bé.
              </p>
            </div>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfN6GjwiRG6z_2NmYBTS4aOA3L4TdLwlSFXGt_f7edEV2SC4Q/viewform?usp=send_form">
              <img
                src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/pp/tim-lai-le-song-va-khat-vong-thanh-cong-gif-dang-ky-ngay.gif"
                alt="img"
                className="mt-3 col-md-4 offset-md-4 col-sm-6 offset-sm-3 pb-3"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OAC;
