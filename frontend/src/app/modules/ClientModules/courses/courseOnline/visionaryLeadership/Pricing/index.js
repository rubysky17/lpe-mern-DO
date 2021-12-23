import React from "react";
// media import

import "./styles/styles.scss";

function Princing() {
  const imgPrice = [
    "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/visionary-leadership/price-01.png",
    "https://lpe.vn/img/lpe/chuong-trinh-huan-luyen/online/visionary-leadership/price-02.png",
  ];

  return (
    <div className="pricing py-5">
      <div className="container">
        <div className="row wrapper-card">
          {imgPrice.map((img, index) => {
            return (
              <div className="col-12 col-md-6 card-item">
                <div className="card-shadow">
                  <img src={img} className="img-fluid img" alt={img} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Princing;
