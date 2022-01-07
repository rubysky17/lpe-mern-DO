import Client from "app/modules/ClientModules";
import Admin from "app/modules/AdminModules";
import { OFFLINE_PATH_CLIENT } from "./routes-coursesoffline";
import { ONLINE_PATH_CLIENT } from "./routes-coursesonline";

// PATH FOR MODULES CLIENT
export const URL_PATH_CLIENT = {
  HOME: "/",
  LOGIN: "/dang-nhap",
  REGISTER: "/dang-ky",
  ACCOUNT_DETAIL: "/thong-tin-tai-khoan/:screen",
  MRVAS: "/lpe/mr-vas",
  MSLAHAGIANGTHANH: "/lpe/ms-la-ha-giang-thanh",
  VISIONANDMISSION: "/lpe/tam-nhin-su-menh-lpe",
  RULES: "/lpe/noi-quy-quy-dinh",
  COURSE: "/chuong-trinh-huan-luyen",
  COURSEMEDIA: "/chuong-trinh-huan-luyen/media",
  RECRUITMENT: "/lpe/tuyen-dung",
  COURSEONLINE: "/chuong-trinh-huan-luyen/online",
  COURSEOFFLINE: "/chuong-trinh-huan-luyen/offline",
  CONFIRMREGISTER: "/xac-nhan-dang-ky/:token",
  CONFIRMFORGOTPASSWORD: "/xac-nhan-quen-mat-khau/:token",
  FORGOTPASSWORD: "/quen-mat-khau",
};

// PATH FOR MODULES ADMIN
export const URL_PATH_ADMIN = {
  HOME: "/",
  USER_MANAGER: "/quan-ly-nguoi-dung",
  PRODUCT_MANAGER: "/quan-ly-san-pham",
  ADD_USER: "/them-nguoi-dung",
};

// Public Pages for HOME Template
export const publicRoutes = [
  {
    component: Client.Home,
    exact: true,
    path: URL_PATH_CLIENT.HOME,
  },
  {
    component: Client.Login,
    exact: true,
    path: URL_PATH_CLIENT.LOGIN,
  },
  {
    component: Client.MrVas,
    exact: true,
    path: URL_PATH_CLIENT.MRVAS,
  },
  {
    component: Client.MsLaHaGiangThanh,
    exact: true,
    path: URL_PATH_CLIENT.MSLAHAGIANGTHANH,
  },
  {
    component: Client.VisionPage,
    exact: true,
    path: URL_PATH_CLIENT.VISIONANDMISSION,
  },
  {
    component: Client.Rules,
    exact: true,
    path: URL_PATH_CLIENT.RULES,
  },
  {
    component: Client.Course,
    exact: true,
    path: URL_PATH_CLIENT.COURSE,
  },
  {
    component: Client.CourseOnline,
    exact: true,
    path: URL_PATH_CLIENT.COURSEONLINE,
  },
  {
    component: Client.CourseOffline,
    exact: true,
    path: URL_PATH_CLIENT.COURSEOFFLINE,
  },
  {
    component: Client.CourseOfflinePP,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa1,
  },
  {
    component: Client.CourseOfflinePR,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa2,
  },
  {
    component: Client.CourseOfflineIYL,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa3,
  },
  {
    component: Client.CourseOfflinePH,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa4,
  },
  {
    component: Client.CourseOfflineMOE,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa5,
  },
  {
    component: Client.CourseOfflineCOA,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa6,
  },
  {
    component: Client.CourseOfflineBAV,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa7,
  },
  {
    component: Client.CourseOfflineLEADERSHIP,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa8,
  },
  {
    component: Client.CourseOfflineIDENTITY,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa9,
  },
  {
    component: Client.CourseOfflineGRADUATE,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa10,
  },
  {
    component: Client.CourseOfflineOAC,
    exact: true,
    path: OFFLINE_PATH_CLIENT.OAC,
  },
  {
    component: Client.CourseOfflineLTC,
    exact: true,
    path: OFFLINE_PATH_CLIENT.LTC,
  },
  {
    component: Client.CourseOfflinePAR,
    exact: true,
    path: OFFLINE_PATH_CLIENT.PAR,
  },
  {
    component: Client.CourseOnlineRUNFASTER,
    exact: true,
    path: ONLINE_PATH_CLIENT.RUNFASTER,
  },
  {
    component: Client.CourseOnlineCCS,
    exact: true,
    path: ONLINE_PATH_CLIENT.CCS,
  },
  {
    component: Client.CourseOnlineRFREGISTER,
    exact: true,
    path: ONLINE_PATH_CLIENT.RFREGISTER,
  },
  {
    component: Client.CourseOnlineBFW,
    exact: true,
    path: ONLINE_PATH_CLIENT.BFW,
  },
  {
    component: Client.CourseOnlineVL,
    exact: true,
    path: ONLINE_PATH_CLIENT.VL,
  },
  {
    component: Client.CourseOnlineISB,
    exact: true,
    path: ONLINE_PATH_CLIENT.ISB,
  },
  {
    component: Client.CourseOnlineISBREGISTER,
    exact: true,
    path: ONLINE_PATH_CLIENT.ISBREGISTER,
  },
  {
    component: Client.CourseMedia,
    exact: true,
    path: URL_PATH_CLIENT.COURSEMEDIA,
  },
  {
    component: Client.Register,
    exact: true,
    path: URL_PATH_CLIENT.REGISTER,
  },

  {
    component: Client.Recruitment,
    exact: true,
    path: URL_PATH_CLIENT.RECRUITMENT,
  },
  {
    component: Client.ConfirmRegister,
    exact: true,
    path: URL_PATH_CLIENT.CONFIRMREGISTER,
  },
  {
    component: Client.VerifyForgotPassword,
    exact: true,
    path: URL_PATH_CLIENT.CONFIRMFORGOTPASSWORD,
  },
  {
    component: Client.ForgotPassword,
    exact: true,
    path: URL_PATH_CLIENT.FORGOTPASSWORD,
  },
];

// Private Pages for HOME Template
export const privateRoutes = [
  {
    component: Client.AccountDetail,
    exact: true,
    path: URL_PATH_CLIENT.ACCOUNT_DETAIL,
  },
];

// Only for Admin Pages
export const adminRoutes = [
  {
    component: Admin.Home,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.HOME,
  },
  {
    component: Admin.UserManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.USER_MANAGER,
  },
  {
    component: Admin.ProductsManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.PRODUCT_MANAGER,
  },
  {
    component: Admin.AddUser,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.ADD_USER,
  },
];
