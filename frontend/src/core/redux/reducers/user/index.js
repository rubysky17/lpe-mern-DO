import {
  ADD_USER,
  GET_USER,
  UPDATE_USER_IN_LIST,
} from "core/redux/constant/userConstant";

import {
  FETCH_ALL_USER_REQUESTING,
  FETCH_ALL_USER_SUCCESS,
  FETCH_ALL_USER_FAILED,
} from "core/redux/constant/userConstant";

const initialState = {
  userList: [],
  requesting: false,
  success: false,
  message: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH ALL USER LIST
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

    case ADD_USER: {
      const list = [...state.userList];
      list.push(action.user);

      state.userList = list;
      return { ...state };
    }

    // DEMO NEW REDUX
    case FETCH_ALL_USER_REQUESTING: {
      return { ...state, requesting: true };
    }

    case FETCH_ALL_USER_SUCCESS: {
      return {
        ...state,
        requesting: false,
        success: true,
        userList: action.payload,
      };
    }

    case FETCH_ALL_USER_FAILED: {
      return {
        ...state,
        requesting: false,
        success: false,
        message: action.message,
      };
    }

    default:
      return { ...state };
  }
};
