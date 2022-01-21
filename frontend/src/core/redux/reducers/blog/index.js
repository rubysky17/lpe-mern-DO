import { GET_BLOG, POST_BLOG } from "core/redux/constant/blogConstant";

const initialState = {
  list: [],
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

    default:
      return { ...state };
  }
};
