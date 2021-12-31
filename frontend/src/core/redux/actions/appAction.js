import axios from "axios";
import {
  API_ENDPOINT,
  CODE_SUCCESS,
  GET_USER_WITH_TOKEN,
  USERS,
} from "app/const/Api";
import { KEY_TOKEN } from "app/const/App";
import { AUTH_LOGIN } from "../constant/authConstant";
import { GET_USER } from "../constant/userConstant";

const fetchUserData = () =>
  new Promise((resolve, reject) => {
    const accessToken = localStorage.getItem(KEY_TOKEN);

    if (!!accessToken.length) {
      axios({
        url: API_ENDPOINT + GET_USER_WITH_TOKEN,
        method: "POST",
        data: {
          token: accessToken,
        },
      })
        .then((response) => {
          if (response.status === CODE_SUCCESS) {
            resolve(response.data.data);
          }
        })
        .catch((error) => {
          reject("error", error);
        });
    }
    return;
  });

const fetchAllUser = () =>
  new Promise((resolve, reject) => {
    const accessToken = localStorage.getItem(KEY_TOKEN);

    if (!!accessToken.length) {
      axios({
        url: API_ENDPOINT + USERS,
        method: "GET",
        headers: {
          token: `${accessToken}`,
        },
      })
        .then((response) => {
          if (response.status === CODE_SUCCESS) {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject("error", error);
        });
    }
    return;
  });

export const appAction = (setIsLoading) => {
  return async (dispatch) => {
    try {
      const data = await fetchUserData();

      dispatch({
        type: AUTH_LOGIN,
        user: data,
      });

      setIsLoading(false);
    } catch (error) {
      console.log("error", error);

      setIsLoading(false);
    }
  };
};

export const adminAction = (setIsLoading) => {
  return async (dispatch) => {
    try {
      const data = await fetchAllUser();
      dispatch({
        type: GET_USER,
        data: data,
      });

      setIsLoading(false);
    } catch (error) {
      console.log("error", error);

      setIsLoading(false);
    }
  };
};
