import { KEY_TOKEN } from "app/const/App";

import {
  DELETE_AVATAR,
  GET_USER_INFO,
  LOGIN_FAILED,
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGOUT_ACCOUNT,
  UPDATE_AVATAR,
  UPDATE_USER,
} from "core/redux/constant/authConstant";

const initialState = {
  loading: false,
  userInfo: {},
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Đăng xuất
    case LOGOUT_ACCOUNT:
      localStorage.removeItem(KEY_TOKEN);

      state.userInfo = {};
      return { ...state };

    // lấy thông tin người dùng đăng nhập
    case GET_USER_INFO:
      state.userInfo = action.userInfo;

      return { ...state };

    // cập nhật hình ảnh đại diện
    case UPDATE_AVATAR: {
      // Clone object from initial state
      const result = { ...state.userInfo };
      // update avatar
      result.avatar = action.avatar;
      // remake userInfo
      state.userInfo = result;

      return { ...state };
    }

    // xóa ảnh đại diện
    case DELETE_AVATAR: {
      // Clone object from initial state
      const result = { ...state.userInfo, avatar: "" };

      // remake userInfo
      state.userInfo = result;

      return { ...state };
    }

    // cập nhật thông tin khách hàng
    case UPDATE_USER: {
      const result = { ...state.userInfo, ...action.userUpdate };

      state.userInfo = result;

      return { ...state };
    }
    // -----------------------------------------------------------
    case LOGIN_REQUESTING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
        userInfo: action.payload,
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return { ...state };
  }
};
