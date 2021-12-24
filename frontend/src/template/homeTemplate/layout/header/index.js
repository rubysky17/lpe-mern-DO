import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import i18next from "i18next";

import { CONTENT_MENU } from "app/const/Header";
import { isEmpty } from "core/utils/isEmpty";
import LoginButton from "app/components/loginButton";

import LPEAvatar from "app/components/avatar";
import LPEPopover from "app/components/popover";

import ENIcon from "assets/images/en-icon.png";
import VNIcon from "assets/images/vn-icon.png";
import BurgerIcon from "assets/images/menuOption.png";

import LPEDrawer from "app/components/drawer";
import SidebarHeader from "./components/sidebar";

import { logOutAction } from "core/redux/actions/authAction";

// media file
import logo from "assets/images/source/lpe-nlp-logo.png";

import "./styles/styles.scss";

const useStyles = makeStyles(() => ({
  btnPopOver: {
    padding: "10px 20px!important",
    fontWeight: "bold!important",
    fontFamily: "product-sans",
    color: "#333!important",
    width: "100%",
    "&:hover": {
      color: "#fff!important",
      backgroundColor: "black!important",
    },
  },
}));

function LPEHeader() {
  const { userInfo } = useSelector((state) => state.auth);
  const history = useHistory();
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const classes = useStyles();
  const refLogin = useRef();
  const refLanguages = useRef();
  const anchor = { vertical: "bottom", horizontal: "right" };
  const transfrom = { vertical: "top", horizontal: "right" };
  const locale = localStorage.getItem("i18nextLng");
  const token = localStorage.getItem("accessToken");
  const [state, setState] = useState({
    top: false,
    right: false,
  });

  const logOut = () => {
    dispatch(logOutAction(history));
  };

  const PopOverContent = () => {
    return (
      <div className="popOver">
        <Link to="/thong-tin-tai-khoan/ho-so">
          <Button
            className={classes.btnPopOver}
            onClick={() => {
              refLogin.current.handleCloseClick();
            }}
          >
            {t("account_info")}
          </Button>
        </Link>

        {userInfo.role === "admin" && (
          <Link to="/admin">
            <Button
              className={classes.btnPopOver}
              onClick={() => {
                refLogin.current.handleCloseClick();
              }}
            >
              {t("admin")}
            </Button>
          </Link>
        )}

        <Button
          className={classes.btnPopOver}
          onClick={() => {
            logOut();
          }}
        >
          {t("logout")}
        </Button>
      </div>
    );
  };

  const PopOverTranslation = () => {
    return (
      <div className="contentTranslationPopover">
        <img
          className="img-fluid"
          src={VNIcon}
          alt={VNIcon}
          onClick={() => {
            handleChangeLanguage("vn-VN");
          }}
        />
        <img
          className="img-fluid"
          src={ENIcon}
          alt={ENIcon}
          onClick={() => {
            handleChangeLanguage("en-EN");
          }}
        />
      </div>
    );
  };

  const renderDropdownChildren = (data) => {
    return (
      <ul>
        {data?.map((child, index) => {
          return (
            <li key={index}>
              <Link to={child.url}>{t(child.title).toLocaleUpperCase()}</Link>

              {child.childMenu && renderDropdownChildren(child.childMenu)}
            </li>
          );
        })}
      </ul>
    );
  };

  const handleChangeLanguage = (lang) => {
    const currentLng = localStorage.getItem("i18nextLng");

    currentLng !== lang && i18next.changeLanguage(lang);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <Container maxWidth="lg">
      <AppBar>
        <Toolbar className="headerContent">
          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt={logo} className="imgLogo" />
          </Link>

          <ul className="header-dropdown">
            {CONTENT_MENU?.map((ele, index) => {
              return (
                <li key={index}>
                  <Link to={ele.url}>{t(ele.title).toLocaleUpperCase()}</Link>

                  {ele.childMenu && renderDropdownChildren(ele.childMenu)}
                </li>
              );
            })}
          </ul>

          <div className="appLeftLg">
            {/* <Link to="/gio-hang">
              <i className="fas fa-shopping-cart cartIcon"></i>
            </Link> */}

            {/* <div
              className={styles.searchIcon}
              onClick={toggleDrawer("top", true)}
            >
              <i className="fas fa-search"></i>
            </div> */}

            {token?.length ? (
              <>
                {!isEmpty(userInfo) && (
                  <LPEAvatar
                    name={userInfo?.name}
                    avatar={userInfo?.avatar}
                    action={(e) => {
                      refLogin.current.handleClick(e);
                    }}
                  />
                )}

                <LPEPopover
                  ref={refLogin}
                  anchor={anchor}
                  transfrom={transfrom}
                  content={<PopOverContent />}
                />
              </>
            ) : (
              // Button Đăng nhập
              <LoginButton />
            )}

            <div className="contentTranslation">
              <img
                src={locale === "en-EN" ? ENIcon : VNIcon}
                alt={locale === "en-EN" ? ENIcon : VNIcon}
                onClick={(e) => {
                  refLanguages.current.handleClick(e);
                }}
              />
            </div>
          </div>

          <div className="appLeftSm">
            {/* <Link to="/gio-hang">
              <i className="fas fa-shopping-cart cartIcon"></i>
            </Link> */}

            {/* <div
              className={styles.searchIcon}
              onClick={toggleDrawer("top", true)}
            >
              <i className="fas fa-search"></i>
            </div> */}

            <div className="contentTranslation">
              <img
                src={locale === "en-EN" ? ENIcon : VNIcon}
                alt={locale === "en-EN" ? ENIcon : VNIcon}
                // className={styles.button}
                onClick={(e) => {
                  refLanguages.current.handleClick(e);
                }}
              />
            </div>

            <img
              src={BurgerIcon}
              alt={BurgerIcon}
              onClick={toggleDrawer("right", true)}
              style={{
                width: "20px",
                height: "20px",
                marginLeft: "10px",
              }}
            />
          </div>

          {/* Drawer mobile menu */}
          <LPEDrawer
            anchor="right"
            isOpen={state["right"]}
            onToggle={toggleDrawer}
            disableScrollLock
          >
            <SidebarHeader
              onToggle={toggleDrawer}
              menuContent={CONTENT_MENU}
              userInfo={userInfo}
            />
          </LPEDrawer>
        </Toolbar>
      </AppBar>

      <LPEPopover
        ref={refLanguages}
        anchor={anchor}
        transfrom={transfrom}
        content={<PopOverTranslation />}
      />

      <Toolbar id="back-to-top-anchor" />
    </Container>
  );
}

export default LPEHeader;
