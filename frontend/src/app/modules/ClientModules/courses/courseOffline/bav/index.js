import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import bav01 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-banner.jpg";
import bav02 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-gia-tri.png";
import bav03 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-hinh-hoc-vien-1.jpg";
import bav04 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-hinh-hoc-vien-2.jpg";
import bav05 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-trai-nghiem.png";
import bav06 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-ngay-1.png";
import bav07 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-hinh-hoc-vien-3.jpg";
import bav08 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-ngay-2.png";
import bav09 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-hinh-hoc-vien-4.jpg";
import bav10 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-ngay-3.png";
import bav11 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/niem-tin-va-gia-tri-lpe-hinh-hoc-vien-5.jpg";

import bavbackground01 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/7-bg-1.png";
import bavbackground02 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/7-bg-2.png";
import bavbackground03 from "../../assets/images/chuong-trinh-huan-luyen/offline/bav/7-bg-3.png";

import "./styles/styles.scss";

function BAV() {
  useSiteTitle("BAV_program");

  return (
    <div className="bav container-fluid">
      <div className="row">
        <img src={bav01} alt={bav01} />
      </div>
      <div
        className="row page1 pt-3"
        style={{
          background: `url(${bavbackground01})`,
        }}
      >
        <div className="col-6 offset-3">
          <img src={bav02} alt={bav02} />
        </div>
        <div className="col-md-8 offset-md-2">
          <div className="row flex-alignitem mt-4 text-justify">
            <div className="col-md-6 order-last">
              <ul>
                <li>
                  Ph?? v??? t???t c??? nh???ng Ni???m Tin Gi???i H???n ??ang ng??n b???n ?????n v???i
                  ?????c M?? L???n
                </li>
                <li>
                  T??i thi???t l???p T???m Nh??n, S??? M???nh v?? M???c Ti??u c???a b???n ????? v????n
                  ?????n nh???ng T???m Cao V?? ?????i
                </li>
                <li>
                  ??m tr???n nh???ng Ni???m Tin ?????y S???c M???nh nh???m Th??c ?????y b???n ?????t ???????c
                  Th??nh C??ng C???c ?????i
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={bav03} alt={bav03} />
            </div>
          </div>
          <div className="row flex-alignitem mt-3 text-justify pb-3">
            <div className="col-md-6 ">
              <ul>
                <li>
                  ????nh gi?? l???i Nh???ng Gi?? Tr??? C???t L??i ??ang ki???m h??m S??? Ph??t Tri???n
                  c???a b???n
                </li>
                <li>
                  C??i ?????t C??c Gi?? Tr??? C???t L??i nh???m Truy???n ?????ng L???c gi??p b???n v????n
                  ?????n Giao ??o???n Ti???p Theo c???a cu???c ?????i m??nh
                </li>
                <li>
                  L??m Ch??? Li???u Ph??p Tr??? Li???u s??? d???ng c??c quy tr??nh x??y d???ng H???
                  Th???ng Ni???m Tin
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={bav04} alt={bav04} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="row page2 pt-4"
        style={{
          background: `url(${bavbackground02})`,
        }}
      >
        <div className="col-6 offset-3">
          <img src={bav05} alt={bav05} />
        </div>
        <img src={bav06} alt={bav06} className="col-md-4 col-sm-5 mt-3" />
        <div className="col-md-8 offset-md-2 mt-3">
          <img src={bav07} alt={bav07} />
          <ul className="mt-3">
            <li>N???m v???ng C???u Tr??c h??nh th??nh Ni???m Tin</li>
            <li>
              Th???m nhu???n c??c Quy Tr??nh KI???N T???O v?? LO???I B??? Ni???m Tin Gi???i H???n
            </li>
          </ul>
        </div>
        <img src={bav08} alt={bav08} className="col-md-4 col-sm-5 mt-3" />
        <div className="col-md-8 offset-md-2 mt-3 ">
          <div className="row flex-alignitem mt-3 text-justify pb-3">
            <div className="col-md-6 ">
              <ul>
                <li>Th???u hi???u v??? H??? Th???ng Gi?? Tr??? Clare Graves</li>
                <li>Tu???n th???c Quy Tr??nh C??i ?????t Gi?? Tr??? C???t L??i NLP</li>
                <li>
                  Thu???n th???c Quy Tr??nh Coaching - T?? V???n Tr??? Li???u v??? Ni???m Tin v??
                  Gi?? Tr??? ?????y quy???n n??ng
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={bav09} alt={bav09} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="row page3 pt-4"
        style={{
          background: `url(${bavbackground03})`,
        }}
      >
        <img src={bav10} alt={bav10} className="col-md-4 col-sm-5 mt-3" />
        <div className="col-md-8 offset-md-2 mt-3">
          <img src={bav11} alt={bav11} />
          <ul className="mt-3">
            <li>Quy Tr??nh T??i ????ng Khung</li>
            <li>
              Gi?? Tr??? "TO??N DI???N" T??ch H???p Ni???m Tin v?? Gi?? Tr??? trong M?? H??nh
              SCORE ??a C???p ?????.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BAV;
