import axios from "axios";
import { useState, useRef, useEffect } from "react";

// utils and constant
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

import TextInput from "app/components/textInput";
import { ValidationEmail } from "core/utils/emailUtil";
import { API_ENDPOINT, CODE_SUCCESS, FORGOT_PASSWORD } from "app/const/Api";
import useSiteTitle from "core/hooks/useSiteTitle";
// styles

function ForgetPassword() {
  useSiteTitle("forgot_password");

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter((prevState) => prevState - 1);
      }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  const refForm = useRef();

  const handleCancel = () => {
    history.goBack();
  };

  const handleSubmit = () => {
    const email = refForm.current["email"].value;

    if (!email) {
      setError({
        email: "Email không được bỏ trống",
      });

      refForm.current["email"].focus();
      return;
    } else {
      if (!ValidationEmail(email)) {
        setError({
          email: "Email không hợp lệ",
        });
        refForm.current["email"].focus();
        return;
      }
    }

    forgetAction(email);
  };

  const forgetAction = async (email) => {
    setError({});
    setLoading(true); //disable nút

    setTimeout(() => {
      setLoading(false); //active nút
    }, 60000);

    setCounter(60);

    await axios({
      method: "POST",
      url: API_ENDPOINT + FORGOT_PASSWORD,
      data: {
        email,
      },
    })
      .then((res) => {
        if (res.status === CODE_SUCCESS) {
          console.log(res.data);
        }
      })
      .catch(() => {
        setLoading(false);
        setError({
          email: "Email không được tìm thấy",
        });
      });
  };

  return (
    <>
      <main className="forgetContainer">
        <div className="formContainer">
          <div className="formHeading">
            <h5>Tìm lại mật khẩu của bạn</h5>
          </div>

          <p className="descText">
            Vui lòng nhập email để tìm kiếm tài khoản của bạn.
          </p>

          <form className="formInput" ref={refForm}>
            <TextInput
              label="Email"
              placeHolder="Nhập Email"
              type="text"
              name="email"
              error={error.email}
              typeInput="text"
            />

            <p className="text-warning text-left">
              {loading && "Gửi lại nếu bạn không nhận được mail"}
            </p>

            <div className="wrapperButton">
              <Button
                onClick={handleCancel}
                className="findButton"
                disabled={loading}
              >
                Hủy
              </Button>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={handleSubmit}
                  classStyled="loginBtn"
                  disabled={loading}
                >
                  {loading ? `Gửi lại sau ${counter}s` : "Tìm kiếm"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default ForgetPassword;
