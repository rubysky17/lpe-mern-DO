import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import useSiteTitle from "core/hooks/useSiteTitle";

// Component
import LPELoading from "app/components/loading";
import Appbar from "./components/appBar";
import AdminDrawer from "./components/drawer";

// const and action
import { KEY_TOKEN } from "app/const/App";
import { appAction, adminAction } from "core/redux/actions/appAction";
import { isEmpty } from "core/utils/isEmpty";

import "./styles/styles.scss";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

export const AdminTemplate = ({ Component, ...restProps }) => {
  useSiteTitle("admin");

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = localStorage.getItem(KEY_TOKEN);

  useEffect(() => {
    if (accessToken !== null || isEmpty(userInfo)) {
      setIsLoading(true);
      dispatch(appAction(setIsLoading));
      dispatch(adminAction(setIsLoading));
    } else {
      setIsLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            {accessToken === null || userInfo?.role === "client" ? (
              <Redirect to="/" />
            ) : (
              <>
                {isLoading ? (
                  <LPELoading />
                ) : (
                  <>
                    <Box sx={{ display: "flex" }}>
                      <Appbar
                        isOpen={isOpen}
                        onHandleDrawerOpen={handleDrawerOpen}
                      />

                      <AdminDrawer
                        isOpen={isOpen}
                        onHandleDrawerClose={handleDrawerClose}
                      />

                      <Main open={isOpen}>
                        <DrawerHeader />

                        <Component {...propsRoute} />
                      </Main>
                    </Box>
                  </>
                )}
              </>
            )}
          </>
        );
      }}
    />
  );
};
