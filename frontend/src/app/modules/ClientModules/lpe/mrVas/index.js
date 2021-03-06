import React, { useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import Title from "../../home/components/title";
import { LPELightBox } from "app/components/lightBox";
// import { Fade } from "react-reveal";

// import VasVideo from "./components/video";
import Timeline from "./components/timeline";
import useSiteTitle from "core/hooks/useSiteTitle";

// import media file
import bang01 from "assets/images/source/mrvas/bang-1.jpg";
import bang02 from "assets/images/source/mrvas/bang-2.jpg";
import bang03 from "assets/images/source/mrvas/bang-3.jpg";
import bang04 from "assets/images/source/mrvas/bang-4.jpg";
import bang05 from "assets/images/source/mrvas/bang-5.jpg";
import bang06 from "assets/images/source/mrvas/bang-6.jpg";
import bang07 from "assets/images/source/mrvas/bang-7.jpg";
import bang08 from "assets/images/source/mrvas/bang-8.jpg";
import bang09 from "assets/images/source/mrvas/bang-9.jpg";
import bang10 from "assets/images/source/mrvas/bang-10.jpg";

import catelogy01 from "assets/images/source//mrvas/catelogy01.jpg";
import catelogy02 from "assets/images/source//mrvas/catelogy02.jpg";
import catelogy03 from "assets/images/source//mrvas/catelogy03.jpg";
import catelogy04 from "assets/images/source//mrvas/catelogy04.jpg";
import catelogy05 from "assets/images/source//mrvas/catelogy05.jpg";
import catelogy06 from "assets/images/source//mrvas/catelogy06.jpg";

import vasBanner from "assets/images/source/mrvas/banner-vas.jpg";
import vasFooter from "assets/images/source/mrvas/banner-bottom-vas.jpg";

import mrvasPorfolio from "assets/images/source/mrvas/mrvas-porfolio.jpg";

import "./styles/styles.scss";

function MrVas() {
  useSiteTitle("mr_vas");
  const [videoId, setvideoId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const categoryRef = useRef();
  const certificationRef = useRef();

  // const videoVas = [
  //   {
  //     id: 0,
  //     imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
  //     videoId: "n6Pnzi6r9NU",
  //   },
  //   {
  //     id: 1,
  //     imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
  //     videoId: "u9vQcTYyQE4",
  //   },
  //   {
  //     id: 2,
  //     imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
  //     videoId: "n6Pnzi6r9NU",
  //   },
  // ];

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
        <h3 className="introName">Mr. Vas - Coach Vas - Vasanth Gopalan</h3>

        <p className="introTestDesc mb-3">
          - Mr. Vas l?? Nh?? s??ng l???p v?? ki???n t???o n??n Leading Performance Group.
          ??ng ???? d??nh g???n 30 n??m ho???t ?????ng qu??n ?????i, 20 n??m nghi??n c???u-th???c h??nh
          NLP, t???t c??? ?????u l?? ????? ph???c v??? con ng?????i, gi??p cho m???i ng?????i ???????c s???ng
          m???t cu???c ?????i h???nh ph??c tr???n v???n.
        </p>

        <p className="introTestDesc mb-3">
          - Sau khi k???t th??c kho???ng th???i gian ho???t ?????ng t???i qu??n ?????i, Mr. Vas
          nh???n ra ???????c s??? nghi???p c???a m??nh s??? b???t ?????u t??? ????y. ??ng v???n d???ng nh???ng
          tr???i nghi???m c???a m??nh trong su???t 30 n??m hu???n luy???n s?? quan, ?????ng th???i
          d??nh c??ng s???c & th???i gian ????? t??m t??i, nghi??n c???u v??? c??c ng??nh Khoa h???c
          T??m Tr?? kh??c nhau. ????? t??? ki???n t???o n??n chu???i ?????i h???c Cu???c ?????i - N??i m???i
          ng?????i c?? th??? t??m l???i ???????c gi?? tr??? ????ch th???c c???a b???n th??n m??nh, h???c
          c??ch v???n d???ng c??c ngu???n l???c v?? ph??t tri???n n?? m???t c??ch tuy???t v???i nh???t
          cho s??? nghi???p - m???i quan h??? - s???c kho??? c???a m??nh.
        </p>

        <p className="introTestDesc ">
          - ????y l?? c???t l??i c???a nh???ng g?? Vas mang ?????n cho kh??ch h??ng c???a m??nh.
          L???p Tr??nh Ng??n Ng??? T?? Duy (NLP) l?? ch???t x??c t??c ???? t???o n??n s??? thay ?????i
          ????ng k??? v??? ?????nh h?????ng trong m???i kh??a c???nh c???a cu???c ?????i Vas. ??ng ????
          s??ng l???p n??n Leading Performance Group v?? ???? ph??t tri???n n?? th??nh m???t
          c??ng ty ????o t???o th??nh c??ng su???t h??n 12 n??m ho???t ?????ng t???i Singapore,
          Malaysia, Indonesia, Vi???t Nam,... n??i m?? th??ng qua ???? ??ng th???c hi???n
          T???m Nh??n c???a m??nh.
        </p>
      </>
    );
  };

  const certificationList = [
    bang01,
    bang02,
    bang03,
    bang04,
    bang05,
    bang06,
    bang07,
    bang08,
    bang09,
    bang10,
  ];

  const catelogyImg = [
    catelogy02,
    catelogy03,
    catelogy04,
    catelogy01,
    catelogy05,
    catelogy06,
  ];

  return (
    <>
      <div
        className="bannerVas"
        style={{
          backgroundImage: `url("${vasBanner}")`,
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
              src={mrvasPorfolio}
              alt={mrvasPorfolio}
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
        <Title title="C??C CH???NG NH???N NLP" textAlign="center" />

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
        <Title title="C??C VIDEO GI???I THI???U TH???Y VAS" textAlign="center" />

        <div className="row my-4">
          {/* {videoVas?.map((item) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 mb-3" key={item.id}>
                <VasVideo
                  imgSrc={item.imgSrc}
                  onHandleOpenVideo={handleOpenVideo}
                  videoId={item.videoId}
                />
              </div>
            );
          })} */}
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <iframe
              width="100%"
              height="340"
              src="https://www.youtube.com/embed/MTm9ckSaygs?list=PL_Semeu_FryBUpE-h6GCgwY8rj3qBQMBN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <iframe
              width="100%"
              height="340"
              src="https://www.youtube.com/embed/Let3SiiSl-0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <iframe
              width="100%"
              height="340"
              src="https://www.youtube.com/embed/bYu-cTghDxY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <Title title="H??NH ???NH" textAlign="center" />

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
          backgroundImage: `url(${vasFooter})`,
        }}
      >
        <div className="overlay"></div>

        <div className="bannerBottomText">
          <p>
            "M???t ng??y n??o ????, to??n th??? nh??n lo???i ???? ???????c t???t nghi???p ?????i H???c Cu???c
            ?????i. H??? ??ang s???ng m???i kho???nh kh???c trong m???ng vui v?? ph?????c l??nh".
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
