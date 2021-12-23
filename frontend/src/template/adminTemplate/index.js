import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useSiteTitle from "core/hooks/useSiteTitle";

// Component
import LPELoading from "app/components/loading";
import Appbar from "./components/appBar";
import AdminDrawer from "./components/drawer";

// const and action
import { KEY_TOKEN } from "app/const/App";
import { appAction } from "core/redux/actions/appAction";
import { isEmpty } from "core/utils/isEmpty";

export const AdminTemplate = ({ Component, ...restProps }) => {
  useSiteTitle("admin");

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const accessToken = localStorage.getItem(KEY_TOKEN);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (accessToken !== null || isEmpty(userInfo)) {
      setIsLoading(true);
      dispatch(appAction(setIsLoading));
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
                    <Appbar
                      isOpen={isOpen}
                      onHandleDrawerOpen={handleDrawerOpen}
                    />

                    <AdminDrawer
                      isOpen={isOpen}
                      onHandleDrawerClose={handleDrawerClose}
                    />

                    <Component {...propsRoute} />
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
