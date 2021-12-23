import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import "./styles/styles.scss";

function IDENTITY() {
  useSiteTitle("identity_program");
  return (
    <div className="identity container-fluid">
      <div className="row">
        <img
          src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/identity//tim-lai-nhan-dang-dich-thuc-lpe-banner.jpg"
          alt="img"
          className="img-fluid w-100"
        />
      </div>

      <div className="row page1 pt-3">
        <div className="col-6 offset-3">
          <img
            src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-gia-tri.png"
            alt="img"
          />
        </div>
        <div className="col-md-8 offset-md-2">
          <div className="row flex-alignitem mt-4 text-justify">
            <div className="col-md-6 order-last">
              <ul>
                <li>
                  Nhận Thức về khái niệm Nhân Dạng và cách nó tác động đến Cơ
                  Thể và Tâm Trí chúng ta
                </li>
                <li>
                  Nhận Thức về Sự Tiến Hóa của con người từ một số quan điểm/góc
                  nhìn và cách chúng ta thực sự Kiến Tạo Số Phận của mình từ góc
                  nhìn Tâm Linh
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-1.jpg"
                alt="img"
              />
            </div>
          </div>
          <div className="row flex-alignitem mt-3 text-justify pb-3">
            <div className="col-md-6 ">
              <ul>
                <li>
                  Nhận thức về Vật Lý/Cơ Học Lượng Tử và cách sử dụng nó để Kiến
                  Tạo Thành Công Cực Đại
                </li>
                <li>
                  Hiểu về Nhiều Quy Luật Thu Hút Nguồn Lực Khác Nhau Trong Cuộc
                  Đời và cách sử dụng các quy luật này để Thành Công Cực Đại
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-2.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row page2 pt-4">
        <div className="col-6 offset-3">
          <img
            src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-trai-nghiem.png"
            alt="img"
          />
        </div>
        <img
          src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-day-1.png"
          alt="img"
          className="col-md-4 col-sm-5 mt-3"
        />
        <div className="col-md-8 offset-md-2 mt-3">
          <img
            src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-3.jpg"
            alt="img"
          />
          <ul className="mt-3">
            <li>
              Cách Kiến Tạo Nhân Dạng và cộng hưởng với những đóng góp trọng đại
              trong cuộc đời này
            </li>
            <li>
              Vận Hành các vấn đề Toàn Diện bằng Liệu Trình Personal History
              Therapy (Tiểu Sử Cá Nhân)
            </li>
          </ul>
        </div>

        <img
          src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-day-2.png"
          alt="img"
          className="col-md-4 col-sm-5 mt-3"
        />

        <div className="col-md-8 offset-md-2 mt-3">
          <img
            src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-4.jpg"
            alt="img"
          />
          <ul className="mt-3">
            <li>Tiếp cận đời sống tâm linh trên phương diện khoa học</li>
            <li>
              Thảo Luận, Đúc Kết về cách Vận Hành Nhân Dạng và Tâm Linh trên
              hành trình mà ở đó bạn Đạt Được Thành Công theo như Bảng Kế Hoạch
              Thành Công của bạn
            </li>
            <li>Thấm Nhuần Vật Lý Lượng Tử và Cách áp dụng vào cuộc sống</li>
          </ul>
        </div>

        <img
          src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-day-3.png"
          alt="img"
          className="col-md-4 col-sm-5 mt-3"
        />

        <div className="col-md-8 offset-md-2 mt-3">
          <img
            src="https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/offline/identity/tim-lai-nhan-dang-dich-thuc-lpe-hinh-5.jpg"
            alt="img"
          />
          <ul className="mt-3">
            <li>
              Chuẩn Bị Cuối Cùng về Thể Chất và Tinh Thân cho hành trình Chinh
              Phục Fansipan, Sapa, Việt Nam.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IDENTITY;
