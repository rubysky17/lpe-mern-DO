import React, { useRef, useState } from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import LPEModal from "app/components/modal";

import RoadMap from "./assets/img/map.jpg";
import RoadMapMobile from "./assets/img/map_mobile.jpg";
// ------------------- Big island -------------------
import StartIsland from "./assets/img/start.png";
import StartSign from "./assets/img/startSign.png";
import BigIsland1 from "./assets/img/big_1.png";
import BigIsland2 from "./assets/img/big_2.png";
import BigIsland3 from "./assets/img/big_3.png";
import BigIslandSign1 from "./assets/img/bigislandsign1.png";
import BigIslandSign2 from "./assets/img/bigislandsign2.png";
import BigIslandSign3 from "./assets/img/bigislandsign3.png";

// ------------------- Small island -------------------
import SmallIsland1 from "./assets/img/smallisland1.png";
import SmallIslandSign1 from "./assets/img/smallislandsign1.png";
import SmallIsland2 from "./assets/img/smallisland2.png";
import SmallIslandSign2 from "./assets/img/smallislandsign2.png";
import SmallIsland3 from "./assets/img/smallisland3.png";
import SmallIslandSign3 from "./assets/img/smallislandsign3.png";
import SmallIsland4 from "./assets/img/smallisland4.png";
import SmallIslandSign4 from "./assets/img/smallislandsign4.png";
import SmallIsland5 from "./assets/img/smallisland5.png";
import SmallIslandSign5 from "./assets/img/smallislandsign5.png";
import SmallIsland6 from "./assets/img/smallisland6.png";
import SmallIslandSign6 from "./assets/img/smallislandsign6.png";
import SmallIsland7 from "./assets/img/smallisland7.png";
import SmallIslandSign7 from "./assets/img/smallislandsign7.png";
import SmallIsland8 from "./assets/img/smallisland8.png";
import SmallIslandSign8 from "./assets/img/smallislandsign8.png";
import SmallIsland9 from "./assets/img/smallisland9.png";
import SmallIslandSign9 from "./assets/img/smallislandsign9.png";
import SmallIsland10 from "./assets/img/smallisland10.png";
import SmallIslandSign10 from "./assets/img/smallislandsign10.png";
import Dolphin from "./assets/img/dolphin.png";
import Whale from "./assets/img/whale.png";

import "./styles/styles.scss";

