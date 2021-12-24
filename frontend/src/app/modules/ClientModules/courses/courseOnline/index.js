import React from "react";
import LPEBanner from "app/components/banner";
import CardItemOnline from "./components/cardItem";
import useSiteTitle from "core/hooks/useSiteTitle";

// import media file
import ccs from "assets/images/source/online/ccs.jpg";
import bfw from "assets/images/source/online/bfw.jpg";
import vl from "assets/images/source/online/vl.jpg";
import isb from "assets/images/source/online/isb.jpg";
import banner from "assets/images/source/banner/khoa-hoc-online-banner.jpg";

import "./styles/styles.scss";

function CourseOnline() {
  useSiteTitle("online_courses");

  const right_course = [
    {
      id: 1,
      name: "crisis conqueror",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/chuong-trinh-huan-luyen/online/ccs",
      img: ccs,
    },
    {
      id: 2,
      name: "beauty from within",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/chuong-trinh-huan-luyen/online/beauty-from-within",
      img: bfw,
    },
    {
      id: 3,
      name: "visionary leadership",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/chuong-trinh-huan-luyen/online/visionary-leadership",
      img: vl,
    },
    // {
    //   id: 4,
    //   name: "obsessed",
    //   desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //   link: "/chuong-trinh-huan-luyen/online/visionary-leadership",
    //   img: `${API_SOURCE}/online/obs.jpg`,
    // },
    {
      id: 5,
      name: "immune system booster",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/chuong-trinh-huan-luyen/online/immune-system-booster",
      img: isb,
    },
    // {
    //   id: 6,
    //   name: "life university special",
    //   desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //   img: `${API_SOURCE}/online/lus.jpg`,
    // },
  ];

  return (
    <div className="courseOnline-page">
      <LPEBanner
        bannerImg={banner}
        headText="Khóa học Online"
        subText="LPE có các khóa học trực tuyến nhằm cung cấp kiến thức cho những học viên có nhu cầu học từ xa."
      />

      <div className="container pb-5">
        <div className="heading">
          <h1 className="heading-text">Các khóa Online hiện tại của LPE</h1>
          <p className="heading-desc">
            Dành cho tất cả học viên có nhu cầu học Online
          </p>
        </div>

        <div className="row py-3">
          {right_course.map((y, index) => {
            return (
              <div className="col-12 col-md-6" key={index}>
                <CardItemOnline
                  img={y.img}
                  name={y.name}
                  link={y.link}
                  desc={y.desc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseOnline;
