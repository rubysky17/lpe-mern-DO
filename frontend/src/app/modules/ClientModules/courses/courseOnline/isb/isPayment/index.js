import React, { useRef, useState } from "react";
// import axios from "axios";

// import { timeToUnix } from "core/utils/dateUtil";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

import "./styles/styles.scss";

const useStyles = makeStyles(() => ({
  formInput: {
    width: "100%",
    marginBottom: "40px",
  },
  formSelect: {
    width: "100%",
    marginTop: "10px",
    marginBottom: "20px",
  },
  labelInput: {
    textAlign: "left",
    marginBottom: "10px",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  button: {
    marginTop: "50px",
    backgroundColor: "#168854",
    padding: "10px 10px",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#168854",
      color: "#fff",
    },
  },
}));

const CustomField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "green",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const international = "INTERNATIONAL";
const domestic = "DOMESTIC";
const qr = "QR";

// const returnUrl = "https://lpeonline.vn/trang-thai-thanh-toan";

function ISPayment() {
  const classes = useStyles();
  const refForm = useRef(null);

  // const [protocol, setProtocol] = useState();
  const [cardtype, setCardtype] = useState(domestic);
  // const [unixId, setUnixId] = useState("");
  // const [url, setUrl] = useState();
  const [error, setError] = useState({});
  // const [priceCourse, setPriceCourse] = useState();
  // const [registerType, setRegisterType] = useState();

  // useEffect(() => {
  //   getList("price_courses")
  //     .then((result) => {
  //       setPriceCourse(result[0].immune_system);

  //       setRegisterType(result[0].immune_system.option1);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // Lấy địa chỉ IP của người dùng
  // useEffect(() => {
  //   getIPLocal();
  // }, []);

  // useEffect(() => {
  //   // generateUrl();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cardtype, registerType]);

  // const generateUrl = () => {
  //   console.log("registerType", registerType);
  //   if (registerType) {
  //     const uid = new Date().getTime().toString(36);
  //     setUnixId(uid);

  //     const merchDetail = Object.assign(
  //       { price: registerType },
  //       { merchRef: `IS_${uid}` },
  //       { typepay: cardtype }
  //     );

  //     const urlData = createOrderCourse(merchDetail, protocol, returnUrl);

  //     setUrl(urlData);
  //   }
  // };

  // const getIPLocal = async () => {
  //   try {
  //     await axios
  //       .get("https://api.ipify.org")
  //       .then((res) => setProtocol(res.data))
  //       .catch((err) => console.log(err));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async () => {
    const phoneRegex = /^(0)[0-9]{9}$/;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const errorMgs = {};

    const name = refForm.current["name"].value;
    const phone = refForm.current["phone"].value;
    const email = refForm.current["email"].value;

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

    if (cardtype === null) {
      errorMgs["cardType"] = "Vui lòng chọn phương thức thanh toán";
    }

    // Kiểm tra object Error xem có rỗng không ? Rỗng là không có lỗi cho phép submit form
    if (Object.keys(errorMgs).length === 0) {
      // const now = new Date();
      // const date = timeToUnix(now);
      // Submit thông tin của giỏ hàng
      // const dataSubmit = {
      //   date,
      //   email,
      //   name,
      //   phone,
      //   infoOrder: "Khóa học IS",
      //   orderInfo: "LPE_IS",
      //   onepayId: unixId,
      //   totalPrice: registerType,
      // };
      // Đưa thông tin lên database và chuyển hướng qua ONEpay
      // create("register_is", dataSubmit)
      //   .then((res) => {
      //     window.open(url, "_self");
      //   })
      //   .catch((error) => {
      //     console.error("Error adding document: ", error);
      //   });
    }

    setError(errorMgs);
  };

  const handleChangeSelect = (event) => {
    setCardtype(event.target.value);
  };

  // const handleChangeRegister = (event) => {
  //   console.log(event.target.value);
  //   setRegisterType(event.target.value);
  // };

  return (
    <div className="ccs_wrapper">
      <img
        className="img-fluid img-bg"
        src="https://lpe.vn/img/background/imune-system.jpg"
        alt="vas"
      ></img>

      <div className="bg-form is">
        <div className="form-for-buy is">
          <h3 className="ccs-form_heading">Đăng ký khóa học</h3>

          <form className="ccs-form" noValidate ref={refForm}>
            <InputLabel id="paymentType" className={classes.labelInput}>
              Tên
            </InputLabel>

            <CustomField
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

            <CustomField
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

            <CustomField
              name="phone"
              error={error.phone}
              helperText={error.phone}
              variant="outlined"
              placeholder="09XXXXXXXX"
              className={classes.formInput}
            />

            <InputLabel id="paymentType" className={classes.labelInput}>
              Đăng ký cho
            </InputLabel>

            {/* {priceCourse && (
              <Select
                labelId="registerType"
                className={classes.formSelect}
                defaultValue={priceCourse?.option1}
                onChange={handleChangeRegister}
              >
                <MenuItem
                  value={priceCourse?.option1}
                  className={classes.menuItem}
                >
                  1 người
                </MenuItem>

                <MenuItem value={priceCourse?.option2}>2 người</MenuItem>
              </Select>
            )} */}

            <InputLabel id="paymentType" className={classes.labelInput}>
              Hình thức thanh toán
            </InputLabel>

            <Select
              labelId="paymentType"
              className={classes.formSelect}
              defaultValue={cardtype}
              onChange={handleChangeSelect}
              helperText={error.cardType}
              error={error.cardType}
            >
              <MenuItem value={domestic} className={classes.menuItem}>
                Thẻ ngân hàng
              </MenuItem>
              <MenuItem value={international}>Thẻ Visa/Master Card</MenuItem>
              <MenuItem value={qr}>Mã QR</MenuItem>
            </Select>

            {error.cardType && (
              <p className="text-danger mt-2">{error.cardType}</p>
            )}

            <Button
              variant="contained"
              className={classes.button}
              onClick={handleSubmit}
            >
              Tiếp tục thanh toán
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ISPayment;
