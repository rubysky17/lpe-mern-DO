import axios from "axios";

import { API_ENDPOINT, CREATE_BLOG } from "app/const/Api";
import { KEY_TOKEN } from "app/const/App";
import { showToast } from "core/utils/toastUtil";
import { POST_BLOG } from "../constant/blogConstant";

export const postBlogAction = (data, setIsLoading) => {
  const token = localStorage.getItem(KEY_TOKEN);

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + CREATE_BLOG,
        method: "POST",
        data: data,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          dispatch({
            type: POST_BLOG,
            payload: data,
          });

          setIsLoading(false);

          showToast("success", "Upload bài viết thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);

      showToast("error", "Upload bài viết thất bại", {
        timeout: 5000,
      });
    }
  };
};
