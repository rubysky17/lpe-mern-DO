import axios from "axios";

import { KEY_TOKEN } from "app/const/App";
import {
  API_ENDPOINT,
  BLOG,
  CODE_SUCCESS,
  GET_USER_WITH_TOKEN,
  TOPIC,
  USERS,
} from "app/const/Api";

import { AUTH_LOGIN } from "../constant/authConstant";
import { GET_USER } from "../constant/userConstant";
import { GET_TOPIC } from "../constant/topicConstant";
import { GET_BLOG } from "../constant/blogConstant";

const accessToken = localStorage.getItem(KEY_TOKEN);
const isLogin = Boolean(localStorage.getItem(KEY_TOKEN));

const fetchUserData = new Promise((resolve, reject) => {
  if (isLogin) {
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
});

const fetchAllUser = new Promise((resolve, reject) => {
  if (isLogin) {
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
});

const fetchAllTopic = new Promise((resolve, reject) => {
  axios({
    url: API_ENDPOINT + TOPIC,
    method: "GET",
  })
    .then((response) => {
      if (response.status === CODE_SUCCESS) {
        resolve(response.data.data);
      }
    })
    .catch((error) => {
      reject("error", error);
    });
});

const fetchAllBlog = new Promise((resolve, reject) => {
  axios({
    url: API_ENDPOINT + BLOG,
    method: "GET",
  })
    .then((response) => {
      if (response.status === CODE_SUCCESS) {
        resolve(response.data.data);
      }
    })
    .catch((error) => {
      reject("error", error);
    });
});

export const appAction = (setIsLoading) => {
  return async (dispatch) => {
    Promise.all([fetchUserData])
      .then((response) => {
        dispatch({
          type: AUTH_LOGIN,
          user: response[0], // return info user
        });

        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setIsLoading(false);
      });
  };
};

export const adminAction = (setIsLoading) => {
  return async (dispatch) => {
    // const data = await fetchAllUser();
    Promise.all([fetchAllUser, fetchAllTopic, fetchAllBlog])
      .then((response) => {
        // USER DISPATCH
        dispatch({
          type: GET_USER,
          data: response[0], // return users
        });

        // TOPIC DISPATCH
        dispatch({
          type: GET_TOPIC,
          data: response[1], // return topic
        });

        dispatch({
          type: GET_BLOG,
          data: response[2], // return blog
        });

        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  };
};
