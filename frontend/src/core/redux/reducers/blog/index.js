import {
  FETCH_ALL_BLOG_REQUESTING,
  FETCH_ALL_BLOG_SUCCESS,
  FETCH_ALL_BLOG_FAILED,
  GET_BLOG,
  POST_BLOG,
} from "core/redux/constant/blogConstant";

const initialState = {
  list: [],
  requesting: false,
  success: false,
  message: null,
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG:
      state.list = action.data;

      return { ...state };

    case POST_BLOG:
      const newList = [...state.list];

      newList.push(action.data);

      state.list = newList;
      return { ...state };

    case FETCH_ALL_BLOG_REQUESTING: {
      return { ...state, requesting: true };
    }
    case FETCH_ALL_BLOG_SUCCESS: {
      return { ...state };
    }
    case FETCH_ALL_BLOG_FAILED: {
      return { ...state };
    }

    default:
      return { ...state };
  }
};
