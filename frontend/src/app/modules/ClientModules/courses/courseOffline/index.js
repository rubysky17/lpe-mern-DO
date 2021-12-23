import React from "react";
import LPEBanner from "app/components/banner";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Navigation } from "swiper";
import CourseItemOffline from "./components/courseItem";
import useSiteTitle from "core/hooks/useSiteTitle";

import "./styles/styles.scss";
import { API_SOURCE } from "app/const/Api";

// install Swiper modules
SwiperCore.use([Scrollbar, Navigation]);

function CourseOffline() {
  useSiteTitle("offline_page");

  const combo6 = [
    {
      id: 1,
      name: "khóa 1",
      title: "tìm lại lẽ sống và khát vọng thành công",
      bgCourse: `${API_SOURCE}/offline/khoa01.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/tim-lai-le-song-va-khat-vong-thanh-cong",
    },
    {
      id: 2,
      name: "khóa 2",
      title: "nghệ thuật sống hạnh phúc và hòa hợp",
      bgCourse: `${API_SOURCE}/offline/khoa02.jpg`,
      textColor: "#333",
      link: "/chuong-trinh-huan-luyen/offline/nghe-thuat-song-hanh-phuc-va-hoa-hop",
    },
    {
      id: 3,
      name: "khóa 3",
      title: "thắp sáng cuộc đời bạn",
      bgCourse: `${API_SOURCE}/offline/khoa03.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/thap-sang-cuoc-doi-ban",
    },
    {
      id: 4,
      name: "khóa 4",
      title: "sức khỏe toàn diện",
      bgCourse: `${API_SOURCE}/offline/khoa04.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/suc-khoe-toan-dien",
    },
    {
      id: 5,
      name: "khóa 5",
      title: "tư duy xuất chúng",
      bgCourse: `${API_SOURCE}/offline/khoa05.jpg`,
      link: "/chuong-trinh-huan-luyen/offline/tu-duy-xuat-chung",
    },
    {
      id: 6,
      name: "khóa 6",
      title:
        "ứng dụng lập trình ngôn gnữ tư duy vào cuộc sống - tư vấn trị liệu",
      bgCourse: `${API_SOURCE}/offline/khoa06.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/ung-dung-lap-trinh-ngon-ngu-tu-duy-vao-cuoc-song-tu-van-tri-lieu",
    },
  ];

  const combo10 = [
    {
      id: 11,
      name: "Combo 6",
      title: "Các khóa Combo 6",
      bgCourse: `${API_SOURCE}/offline/Combo.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline",
    },
    {
      id: 7,
      name: "khóa 7",
      title:
        "niềm tin và giá trị đầy nội lực của những con người tân tiến nhất - niềm tin và giá trị của những con người xuất chúng",
      bgCourse: `${API_SOURCE}/offline/khoa07.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/niem-tin-va-gia-tri-day-noi-luc-cua-nhung-con-nguoi-tan-tien-nhat",
    },
    {
      id: 8,
      name: "khóa 8",
      title: "nghệ thuật lãnh đão xuất chúng và nghệ thuật giao tiếp cấp cao",
      bgCourse: `${API_SOURCE}/offline/khoa08.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/nghe-thuat-lanh-dao-xuat-chung-va-nghe-thuat-giao-tiep-cap-cao",
    },
    {
      id: 9,
      name: "khóa 9",
      title:
        "TÌM LẠI NHÂN DẠNG ĐÍCH THỰC CỦA BẠN VÀ SỬ DỤNG KHOA HỌC TÂM THỨC ĐỂ ĐẠT ĐƯỢC THÀNH CÔNG CỰC ĐẠI - KIẾN TẠO ĐỜI SỐNG TÂM LINH",
      bgCourse: `${API_SOURCE}/offline/khoa09.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/tim-lai-nhan-dang-dich-thuc-kien-tao-doi-song-tam-linh",
    },
    {
      id: 10,
      name: "khóa 10",
      title:
        "CHINH PHỤC TÂM TRÍ & CƠ THỂ CỦA BẢN THÂN VÀ LÀM CHỦ CUỘC ĐỜI CỦA MỘT MASTER NLP - BẬC THẦY CUỘC ĐỜI",
      bgCourse: `${API_SOURCE}/offline/khoa10.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/chinh-phuc-tam-tri-co-the-cua-ban-than-va-lam-chu-cuoc-doi",
    },
  ];

  const otherCourse = [
    {
      id: 1,
      name: "Trại huấn luyện lãnh đạo",
      title: "Trại huấn luyện lãnh đạo",
      bgCourse: `${API_SOURCE}/offline/LTC.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/trai-huan-luyen-lanh-dao",
    },
    {
      id: 2,
      name: "Trại thiếu niên xuất chúng",
      title: "Trại thiếu niên xuất chúng",
      bgCourse: `${API_SOURCE}/offline/OAC.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/trai-thieu-nien-xuat-chung",
    },
    {
      id: 3,
      name: "Nghệ thuật truyền cảm hứng & nuôi dạy con xuất chúng",
      title: "Nghệ thuật truyền cảm hứng & nuôi dạy con xuất chúng",
      bgCourse: `${API_SOURCE}/offline/PAR.jpg`,
      textColor: "#fff",
      link: "/chuong-trinh-huan-luyen/offline/nghe-thuat-truyen-cam-hung-nuoi-day-con-xuat-chung",
    },
  ];

  return (
    <div className="courseOffline-page">
      <LPEBanner
        bannerImg={`${API_SOURCE}/banner/khoa-hoc-offline-banner.jpg`}
        headText="Khóa học Offline"
        subText="LPE có các khóa học trực tiếp nhằm cung cấp trải nghiệm học tốt nhất cho học viên."
      />

      <div className="container">
        <div className="heading">
          <h3 className="heading-text">Combo 6</h3>
          <p className="heading-desc">
            Combo gồm 6 khóa học của chương trình LPE nằm trong combo 10
          </p>
        </div>

        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="mySwiper my-3"
          breakpoints={{
            // 640: {
            //   slidesPerView: 2,
            //   spaceBetween: 20,
            // },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
        >
          {combo6.map((y) => {
            return (
              <SwiperSlide key={y.id}>
                <CourseItemOffline
                  name={y.name}
                  title={y.title}
                  bgCourse={y.bgCourse}
                  textColor={y.textColor}
                  link={y.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="container">
        <div className="heading">
          <h3 className="heading-text">Combo 10</h3>
          <p className="heading-desc">
            Combo đủ tất cả 10 khóa học của chương trình LPE
          </p>
        </div>

        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="mySwiper my-3"
          breakpoints={{
            // 640: {
            //   slidesPerView: 2,
            //   spaceBetween: 20,
            // },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
        >
          {combo10.map((y) => {
            return (
              <SwiperSlide key={y.id}>
                <CourseItemOffline
                  name={y.name}
                  title={y.title}
                  bgCourse={y.bgCourse}
                  textColor={y.textColor}
                  link={y.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="container">
        <div className="heading">
          <h3 className="heading-text">Khóa khác</h3>
          <p className="heading-desc">
            Các khóa học nằm ngoài chương trình của LPE cho mọi lứa tuổi khác.
          </p>
        </div>

        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="other-course my-3"
          breakpoints={{
            // 640: {
            //   slidesPerView: 2,
            //   spaceBetween: 20,
            // },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
        >
          {otherCourse.map((y) => {
            return (
              <SwiperSlide key={y.id}>
                <CourseItemOffline
                  name={y.name}
                  title={y.title}
                  bgCourse={y.bgCourse}
                  textColor={y.textColor}
                  link={y.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default CourseOffline;
