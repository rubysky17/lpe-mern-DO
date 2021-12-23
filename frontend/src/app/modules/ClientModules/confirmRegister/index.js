import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_ENDPOINT, VERIFY_REGISTER } from "app/const/Api";
import useSiteTitle from "core/hooks/useSiteTitle";
import { useParams } from "react-router-dom";
import LPEButton from "app/components/button";

import "./styles/styles.scss";

function ConfirmRegister() {
  useSiteTitle("confirm_register");
  let { token } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios({
      method: "post",
      url: API_ENDPOINT + VERIFY_REGISTER,
      data: {
        token: token,
      },
    })
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [token]);

  return (
    <>
      <main className="forgetContainer">
        {isLoading ? (
          "Đang tải"
        ) : (
          <div className="formContainerForget">
            <div className="formHeading">
              <h5>Tạo tài khoản thành công</h5>
            </div>

            <p className="descText">Tài khoản của bạn đã được xác thực</p>

            <p className="descText">
              Giờ đây bạn có thể đăng nhập và sử dụng tài khoản.
            </p>

            <div className="formInput">
              <LPEButton
                name="Đăng nhập"
                classStyled="confirmBtn"
                // action={() => {
                //   router.push("/dang-nhap");
                // }}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default ConfirmRegister;
