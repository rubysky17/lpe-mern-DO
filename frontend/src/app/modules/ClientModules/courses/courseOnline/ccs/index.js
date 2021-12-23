import React, { useRef, useState } from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { Button, InputLabel, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import "./styles/styles.scss";

const useStyles = makeStyles(() => ({
  formInput: {
    width: "100%",
    marginBottom: "40px",
  },
  labelInput: {
    textAlign: "left",
    marginBottom: "10px",
    marginTop: "10px",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
}));

function CcsPage() {
  useSiteTitle("ccs");

  const classes = useStyles();
  const refForm = useRef(null);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    const phoneRegex = /^(0)[0-9]{9}$/;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const errorMgs = {};

    let name = refForm.current["name"].value;
    let phone = refForm.current["phone"].value;
    let email = refForm.current["email"].value;

    if (name.trim().length < 3) {
      errorMgs["name"] = "Vui lòng nhập đầy đủ tên";
    }

    if (phone.trim().length === 0) {
      errorMgs["phone"] = "Vui lòng nhập số điện thoại";
    }

    if (!phone.match(phoneRegex)) {
      errorMgs["phone"] =
        "Sai định dạng số điện thoại, phải bắt đầu từ 0 và gồm 10 số";
    }

    if (email.trim().length === 0) {
      errorMgs["email"] = "Vui lòng nhập Email";
    }

    if (!emailRegex.test(email)) {
      errorMgs["email"] = "Sai định dạng email";
    }

    if (Object.keys(errorMgs).length === 0) {
      // Kiểm tra object Error xem có rỗng không ? Rỗng là không có lỗi cho phép submit form
      // const now = new Date();
      // const date = timeToUnix(now);
      // Submit thông tin của giỏ hàng
      // const dataSubmit = {
      //   date,
      //   email,
      //   name,
      //   phone,
      // };
    } else {
      setLoading(false);
    }

    setError(errorMgs);
  };

  return (
    <div className="ccs">
      <section className="banner">
        <div className="container">
          <div className="row">
            <img
              src="https://lpe.vn/img/ccs/css-introduce.jpg"
              className="img-responsive"
              alt="https://lpe.vn/img/ccs/css-introduce.jpg"
            />
            <div className="bannerContent">
              <h3>VÌ SAO BẠN CẦN CHUỖI CHƯƠNG TRÌNH NÀY?</h3>

              <ul>
                <li>
                  <i className="arrow"></i>
                  Bạn đã phải đối mặt với rẩt nhiều thách thức khi đại dịch
                  Covid xảy đến.
                </li>

                <li>
                  <i className="arrow"></i>
                  Khi những vấn đề xuất hiện, bạn mất phương hướng và hầu như
                  không biết cách giải quyết, chỉ có thể chờ đợi "phép màu" xuất
                  hiện.
                </li>

                <li>
                  <i className="arrow"></i>
                  Những thứ bạn đã tin tưởng và xây dựng từ trước đến nay không
                  còn vững chắc.
                </li>
                <li>
                  <i className="arrow"></i>
                  Bạn cần vực dậy bản thân sau Covid.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="introduce mt-5">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <img
                src="https://lpe.vn/img/ccs/ccs-mrvas.png"
                className="img-responsive"
                alt="https://lpe.vn/img/ccs/ccs-mrvas.png"
              />
            </div>
            <div className="col-7 introduceRight">
              <img
                src="https://lpe.vn/img/ccs/ccs-introduceContent.png"
                className="img-responsive"
                alt="https://lpe.vn/img/ccs/ccs-introduceContent.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="container">
          <div className="row timelineContent">
            <div className="col-12 mt-1">
              <img
                src="https://lpe.vn/img/ccs/ccs-timeline.png"
                className="img-responsive"
                alt="https://lpe.vn/img/ccs/ccs-timeline.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="degree mt-5">
        <div className="container degreeContent">
          <div className="row pt-4">
            <div className="col-7">
              <img
                src="https://lpe.vn/img/ccs/ccs-degreeContent1.png"
                className="img-responsive"
                alt="https://lpe.vn/img/ccs/ccs-degreeContent1.png"
              />
              <img
                src="https://lpe.vn/img/ccs/ccs-degreeContent2.png"
                className="img-responsive"
                alt="https://lpe.vn/img/ccs/ccs-degreeContent2.png"
              />
            </div>
            <div className="col-5">
              <img
                src="https://lpe.vn/img/ccs/ccs-degreeContent3.png"
                className="img-responsive"
                alt="https://lpe.vn/img/ccs/ccs-degreeContent3.png"
              />
            </div>
          </div>
        </div>

        <div className="container degreeContent mt-5">
          <div className="row pt-4">
            <div className="offset-md-1 col-md-10 col-sm-12 col-xs-12">
              <img
                src="https://lpe.vn/img/ccs/ccs-degreeContent4.png"
                className="img-responsive"
                alt="https://lpe.vn/img/ccs/ccs-degreeContent4.png"
              />
              <iframe
                className="pt-3"
                src="https://www.youtube.com/embed/7Fz9jkt280U"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="row pt-3 ">
            <div className="offset-2 col-8">
              <img
                src="https://lpe.vn/img/ccs/ccs-register.png"
                className="img-responsive"
                alt="https://lpe.vn/img/ccs/ccs-register.png"
              />
            </div>
          </div>

          {/* Form Đăng ký tư vấn */}
          <form
            className="ccs-form advertisement mt-3"
            noValidate
            ref={refForm}
          >
            <InputLabel id="paymentType" className={classes.labelInput}>
              Tên
            </InputLabel>

            <TextField
              name="name"
              variant="outlined"
              error={error.name}
              helperText={error.name}
              placeholder="Nguyễn Văn A"
              className={classes.formInput}
            />

            <InputLabel id="paymentType" className={classes.labelInput}>
              Email
            </InputLabel>

            <TextField
              name="email"
              error={error.email}
              helperText={error.email}
              variant="outlined"
              placeholder="Example@gmail.com"
              className={classes.formInput}
            />

            <InputLabel id="paymentType" className={classes.labelInput}>
              Số điện thoại
            </InputLabel>

            <TextField
              name="phone"
              error={error.phone}
              helperText={error.phone}
              variant="outlined"
              placeholder="09XXXXXXXX"
              className={classes.formInput}
            />

            {/* Tate Picker */}
            {/* <TimePickerCCS
              onHandleChangeTime={handleChangeTime}
              className="mb-3"
            /> */}

            {/* {success && (
              <>
                <p className="mt-2 text-success fz-small">
                  LPE đã ghi nhận thông tin của bạn. Quét mã QR hoặc truy cập
                  <a
                    href="https://zalo.me/g/wyuriw963"
                    className="text-primary mx-1"
                  >
                    tại đây
                  </a>
                  để tham gia nhóm zalo và cập nhật thông tin mới nhất về
                  "chương trình quà tặng".
                </p>

                <div className="d-flex justify-content-center mb-2">
                  <img
                    src="https://lpe.vn/img/ccs/ccs-qr.jpg"
                    alt="https://lpe.vn/img/ccs/ccs-qr.jpg"
                    className="img-fluid w-50 "
                  />
                </div>
              </>
            )} */}

            {/* {error.timeAdvise && (
              <p className="mt-2 text-danger fz-small">{error.timeAdvise}</p>
            )} */}

            {loading && <div className="loader-ccs text-center m-auto"></div>}

            <Button
              variant="contained"
              className={classes.button}
              onClick={handleSubmit}
              style={{
                margin: "20px 0",
                backgroundColor: "#201572",
                padding: "10px 10px",
                color: "#fff",
                marginBottom: "20px",
                marginTop: "30px",
                fontSize: "17px",
                fontWeight: "bold",
                width: "100%",
                "&:hover": {
                  backgroundColor: "#201572",
                  color: "#fff",
                },
              }}
            >
              Gửi thông tin
            </Button>
          </form>
          <div className="row promotion">
            <div className="offset-2 col-8 pt-4">
              <img
                src="https://lpe.vn/img/ccs/ccs-promotion1.png"
                className="img-responsive"
                alt="https://lpe.vn/img/ccs/ccs-promotion1.png"
              />
            </div>

            <div className="col-12 pt-3 pb-5">
              <img
                src="https://lpe.vn/img/ccs/promote-2.png"
                className="img-responsive"
                alt="https://lpe.vn/img/ccs/promote-2.png"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="hotline-phone-ring-wrap">
        <div className="hotline-phone-ring">
          <div className="hotline-phone-ring-circle"></div>
          <div className="hotline-phone-ring-circle-fill"></div>
          <div className="hotline-phone-ring-img-circle">
            <a href="tel:1900636034" className="pps-btn-img">
              <img
                src="https://nguyenhung.net/wp-content/uploads/2019/05/icon-call-nh.png"
                alt="Gọi điện thoại"
                width="50"
              />
            </a>
          </div>
        </div>
        <div className="hotline-bar">
          <a href="tel:1900636034">
            <span className="text-hotline">1900.636.034</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CcsPage;
