import {
  GET_USER,
  UPDATE_USER_IN_LIST,
} from "core/redux/constant/userConstant";

const initialState = {
  userList: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Lấy dnah sách tất cả người dùng
    case GET_USER:
      state.userList = action.data;
      return { ...state };

    case UPDATE_USER_IN_LIST: {
      const list = [...state.userList];

      const itemIndex = list.findIndex((y) => y._id === action.id);

      if (itemIndex !== -1) {
        list[itemIndex] = { ...list[itemIndex], ...action.userUpdate };
      }

      state.userList = list;

      return { ...state };
    }

    default:
      return { ...state };
  }
};
