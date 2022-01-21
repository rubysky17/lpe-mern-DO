import { GET_TOPIC } from "core/redux/constant/topicConstant";

const initialState = {
  list: [],
};

export const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPIC:
      state.list = action.data;
      return { ...state };

    default:
      return { ...state };
  }
};
