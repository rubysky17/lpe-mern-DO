import React, { useRef, useState } from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import ModalVideo from "react-modal-video";
import ServiceItem from "./components/serviceItem";
import Title from "./components/title";
import TestimonialCard from "./components/testimonialCart";
import BannerCarousel from "./components/bannerCarousel";
import { LPELightBox } from "app/components/lightBox";
import { getIdVideo } from "core/utils/videoLinkUtil";
import LazyLoad from "react-lazyload";

// import media file
import hinh01 from "assets/images/source/hinh01.jpg";
import hinh02 from "assets/images/source/hinh02.jpg";
import hinh03 from "assets/images/source/hinh03.jpg";
import hinh04 from "assets/images/source/hinh04.jpg";
import thuthanh from "assets/images/source/thu-thanh.jpg";
import bonDat from "assets/images/source/bon-dat.jpg";
import ngocThanh from "assets/images/source/ngoc-thanh.jpg";

import vasVideo from "assets/images/source/banner-video.jpg";
import personalTest from "assets/images/source/personal-test.jpg";

import "./styles/styles.scss";

export default function Home() {
  useSiteTitle("home_page");
  const { t } = useTranslation("common");

  const studentPicRef = useRef();
  const [video, setVideo] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const service_list = [
    {
      cat_icon: <i className="fad fa-building"></i>,
      title: t("performance"),
      // description: "Giới thiệu sơ lược về khóa học dành cho tin tức",
      link: "/",
    },
    {
      cat_icon: <i className="far fa-chart-line"></i>,
      title: t("corporation"),
      link: "/",
    },
    {
      cat_icon: <i className="fas fa-graduation-cap"></i>,
      title: t("education"),
      link: "/",
    },
    {
      cat_icon: <i className="fas fa-users"></i>,
      title: t("coach"),
      link: "/",
    },
    {
      cat_icon: <i className="fas fa-shopping-cart"></i>,
      title: t("individual"),
      link: "/",
    },
    {
      cat_icon: <i className="fas fa-newspaper"></i>,
      title: t("lpe_adventure_club"),
      link: "#",
    },
  ];

  const swiperStudentPic = [
    {
      imgSrc: hinh01,
    },
    {
      imgSrc: hinh02,
    },
    {
      imgSrc: hinh03,
    },
    {
      imgSrc: hinh04,
    },
  ];

  const arrayTestimonials = [
    {
      id: 1,
      rating: 5,
      hero: t("chair_man_talk"),
      name: `${t("ms")} Hà Thị Thu Thanh`,
      job: `(${t("chair_man")}  Deloitte Việt Nam)`,
      ava: thuthanh,
    },
    {
      id: 2,
      rating: 4,
      hero: t("ceo_talk"),
      name: `${t("mr")} Trương Bổn Đạt`,
      job: `(${t("ceo")} Vietphulabel)`,
      ava: bonDat,
    },
    {
      id: 3,
      rating: 5,
      hero: t("project_consultant_talk"),
      name: `${t("ms")} Nguyễn Thuỵ Ngọc Thanh`,
      job: t("project_consultant"),
      ava: ngocThanh,
    },
  ];

  const handleOpenLightBox = (index) => {
    studentPicRef.current.handleOpen(index);
  };

  const handleOpenVideo = (link) => {
    setVideo(getIdVideo(link));
    setIsVisible(!isVisible);
  };

  return (
    <div className="home-page">
      <BannerCarousel />

      <LazyLoad offset={100}>
        <div className="container services">
          <div className="service-caption py-5 text-center">
            <Title
              title={t("activities")}
              description={t("activities_desc")}
              textAlign="center"
            />
          </div>

          <section className="row">
            {service_list.map((service, index) => {
              return <ServiceItem service={service} key={index} />;
            })}
          </section>
        </div>
      </LazyLoad>

      <section className="student-pic">
        <div className="student-caption py-5 text-center">
          <Title
            title={t("gallery")}
            description={t("gallery_desc")}
            textAlign="center"
          />
        </div>

        <Swiper
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 480px
            992: {
              slidesPerView: 3,
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {swiperStudentPic.map((item, index) => {
            return (
              <SwiperSlide className="item-swiper" key={index}>
                <div
                  className="wrapper-slick"
                  onClick={() => {
                    handleOpenLightBox(index);
                  }}
                >
                  <img
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    className="img-fluid"
                  />

                  <div className="overlay"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section>
        <div className="py-5 text-center">
          <Title
            title={t("video_title")}
            description={t("video_desc")}
            textAlign="center"
          />

          <div
            className="paralax-video"
            style={{
              backgroundImage: `url(${vasVideo})`,
            }}
          >
            <div
              className="btn-playVideo"
              onClick={() => {
                handleOpenVideo("https://www.youtube.com/watch?v=bPB1hMOIQhw");
              }}
            >
              <i className="fal fa-play"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="container testimonials">
        <Title
          title={t("testimonials")}
          description={t("testimonials_desc")}
          textAlign="center"
        />

        <div className="row mt-5">
          {arrayTestimonials.map((info, index) => {
            return (
              <TestimonialCard
                rating={info.rating}
                hero={info.hero}
                name={info.name}
                job={info.job}
                ava={info.ava}
                key={index}
              />
            );
          })}
        </div>
      </section>

      <section
        className="person-test mt-5"
        style={{
          backgroundImage: `url(${personalTest})`,
        }}
      >
        <div className="wrapper-content_person">
          <h2>{t("personality")}</h2>

          <p>{t("comming_soon")}</p>
        </div>
      </section>

      <section className="mt-5">
        <Title title={t("map")} textAlign="center" />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.00575849913207!2d106.70509906142014!3d10.727376785423132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fba31b609e5%3A0xe4c31d580116b575!2sLPE%20-%20Leading%20Performance%20Education!5e0!3m2!1sen!2s!4v1637131284142!5m2!1sen!2s"
          width="100%"
          height="450px"
          title="googlemap"
          style={{
            border: "none",
            marginTop: "20px",
          }}
        ></iframe>
      </section>

      <LPELightBox
        ref={studentPicRef}
        listImage={swiperStudentPic.map((v) => v.imgSrc)}
      />

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVisible}
        videoId={video}
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
}
