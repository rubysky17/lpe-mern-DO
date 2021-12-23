import {
  API_ENDPOINT,
  CHANGE_PASSWORD,
  CODE_FAILURE_AUTHENTICATION,
  CODE_SUCCESS,
  SIGN_IN,
  SIGN_UP,
} from "app/const/Api";

import axios from "axios";
import { showToast } from "core/utils/toastUtil";
import { AUTH_LOGIN, LOGOUT_ACCOUNT } from "../constant/authConstant";

/**
 *
 * @param {*} data : Data gửi lên cho server
 * @param {*} setLoading : loading nút đăng nhập
 * @param {*} setError : Thông báo lỗi về client nếu có lỗi
 * @returns
 */
export const loginAction = (data, setLoading, setError, history) => {
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + SIGN_IN,
        method: "POST",
        data,
      })
        .then((response) => {
          if (response.status === CODE_SUCCESS) {
            // Get data của user từ phía client
            const { userLogin, token } = response.data;

            // Dispatch action lên redux
            dispatch({
              type: AUTH_LOGIN,
              user: userLogin,
            });

            // Lưu accessToken xuống LocalStorage
            localStorage.setItem("accessToken", token);

            setLoading(false);

            history.push("/");
          }
        })
        .catch((error) => {
          console.log("error", error);
          setError({ email: "Email hoặc mật khẩu bạn nhập không đúng" });
          setLoading(false);
        });
    } catch (error) {
      if (error.status === CODE_FAILURE_AUTHENTICATION) {
        setError({ email: "Email hoặc mật khẩu bạn nhập không đúng" });
        setLoading(false);
      }

      console.log("error", error);
    }
  };
};

/**
 *
 * @param {*} data dữ liệu từ người dùng gửi lên
 * @param {*} setIsLoading set loading nút đăng ký
 * @param {*} setError hiển thị lỗi về client
 * @returns
 */

export const registerAction = (data, setLoading, setError) => {
  return async () => {
    // This action dont use dispatch to redux
    try {
      await axios({
        method: "POST",
        url: API_ENDPOINT + SIGN_UP,
        data,
      }).then((response) => {
        if (response.status === CODE_SUCCESS) {
          setLoading(false);
        }
      });
    } catch (error) {
      setError("Email đã tồn tại");
      setLoading(false);
      console.log(error);
    }
  };
};

export const changePasswordAction = (data, setIsLoading, setErrors) => {
  return async () => {
    // This action dont use dispatch to redux
    try {
      await axios({
        method: "POST",
        url: API_ENDPOINT + CHANGE_PASSWORD,
        data,
      }).then((response) => {
        setIsLoading(false);

        showToast("success", "Cập nhật mật khẩu thành công", {
          timeout: 5000,
        });
      });
    } catch (error) {
      showToast("error", "Cập nhật mật khẩu thất bại", {
        timeout: 5000,
      });

      setIsLoading(false);
      console.log(error);
    }
  };
};

export const logOutAction = (history) => {
  return async (dispatch) => {
    // This action dont use dispatch to redux
    dispatch({
      type: LOGOUT_ACCOUNT,
    });
    history.push("/dang-nhap");
  };
};