function LifeMap() {
  useSiteTitle("life_map");
  const refModal = useRef(null);
  const [content, setContent] = useState([]);

  const big_island = [
    {
      id: 1,
      island: StartIsland,
      className: "startIsland",
      sign: StartSign,
      position: {
        x: "2%",
        y: "5%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 2,
      island: BigIsland1,
      className: "bigIsland1",
      sign: BigIslandSign1,
      position: {
        x: "22%",
        y: "65%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 3,
      island: BigIsland2,
      className: "bigIsland2",
      sign: BigIslandSign2,
      position: {
        x: "46%",
        y: "6%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 4,
      island: BigIsland3,
      className: "bigIsland3",
      sign: BigIslandSign3,
      position: {
        x: "75%",
        y: "60%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
  ];

  const small_island = [
    {
      id: 1,
      island: SmallIsland1,
      className: "smallIsland",
      sign: SmallIslandSign1,
      position: {
        x: "10%",
        y: "50%",
      },
      detail: [
        {
          text: "Thầy ông nội nè con!!!",
        },
      ],
      contentPosition: "top",
    },

    {
      id: 2,
      island: SmallIsland2,
      className: "smallIsland",
      sign: SmallIslandSign2,
      position: {
        x: "29%",
        y: "29%",
      },
      detail: [
        {
          text: "Hong pé ơi",
        },
      ],
      contentPosition: "top",
    },
    {
      id: 3,
      island: SmallIsland3,
      className: "smallIsland",
      sign: SmallIslandSign3,
      position: {
        x: "21%",
        y: "45%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 4,
      island: SmallIsland4,
      className: "smallIsland",
      sign: SmallIslandSign4,
      position: {
        x: "3%",
        y: "80%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 5,
      island: SmallIsland5,
      className: "smallIsland",
      sign: SmallIslandSign5,
      position: {
        x: "45%",
        y: "80%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 6,
      island: SmallIsland6,
      className: "smallIsland",
      sign: SmallIslandSign6,
      position: {
        x: "26%",
        y: "7%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 7,
      island: SmallIsland7,
      className: "smallIsland",
      sign: SmallIslandSign7,
      position: {
        x: "37%",
        y: "60%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 8,
      island: SmallIsland8,
      className: "smallIsland",
      sign: SmallIslandSign8,
      position: {
        x: "55%",
        y: "70%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 9,
      island: SmallIsland9,
      className: "smallIsland",
      sign: SmallIslandSign9,
      position: {
        x: "70%",
        y: "20%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 10,
      island: SmallIsland10,
      className: "smallIsland",
      sign: SmallIslandSign10,
      position: {
        x: "80%",
        y: "35%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
  ];

  const big_island_mobile = [
    {
      id: 1,
      island: StartIsland,
      className: "startIsland",
      sign: StartSign,
      position: {
        x: "2%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 2,
      island: BigIsland1,
      className: "bigIsland1",
      sign: BigIslandSign1,
      position: {
        x: "22%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 3,
      island: BigIsland2,
      className: "bigIsland2",
      sign: BigIslandSign2,
      position: {
        x: "45%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 4,
      island: BigIsland3,
      className: "bigIsland3",
      sign: BigIslandSign3,
      position: {
        x: "80%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
  ];

  const small_island_mobile = [
    {
      id: 1,
      island: SmallIsland1,
      className: "smallIsland",
      sign: SmallIslandSign1,
      position: {
        x: "12%",
        y: "10%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
      contentPosition: "top",
    },
    {
      id: 2,
      island: SmallIsland2,
      className: "smallIsland",
      sign: SmallIslandSign2,
      position: {
        x: "16%",
        y: "50%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 3,
      island: SmallIsland3,
      className: "smallIsland",
      sign: SmallIslandSign3,
      position: {
        x: "12%",
        y: "60%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 4,
      island: SmallIsland4,
      className: "smallIsland",
      sign: SmallIslandSign4,
      position: {
        x: "17%",
        y: "20%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 5,
      island: SmallIsland5,
      className: "smallIsland",
      sign: SmallIslandSign5,
      position: {
        x: "33%",
        y: "62%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 6,
      island: SmallIsland6,
      className: "smallIsland",
      sign: SmallIslandSign6,
      position: {
        x: "31%",
        y: "10%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 7,
      island: SmallIsland7,
      className: "smallIsland",
      sign: SmallIslandSign7,
      position: {
        x: "38%",
        y: "20%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 8,
      island: SmallIsland8,
      className: "smallIsland",
      sign: SmallIslandSign8,
      position: {
        x: "59%",
        y: "20%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 9,
      island: SmallIsland9,
      className: "smallIsland",
      sign: SmallIslandSign9,
      position: {
        x: "68%",
        y: "16%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
    {
      id: 10,
      island: SmallIsland10,
      className: "smallIsland",
      sign: SmallIslandSign10,
      position: {
        x: "70%",
        y: "60%",
      },
      detail: [
        {
          text: "ABC",
        },
      ],
    },
  ];

  const handleOpenModal = (content) => {
    refModal.current.handleOpen();
    setContent(content);
  };

  return (
    <>
      <div className="lpe-lifemap">
        <div className="lpe-lifemap_wrapper">
          <img className="img-fluid " src={RoadMap} alt={RoadMap} />

          {big_island?.map((island, index) => {
            return (
              <div
                className="lpe-lifemap_big-island"
                key={index}
                style={{
                  top: island.position.x,
                  left: island.position.y,
                }}
              >
                <div className="lpe-lifemap_big-island_outside">
                  <div className={island.className}>
                    <img src={island.island} alt={island.island} />

                    <div className="lpe-lifemap_big-island_inside">
                      <img
                        src={island.sign}
                        alt={island.sign}
                        style={{
                          width: "20%",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          cursor: "pointer",
                          animation: "movingSign 1s linear infinite",
                        }}
                        className="big_sign"
                      />

                      <div className={`big_popup`}>
                        {island.detail.map((text) => {
                          return <p>{text.text}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {small_island?.map((island, index) => {
            return (
              <div
                className="lpe-lifemap_small-island"
                key={index}
                style={{
                  top: island.position.x,
                  left: island.position.y,
                }}
              >
                <div className="lpe-lifemap_small-island_outside">
                  <div className={island.className}>
                    <img
                      src={island.island}
                      alt={island.island}
                      className="img-fluid"
                    />

                    <div className="lpe-lifemap_small-island_inside">
                      <img
                        src={island.sign}
                        alt={island.sign}
                        style={{
                          width: "43%",
                          position: "absolute",
                          top: "50%",
                          left: "60%",
                          transform: "translate(-50%, -50%)",
                          cursor: "pointer",
                          animation: "movingSign 1s linear infinite",
                        }}
                        className="img-fluid small_sign"
                      />

                      <div className={`small_popup ${island.contentPosition}`}>
                        {island.detail.map((text) => {
                          return <p>{text.text}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <img src={Dolphin} alt={Dolphin} className="lpe-dolphin" />
          <img src={Whale} alt={Whale} className="lpe-whale" />
        </div>
      </div>

      <div className="lpe-lifemap-mobile">
        <div className="lpe-lifemap_wrapper">
          <img className="img-fluid " src={RoadMapMobile} alt={RoadMapMobile} />

          {big_island_mobile?.map((island, index) => {
            return (
              <div
                className="lpe-lifemap_big-island"
                key={index}
                style={{
                  top: island.position.x,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div
                  className="lpe-lifemap_big-island_outside"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className={island.className}>
                    <img src={island.island} alt={island.island} />

                    <div className="lpe-lifemap_big-island_inside">
                      <img
                        src={island.sign}
                        alt={island.sign}
                        style={{
                          width: "20%",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          cursor: "pointer",
                          animation: "movingSign 1s linear infinite",
                        }}
                        onClick={() => {
                          handleOpenModal(island.detail);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {small_island_mobile?.map((island, index) => {
            return (
              <div
                className="lpe-lifemap_small-island"
                key={index}
                style={{
                  top: island.position.x,
                  left: island.position.y,
                }}
              >
                <div className="lpe-lifemap_small-island_outside">
                  <div className={island.className}>
                    <img src={island.island} alt={island.island} />

                    <div className="lpe-lifemap_small-island_inside">
                      <img
                        src={island.sign}
                        alt={island.sign}
                        style={{
                          width: "43%",
                          position: "absolute",
                          top: "50%",
                          left: "60%",
                          transform: "translate(-50%, -50%)",
                          cursor: "pointer",
                          animation: "movingSign 1s linear infinite",
                        }}
                        onClick={() => {
                          handleOpenModal(island.detail);
                        }}
                      />

                      <div className={`small_popup ${island.contentPosition}`}>
                        <p>Pop up for content</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <LPEModal ref={refModal}>
        <div className="mobile-popup-modal">
          {content?.map((text) => {
            return <p>{text.text}</p>;
          })}
        </div>
      </LPEModal>
    </>
  );
}

export default LifeMap;
