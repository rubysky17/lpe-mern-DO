import React from "react";

// import { timeToUnix } from "core/utils/dateUtil";
// import { create } from "app/const/firebase";
// import { InputLabel, makeStyles, TextField } from "@material-ui/core";

import "./styles/styles.scss";

// const useStyles = makeStyles(() => ({
//   formInput: {
//     width: "100%",
//   },
//   formSelect: {
//     width: "100%",
//     marginTop: "10px",
//   },
//   labelInput: {
//     textAlign: "left",
//     textTransform: "uppercase",
//     fontWeight: "bold",
//     margin: "20px 0",
//   },
// }));

function Footer() {
  // const [error, setError] = useState({});
  // const refForm = useRef(null);
  // const classes = useStyles();
  // const [status, setStatus] = useState(false);

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const phoneRegex = /^(0)[0-9]{9}$/;
  //   const emailRegex =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //   const errorMgs = {};

  //   const name = refForm.current["name"].value;
  //   const phone = refForm.current["phone"].value;
  //   const email = refForm.current["email"].value;
  //   // const code = refForm.current["code"].value;

  //   if (name.trim().length < 3) {
  //     errorMgs["name"] = "Vui lòng nhập đầy đủ tên";
  //   }

  //   if (phone.trim().length === 0) {
  //     errorMgs["phone"] = "Vui lòng nhập số điện thoại";
  //   }

  //   if (!phone.match(phoneRegex)) {
  //     errorMgs["phone"] =
  //       "Sai định dạng số điện thoại, phải bắt đầu từ 0 và gồm 10 số";
  //   }

  //   if (email.trim().length === 0) {
  //     errorMgs["email"] = "Vui lòng nhập Email";
  //   }

  //   if (!emailRegex.test(email)) {
  //     errorMgs["email"] = "Sai định dạng email";
  //   }

  //   // Kiểm tra object Error xem có rỗng không ? Rỗng là không có lỗi cho phép submit form
  //   if (Object.keys(errorMgs).length === 0) {
  //     const now = new Date();

  //     const date = timeToUnix(now);

  //     // Submit thông tin của giỏ hàng
  //     const dataSubmit = {
  //       date,
  //       email,
  //       name,
  //       phone,
  //     };

  //     // Đưa thông tin lên database
  //     create("ittc", dataSubmit)
  //       .then((res) => {
  //         console.log("complete create docID: ", res);

  //         refForm.current["name"].value = "";
  //         refForm.current["phone"].value = "";
  //         refForm.current["email"].value = "";

  //         setStatus(true);
  //       })
  //       .catch((err) => {
  //         console.log("error from database:", err);
  //         setStatus(false);
  //       });
  //   }

  //   setTimeout(() => {
  //     setStatus(false);
  //   }, 3000);

  //   setError(errorMgs);
  // };

  return (
    <div className="ittc-footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <p className="ittc-footer-text">Đăng ký nhận thông tin</p>
          </div>

          {/* <form className="col-12 col-md-8" ref={refForm} noValidate>
            <InputPM
              type="text"
              label="Tên"
              name="fullname"
              // error={error.fullname}
            />
            <InputPM
              type="text"
              label="Email"
              name="email"
              // error={error.fullname}
            />
            <InputPM
              type="text"
              label="Số điện thoại"
              name="phone"
              // error={error.fullname}
            />

            <button className="ittc-footer-btn" onClick={handleSubmit}>
              Nhận tư vấn
            </button>
          </form> */}

          {/* <form ref={refForm} className="col-12 col-md-8">
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

            {status && (
              <p className="text-success mb-0 mt-3 text-center">
                Gửi thông tin thành công
              </p>
            )}

            <button onClick={onSubmit} className="ittc-footer-btn mt-4">
              Gửi thông tin
            </button>
          </form> */}

          <a
            href="https://www.facebook.com/lpe.vn.lifeuni"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            Nhận tư vấn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
