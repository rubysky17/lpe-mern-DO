import LPEButton from "app/components/button";
import TextInput from "app/components/textInput";
import {
  API_ENDPOINT,
  CODE_SUCCESS,
  VERIFY_FORGET_PASSWORD,
} from "app/const/Api";
import axios from "axios";
import useSiteTitle from "core/hooks/useSiteTitle";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

// component

// constant

// styles
import "./styles/styles.scss";

// const useStyles = makeStyles(() => ({
//   confirmBtn: {
//     marginTop: "10px",
//     marginBottom: "10px",
//     backgroundColor: "#3777BC",
//     color: "#fff",
//     textTransform: "capitalize",
//     fontWeight: "bold",
//     "&:hover": {
//       backgroundColor: "#6499e7",
//     },
//   },
// }));

function VerifyForgotPassword() {
  useSiteTitle("confirm_forgot_password");
  let { token } = useParams();
  const history = useHistory();
  const refForm = useRef();
  // const classes = useStyles();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleSubmit = () => {
    const password = refForm.current["password"].value;
    const repassword = refForm.current["repassword"].value;

    if (!password) {
      setError({
        password: "Không được bỏ trống",
      });

      refForm.current["password"].focus();
      return;
    }

    if (password.trim().length) {
      if (password.length < 6) {
        setError({
          password: "Mật khẩu không được nhỏ hơn 6 ký tự",
        });
        return;
      } else {
        if (password.trim() !== repassword.trim()) {
          setError({
            repassword: "Không khớp với mật khẩu trên",
          });
          refForm.current["repassword"].focus();
          return;
        }
      }
    }

    changePasswordAction(repassword);
  };

  const changePasswordAction = async (submitData) => {
    setError({});
    setLoading(true);

    await axios({
      method: "POST",
      url: API_ENDPOINT + VERIFY_FORGET_PASSWORD,
      data: {
        password: submitData,
      },
      headers: {
        token: `${token}`,
      },
    })
      .then((res) => {
        if (res.status === CODE_SUCCESS) {
          setLoading(false);
          setStep((prevStep) => prevStep + 1);
        }
      })
      .catch(() => {
        setLoading(false);
        setError({
          repassword: "Hết hạn truy xuất đường dẫn này!!",
        });
      });
  };

  const renderUI = (step) => {
    switch (step) {
      case 0:
        return (
          <main className="forgetContainer">
            <div className="formContainer">
              <div className="formHeading">
                <h5>Xác nhận đổi mật khẩu mới</h5>
              </div>

              <p className="descText">
                Vui lòng nhập mật khẩu mới cho tài khoản của bạn.
              </p>

              <form className="formInput" ref={refForm}>
                <TextInput
                  label="Mật khẩu mới"
                  placeHolder="Nhập mật khẩu mới"
                  type="password"
                  name="password"
                  error={error.password}
                  typeInput="text"
                />

                <TextInput
                  label="Xác nhận mật khẩu mới"
                  placeHolder="Nhập lại mật khẩu mới"
                  type="password"
                  name="repassword"
                  error={error.repassword}
                  typeInput="text"
                />

                <div className="wrapperButton">
                  <LPEButton
                    name="Xác nhận"
                    // classStyled={classes.confirmBtn}
                    action={handleSubmit}
                    loading={loading}
                  />
                </div>
              </form>
            </div>
          </main>
        );
      case 1:
        return (
          <main className="forgetContainer">
            <div className="formContainerForget">
              <div className="formHeading">
                <h5>Lấy lại mật khẩu thành công</h5>
              </div>

              <p className="descText">
                Tài khoản của bạn đã được tạo mật khẩu mới
              </p>

              <p className="descText">
                Giờ đây bạn có thể đăng nhập và sử dụng tài khoản.
              </p>

              <div className="formInput">
                <LPEButton
                  name="Đăng nhập"
                  // classStyled={classes.confirmBtn}
                  action={() => {
                    history.push("/dang-nhap");
                  }}
                />
              </div>
            </div>
          </main>
        );
      default: {
        throw Error("Invalid Case!!!");
      }
    }
  };

  return <>{renderUI(step)}</>;
}

export default VerifyForgotPassword;
