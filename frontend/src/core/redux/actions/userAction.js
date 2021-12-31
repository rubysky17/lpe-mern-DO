import axios from "axios";

import {
  API_ENDPOINT,
  REMOVE_AVATAR,
  UPLOAD_AVATAR,
  USERS,
} from "app/const/Api";

import {
  DELETE_AVATAR,
  GET_IP_LOCAL,
  GET_USER_INFO,
  UPDATE_AVATAR,
  UPDATE_USER,
} from "../constant/userConstant";

import { showToast } from "core/utils/toastUtil";
import { KEY_TOKEN } from "app/const/App";

export const getIpLocalAction = () => {
  return (dispatch) => {
    try {
      axios({
        url: "https://api.ipify.org",
        method: "get",
      })
        .then((res) => {
          dispatch({
            type: GET_IP_LOCAL,
            ip: res.data,
          });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const getUserInfoAction = (id) => {
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + USERS + `${id}`,
        method: "GET",
      })
        .then((res) => {
          dispatch({
            type: GET_USER_INFO,
            userInfo: res.data,
          });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateAvatarAction = (formData, setLoadingImage) => {
  const token = localStorage.getItem(KEY_TOKEN);

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + UPLOAD_AVATAR,
        method: "POST",
        data: formData,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          setLoadingImage(false);

          dispatch({
            type: UPDATE_AVATAR,
            avatar: res.data.data,
          });

          showToast("success", "Cập nhật hình ảnh thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          setLoadingImage(false);

          showToast("error", "Không thể cập nhật hình ảnh", {
            timeout: 5000,
          });
        });
    } catch (error) {
      setLoadingImage(false);

      showToast("error", "Không thể cập nhật hình ảnh", {
        timeout: 5000,
      });
    }
  };
};

export const deleteAvatarAction = (filename, setLoadingImage) => {
  const token = localStorage.getItem(KEY_TOKEN);

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + REMOVE_AVATAR,
        method: "POST",
        data: {
          filename,
        },
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          dispatch({
            type: DELETE_AVATAR,
            avatar: res.data,
          });

          setLoadingImage(false);
          showToast("success", "Xóa thành công!", {
            timeout: 5000,
          });
        })
        .catch((err) => console.log(err.response.data));
    } catch (error) {
      setLoadingImage(false);

      showToast("error", "Xóa thất bại!", {
        timeout: 5000,
      });
      console.log("error", error);
    }
  };
};

export const updateUserAction = (id, dataUpdate, setIsLoading) => {
  const token = localStorage.getItem(KEY_TOKEN);

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + USERS + `${id}`,
        method: "PUT",
        data: dataUpdate,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          dispatch({
            type: UPDATE_USER,
            userUpdate: dataUpdate,
          });

          setIsLoading(false);

          showToast("success", "Cập nhật thông tin thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);

      showToast("error", "Cập nhật thông tin thất bại", {
        timeout: 5000,
      });
    }
  };
};
