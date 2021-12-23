import { useRef, useState } from "react";
import axios from "axios";

import withAuth from "core/hooks/useAuth";
import TextInput from "app/components/textInput";
import LPEButton from "app/components/button";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { API_ENDPOINT, CODE_SUCCESS, SIGN_UP } from "app/const/Api";
import { convertFullDate, timeToUnix } from "core/utils/dateUtil";
import { ValidationEmail } from "core/utils/emailUtil";
import { phoneValidate } from "core/utils/phoneUtil";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";

import useSiteTitle from "core/hooks/useSiteTitle";

import "./styles/styles.scss";

function Register() {
  useSiteTitle("register");
  const refForm = useRef();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [birthDay, setBirthDay] = useState("2000-09-20T21:11:54");
  const [selectedDate, setSelectedDate] = useState(
    new Date() // default Date
  );

  const handleRegister = () => {
    const dataSubmit = {};
    const errorMsg = {};

    // Vòng loop checking empty input
    for (let index = 0; index < refForm.current.length; index++) {
      const { name, value, type } = refForm.current[index];
      if (!value || !value.length) {
        if (type !== "button") {
          if (name.length) {
            errorMsg[name] = "Không được bỏ trống trường này";
          }
        }
      } else {
        switch (name) {
          case "birthDay": {
            dataSubmit["birthDay"] = timeToUnix(birthDay);
            break;
          }
          // passing repassword
          case "repassword": {
            break;
          }
          // passing password
          case "password": {
            break;
          }
          case "": {
            break;
          }
          default:
            dataSubmit[name] = value.trim();
            break;
        }
      }
    }

    // Kiểm tra tên đăng ký
    const name = refForm.current["name"].value.trim();
    if (name.length > 30) {
      errorMsg["name"] = "Tên không vượt quá 30 ký tự";
      refForm.current["name"].focus();
    }

    // Kiểm tra email có hợp lệ
    const email = refForm.current["email"].value;
    if (email.trim().length) {
      if (!ValidationEmail(email)) {
        errorMsg["email"] = "Email không hợp lệ";
        refForm.current["email"].focus();
      }
    }

    // Kiểm tra số điện thoại có hợp lệ
    const phone = refForm.current["phone"].value;
    if (phone.trim().length) {
      if (!phoneValidate(phone)) {
        errorMsg["phone"] = "Số điện thoại không hợp lệ";
        refForm.current["phone"].focus();
      }
    }

    // Kiểm tra mật khẩu
    const password = refForm.current["password"].value;
    const repassword = refForm.current["repassword"].value;

    if (password.trim().length) {
      if (password.length < 6) {
        errorMsg["password"] = "Mật khẩu không được nhỏ hơn 6 ký tự";
      } else {
        if (password.trim() !== repassword.trim()) {
          errorMsg["repassword"] = "Không khớp với mật khẩu trên";
        } else {
          dataSubmit["password"] = password;
        }
      }
    }

    // Hiển thị lỗi về phía client
    setError(errorMsg);
    console.log("errorMsg", errorMsg);
    // Kiểm tra object nếu lỗi sẽ không thực hiện hàm đăng ký
    if (Object.keys(errorMsg).length === 0) {
      console.log("run");

      handleSubmit(dataSubmit, setLoading);
    }
  };

  const handleSubmit = async (data) => {
    setLoading(true);

    await axios({
      method: "POST",
      url: API_ENDPOINT + SIGN_UP,
      data,
    })
      .then((response) => {
        if (response.status === CODE_SUCCESS) {
          setLoading(false);
          setStep((prevState) => prevState + 1);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError({
          email: "Email đã tồn tại",
        });
        console.log(err);
      });
  };

  const handleDateChange = (date) => {
    setBirthDay(convertFullDate(date));
    setSelectedDate(date);
  };

  const RenderUI = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="registerContainer">
              <div className="row">
                <div className="formContainer">
                  <form ref={refForm}>
                    <div className="row">
                      <div className="col-12">
                        <TextInput
                          label="Họ và tên"
                          placeHolder="Nguyễn Văn A"
                          type="text"
                          name="name"
                          error={error.name}
                          typeInput="text"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-md-6">
                        <TextInput
                          label="Email"
                          placeHolder="JohnDoe@gmail.com"
                          type="email"
                          name="email"
                          error={error.email}
                          typeInput="text"
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <TextInput
                          label="Số điện thoại"
                          placeHolder="09XXXXXXXX"
                          type="phone"
                          name="phone"
                          error={error.phone}
                          typeInput="text"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 col-md-6 mt-6 mt-md-0"
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          marginBottom: "14px",
                        }}
                      >
                        <LocalizationProvider
                          dateAdapter={AdapterDateFns}
                          className="datePicker-register"
                        >
                          <DesktopDatePicker
                            label="Ngày sinh"
                            id="date-picker-dialog"
                            inputFormat="dd/MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            name="birthDay"
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>

                      <div className="col-12 col-md-6">
                        <TextInput
                          label="Giới tính"
                          placeHolder="Nhập giới tính"
                          name="gender"
                          error={error.gender}
                          typeInput="select"
                        />
                      </div>
                    </div>

                    <TextInput
                      label="Mật khẩu"
                      placeHolder="Nhập mật khẩu"
                      type="password"
                      name="password"
                      error={error.password}
                      typeInput="text"
                    />

                    <TextInput
                      label="Nhập lại mật khẩu"
                      placeHolder="Nhập lại mật khẩu"
                      type="password"
                      name="repassword"
                      error={error.repassword}
                      typeInput="text"
                    />
                  </form>

                  <div className="positionButton">
                    <LPEButton
                      action={handleRegister}
                      name="Tạo tài khoản"
                      loading={loading}
                      classStyled="registerBtn"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="OTPContainer">
              <div className="formContainerOTP">
                <div className="formHeading">
                  <h5>LPE đã gửi một Email xác thực đến cho bạn</h5>
                </div>

                <p className="descText">
                  Vui lòng kiểm tra hộp thư đến, có thể Email nằm trong mục spam
                  của bạn.
                </p>
              </div>
            </div>
          </>
        );

      default:
        throw new Error("Invalid Screen!!!");
    }
  };

  return <>{RenderUI(step)}</>;
}

export default withAuth(Register);
