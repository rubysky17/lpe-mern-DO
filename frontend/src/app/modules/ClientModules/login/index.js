import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useSiteTitle from "core/hooks/useSiteTitle";

// Component from project
import LPEButton from "app/components/button";
import TextInput from "app/components/textInput";

// util file
import { ValidationEmail } from "core/utils/emailUtil";
import withAuth from "core/hooks/useAuth";

import { loginAction } from "core/redux/actions/authAction";

import "./styles/styles.scss";

function Login() {
  useSiteTitle("login");
  console.log("env", process.env.REACT_APP_BACKEND_URL);

  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const refForm = useRef(null);
  const history = useHistory();

  const handleLogin = () => {
    const email = refForm.current["email"].value;
    const password = refForm.current["password"].value;

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

    if (!password) {
      setError({
        password: "Mật khẩu không được bỏ trống",
      });
      refForm.current["password"].focus();
      return;
    }

    const dataSubmit = {
      email,
      password,
    };

    handleSubmit(dataSubmit);
  };

  const handleSubmit = (data) => {
    dispatch(loginAction(data, setLoading, setError, history));
    setLoading(true);
  };

  return (
    <div className="loginContainer">
      <div className="formContainer">
        <h3 className="text-center pt-3 text-secondary">Đăng nhập</h3>

        <form
          ref={refForm}
          style={{
            width: "330px",
          }}
        >
          <TextInput
            label="Email"
            placeHolder="Nhập Email"
            type="text"
            name="email"
            error={error.email}
            typeInput="text"
          />

          <TextInput
            label="Mật khẩu"
            placeHolder="Nhập mật khẩu tài khoản"
            type="password"
            name="password"
            error={error.password}
            typeInput="text"
          />
        </form>

        <LPEButton
          action={handleLogin}
          name="Đăng nhập"
          loading={loading}
          fullWidth
          sizeButton="large"
          classStyled="loginBtn"
        />

        <Link
          to="/quen-mat-khau"
          className="forgetPassword"
          style={{
            marginTop: "20px",
          }}
        >
          Quên mật khẩu?
        </Link>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/dang-ky" className="createButton">
            Tạo tài khoản mới
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Login);
