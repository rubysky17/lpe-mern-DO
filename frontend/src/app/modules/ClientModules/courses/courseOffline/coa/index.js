import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { Link } from "react-router-dom";

import coa01 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-banner.jpg";
import coa02 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-can-phai-tham-gia.png";
import coa03 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-doan-1.jpg";
import coa04 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-1.png";
import coa05 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-11.png";
import coa06 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-12.png";
import coa07 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-13.png";
import coa08 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-2.png";
import coa09 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-21.png";
import coa10 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-22.png";
import coa11 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-23.png";
import coa12 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-3.png";
import coa13 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-31.png";
import coa14 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-32.png";
import coa15 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-4.png";
import coa16 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-41.png";
import coa17 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-5.png";
import coa18 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-ngay-51.png";
import coa19 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-doan-2.jpg";
import coa20 from "../../assets/images/chuong-trinh-huan-luyen/offline/coa/tu-van-tri-lieu-coa-lpe-doan-3.jpg";

import "./styles/styles.scss";

function COA() {
  useSiteTitle("counseling_program");

  return (
    <div className="coa container-fluid">
      <div className="row">
        <img src={coa01} alt={coa01} className="img-fluid w-100" />

        <div className="col-md-6 offset-md-3 mt-3">
          <iframe
            height="315"
            src="https://www.youtube.com/embed/WqCPJ_1z-1c"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 borderTop"></div>

        <div className="col-md-6 mt-3">
          <p>Tr??? th??nh b???c th???y ch???a l??nh chuy??n s??u,</p>

          <p className="text-right">
            t???n v??o g???c r??? v?? duy tr?? hi???u qu??? l??u d??i
          </p>
        </div>

        <div className="col-md-3 borderBottom "></div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          <img src={coa02} alt={coa02} />

          <div className="row flex-alignitem mt-3 text-justify">
            <div className="col-md-6 ">
              <p>
                Tr???i nghi???m 5 ng??y chuy??n s??u v?? T???t Nghi???p v???i t?? c??ch l?? m???t
                NH?? TH???C H??NH NLP C??N B???N, th??nh th???c v??? Th??i Mi??n Tr??? Li???u v??
                D??ng Th???i Gian Tr??? Li???u v???i ch???ng ch??? ?????ng c???p qu???c t??? (ch???ng
                nh???n b???i ?????i H???c NLP Hoa K??? - ???y Ban Th??i Mi??n Tr??? Li???u Hoa K??? -
                H???i ?????ng C??c Chuy??n Gia Th??i Mi??n Th???c Nghi???m Hoa K???) b???i b???c
                th???y ????o t???o NLP h??ng ?????u Ch??u ?? - Chuy??n gia Mr. Vasanth
                Gopalan.
              </p>
            </div>

            <div className="col-md-6">
              <img src={coa03} alt={coa03} />
            </div>
          </div>

          <div className="row flex-alignitem mt-4 text-justify">
            <div className="col-md-6 order-last">
              <ul>
                <li>
                  V???n d???ng v?? gi???i quy???t t???n g???c , chuy???n h??a ch???a l??nh c??c v???n
                  ????? v??? 8 kh??a c???nh c???a cu???c s???ng ngay trong kh??a h???c v???i nh???ng
                  quy tr??nh NLP n???n t???ng & chuy??n s??u, th??i mi??n v?? Li???u Ph??p
                  D??ng Th???i Gian.
                </li>

                <li>
                  C???ng c??? v?? h??? th???ng l???i 6 QUY TR??NH CH???A L??NH t??? kho?? 1 ???T??M
                  L???I L??? S???NG & KH??T V???NG TH??NH C??NG??? ?????n kh??a 5(*)
                </li>

                <li>
                  L??M CH??? K??? THU???T TH??I MI??N CH???A L??NHL??M CH??? K??? THU???T TH??I MI??N
                  CH???A L??NH
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <img src={coa19} alt={coa19} />
            </div>
          </div>

          <div className="row flex-alignitem mt-3 text-justify">
            <div className="col-md-6 ">
              <ul>
                <li>KH??M PH?? LI???U PH??P D??NG TH???I GIAN</li>

                <li>Ki???n t???o v?? thi???t l???p h??nh vi m???i</li>

                <li>Th???c t???p K??? Thu???t T?? V???n Tr??? Li???u</li>

                <li>
                  Lo???i tr??? t???n g???c 5 LO???I C???M X??C TI??U C???C NGHI??M TR???NG NH???T m??
                  con ng?????i g???p ph???i
                </li>

                <li>Gieo h???t T????NG LAI</li>
              </ul>
            </div>

            <div className="col-md-6">
              <img src={coa20} alt={coa20} />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4 text-center">
        <div className="col-md-8 offset-md-2 mt-3">
          <div className="row">
            <img src={coa04} alt={coa04} className="col-md-10 offset-md-1" />

            <div className="col-4">
              <img src={coa05} alt={coa05} />

              <p>
                T???ng h???p kho ki???n th???c NLP ???? ???????c h???c t??? 5 c???p ????? ?????u (kh??a 1
                ?????n 5)*
              </p>
            </div>
            <div className="col-4">
              <img src={coa06} alt={coa06} />
              <p>C???u Tr??c Quy Tr??nh</p>
            </div>

            <div className="col-4">
              <img src={coa07} alt={coa07} />
              <p>V???n ????? v?? " Ch??? ????ch T??ch C???c" c???a V???n ?????</p>
            </div>
          </div>

          <div className="row mt-3">
            <img src={coa08} alt={coa08} className="col-md-10 offset-md-1" />

            <div className="col-4">
              <img src={coa09} alt={coa09} />
              <p>M?? H??nh Chu???n ??o??n v?? K??? Thu???t ?????t C??u H???i</p>
            </div>

            <div className="col-4">
              <img src={coa10} alt={coa10} />
              <p className="text-center">Quy tr??nh t???o "NEO"</p>
            </div>

            <div className="col-4">
              <img src={coa11} alt={coa11} />
              <p>Quy tr??nh ????nh ????? "NEO"</p>
            </div>
          </div>

          <div className="row mt-3">
            <img src={coa12} alt={coa12} className="col-md-10 offset-md-1" />

            <div className="col-4 offset-2">
              <img src={coa13} alt={coa13} />

              <p>Quy Tr??nh PP</p>
            </div>
            <div className="col-4">
              <img src={coa14} alt={coa14} />

              <p className="text-center">Quy tr??nh NBG</p>
            </div>
          </div>

          <div className="row mt-3 flex-alignitem">
            <img src={coa15} alt={coa15} className="col-md-10 offset-md-1" />
            <div className="col-4 offset-1">
              <img src={coa16} alt={coa16} />
            </div>

            <div className="col-5">
              <p className="text-center">
                Th???c hi???n Ch???a l??nh b???ng quy t???c D??ng Th???i Gian C??n B???n
              </p>
            </div>
          </div>

          <div className="row mt-3 flex-alignitem">
            <img src={coa17} alt={coa17} className="col-md-10 offset-md-1" />
            <div className="col-md-4 offset-md-0 col-sm-4 offset-sm-4  col-xs-4 offset-xs-4">
              <img src={coa18} alt={coa18} />
            </div>
            <div className="col-md-8">
              <p>
                T???T NGHI???P CH???NG CH??? - NLP PRACTITIONER
                <br /> (Ch???ng nh???n ABNLP & NLP University)
              </p>
              <p>
                T???T NGHI???P CH???NG CH??? - HYPNOTHERAPIST
                <br /> (Ch???ng nh???n ABH)
              </p>
              <p>
                T???T NGHI???P CH???NG CH??? - TIMELINE THERAPIST <br /> (Ch???ng nh???n b???i
                Timeline Therapy Association)
              </p>
            </div>
          </div>
          <div className="mt-3">
            <h3>KH??A 1 ?????N KH??A 5 BAO G???M:</h3>
            <Link to="/chuong-trinh-huan-luyen/offline/tim-lai-le-song-va-khat-vong-thanh-cong">
              T??m L???i L??? S???ng V?? Kh??t V???ng Th??nh C??ng
            </Link>
            <Link to="/chuong-trinh-huan-luyen/offline/nghe-thuat-song-hanh-phuc-va-hoa-hop">
              Ngh??? Thu???t S???ng H???nh Ph??c V?? H??a H???p
            </Link>
            <Link to="/chuong-trinh-huan-luyen/offline/thap-sang-cuoc-doi-ban">
              Th???p S??ng Cu???c ?????i B???n
            </Link>
            <Link to="/chuong-trinh-huan-luyen/offline/suc-khoe-toan-dien">
              S???c Kh???e Ho??n h???o
            </Link>
            <Link to="/chuong-trinh-huan-luyen/offline/tu-duy-xuat-chung">
              T?? Duy Xu???t Ch??ng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default COA;
