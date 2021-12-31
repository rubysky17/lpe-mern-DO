import { GET_USER } from "core/redux/constant/userConstant";

const initialState = {
  userList: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Lấy dnah sách tất cả người dùng
    case GET_USER:
      state.userList = action.data;
      return { ...state };

    default:
      return { ...state };
  }
};
