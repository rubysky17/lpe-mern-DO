import {
  API_ENDPOINT,
  CHANGE_PASSWORD,
  CODE_SUCCESS,
  SIGN_IN,
  SIGN_UP,
} from "app/const/Api";
import { KEY_TOKEN } from "app/const/App";

import axios from "axios";
import { showToast } from "core/utils/toastUtil";
import {
  LOGIN_FAILED,
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGOUT_ACCOUNT,
} from "../constant/authConstant";

/**
 *  Đăng nhập
 * @param {*} data email, password
 */
export const loginAction = (data) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_REQUESTING,
    });
    try {
      await axios({
        url: API_ENDPOINT + SIGN_IN,
        method: "POST",
        data,
      }).then((response) => {
        if (response.status === CODE_SUCCESS) {
          // Get data của user từ phía client
          const { userLogin, token } = response.data;

          // Dispatch action lên redux
          dispatch({
            type: LOGIN_SUCCESS,
            payload: userLogin,
          });

          // Lưu accessToken xuống LocalStorage
          localStorage.setItem(KEY_TOKEN, token);

          window.location.reload();
        }
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED,
        payload: "Email hoặc mật khẩu bạn nhập không đúng",
      });

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
