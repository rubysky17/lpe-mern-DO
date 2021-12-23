import React, { useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import Title from "../../home/components/title";
import { LPELightBox } from "app/components/lightBox";
// import { Fade } from "react-reveal";

import VasVideo from "./components/video";
import Timeline from "./components/timeline";
import useSiteTitle from "core/hooks/useSiteTitle";

import "./styles/styles.scss";
import { API_SOURCE } from "app/const/Api";

function MrVas() {
  useSiteTitle("mr_vas");
  const [videoId, setvideoId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const categoryRef = useRef();
  const certificationRef = useRef();

  const videoVas = [
    {
      id: 0,
      imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
      videoId: "n6Pnzi6r9NU",
    },
    {
      id: 1,
      imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
      videoId: "u9vQcTYyQE4",
    },
    {
      id: 2,
      imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
      videoId: "n6Pnzi6r9NU",
    },
  ];

  const handleOpenVideo = (id) => {
    setvideoId(id);
    setIsOpen(!isOpen);
  };

  const handleOpenLightBox = (index) => {
    certificationRef.current.handleOpen(index);
  };

  const handleOpenCategory = (index) => {
    categoryRef.current.handleOpen(index);
  };

  const AboutMrVas = () => {
    return (
      <>
        <h3 className="introName">VASANTH GOPALAN</h3>

        {[0, 1, 2].map((info, index) => {
          return (
            <p className="introTestDesc" key={index}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              dapibus dolor turpis, eget ultrices erat volutpat eu. Aliquam
              tincidunt risus et nisi vulputate, at mollis tellus rutrum. Duis
              interdum lectus ex, ac elementum ipsum laoreet quis. Sed sagittis
              mi odio, sed mollis lectus luctus at. Aliquam tellus neque,
              fringilla vitae urna ac, tincidunt iaculis enim. Aliquam massa
              dui, lobortis vitae ultrices
            </p>
          );
        })}
      </>
    );
  };

  const certificationList = [
    `${API_SOURCE}/mrvas/bang-1.jpg`,
    `${API_SOURCE}/mrvas/bang-2.jpg`,
    `${API_SOURCE}/mrvas/bang-3.jpg`,
    `${API_SOURCE}/mrvas/bang-4.jpg`,
    `${API_SOURCE}/mrvas/bang-5.jpg`,
    `${API_SOURCE}/mrvas/bang-6.jpg`,
    `${API_SOURCE}/mrvas/bang-7.jpg`,
    `${API_SOURCE}/mrvas/bang-8.jpg`,
    `${API_SOURCE}/mrvas/bang-9.jpg`,
    `${API_SOURCE}/mrvas/bang-10.jpg`,
  ];

  const catelogyImg = [
    `${API_SOURCE}/mrvas/catelogy02.jpg`,
    `${API_SOURCE}/mrvas/catelogy03.jpg`,
    `${API_SOURCE}/mrvas/catelogy04.jpg`,
    `${API_SOURCE}/mrvas/catelogy01.jpg`,
    `${API_SOURCE}/mrvas/catelogy05.jpg`,
    `${API_SOURCE}/mrvas/catelogy06.jpg`,
  ];

  return (
    <>
      <div
        className="bannerVas"
        style={{
          backgroundImage: `url("${API_SOURCE}/mrvas/banner-vas.jpg")`,
        }}
      >
        <div className="overlay"></div>

        <div className="bannerText">
          <h1>COACH VAS</h1>

          <div
            className="buttonPlay"
            onClick={() => {
              handleOpenVideo("DZGkncRVn44");
            }}
          >
            <i className="fal fa-play"></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="introText">
              <AboutMrVas />
            </div>
          </div>

          <div
            className="col-12 col-lg-6 mt-4 mt-lg-0"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={`${API_SOURCE}/mrvas/mrvas-porfolio.jpg`}
              alt={`${API_SOURCE}/mrvas/mrvas-porfolio.jpg`}
              className="img-fluid"
              style={{
                height: "500px",
              }}
            />
          </div>
        </div>
      </div>

      <Timeline />

      <div className="container mt-5">
        <Title
          title="CÁC CHỨNG NHẬN NLP"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui"
          textAlign="center"
        />

        <div className="row mt-4 d-flex justify-content-center">
          {certificationList.map((src, index) => {
            return (
              <div
                className="col-6 col-md-6 col-lg-3 mb-3"
                key={index}
                onClick={() => {
                  handleOpenLightBox(index);
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                <img src={src} alt={src} className="img-fluid" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mt-5">
        <Title
          title="CÁC VIDEO GIỚI THIỆU THẦY VAS"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui"
          textAlign="center"
        />

        <div className="row my-4">
          {videoVas?.map((item) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 mb-3" key={item.id}>
                <VasVideo
                  imgSrc={item.imgSrc}
                  onHandleOpenVideo={handleOpenVideo}
                  videoId={item.videoId}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mt-5">
        <Title
          title="HÌNH ẢNH"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui"
          textAlign="center"
        />

        <div className="wrapperImg">
          {catelogyImg.map((catelogy, index) => {
            return (
              <div
                className={`gridItem${index + 1}`}
                key={index}
                onClick={() => {
                  handleOpenCategory(index);
                }}
              >
                <img src={catelogy} alt={catelogy} />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="bannerBottomVas"
        style={{
          backgroundImage: `url(${API_SOURCE}/mrvas/banner-bottom-vas.jpg)`,
        }}
      >
        <div className="overlay"></div>

        <div className="bannerBottomText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            dapibus dolor turpis, eget ultrices erat volutpat eu. Aliquam
            tincidunt risus et nisi vulputate, at mollis tellus rutrum.
          </p>

          <h3>VASANTH GOPALAN</h3>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => handleOpenVideo(!isOpen)}
      />

      <LPELightBox ref={certificationRef} listImage={certificationList} />

      <LPELightBox ref={categoryRef} listImage={catelogyImg} />

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => handleOpenVideo()}
      />
    </>
  );
}

export default MrVas;
