import { KEY_TOKEN } from "app/const/App";
import { AUTH_LOGIN, LOGOUT_ACCOUNT } from "core/redux/constant/authConstant";

const initialState = {
  userInfo: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      state.userInfo = action.user;
      return { ...state };

    case LOGOUT_ACCOUNT:
      localStorage.removeItem(KEY_TOKEN);

      state.userInfo = {};
      return { ...state };

    default:
      return { ...state };
  }
};
