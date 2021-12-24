export const API_VERSION = "/v1";

export const API_ENDPOINT = process.env.REACT_APP_BACKEND_URL;
export const SIGN_IN = "/auth/sign-in";
export const SIGN_UP = "/auth/sign-up";
export const FORGOT_PASSWORD = "/auth/forgot-password";
export const VERIFY_REGISTER = "/auth/verify-sign-up";
export const GET_USER_WITH_TOKEN = "/auth/fetch-with-token";
export const VERIFY_FORGET_PASSWORD = "/auth/verify-forgot-password";
export const CHANGE_PASSWORD = "/auth/change-password";
export const CATEGORY = "/category";

// Code status
export const CODE_SUCCESS = 200;
export const CODE_FAILURE = 403;
export const CODE_FAILURE_AUTHENTICATION = 404;
