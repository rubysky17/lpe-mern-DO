import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { appAction } from "core/redux/actions/appAction";

import Header from "./layout/header";
import Footer from "./layout/footer";
import LPELoading from "app/components/loading";
import { KEY_TOKEN } from "app/const/App";
import { isEmpty } from "core/utils/isEmpty";

export const HomeTemplate = ({ Component, ...restProps }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = localStorage.getItem(KEY_TOKEN);
  const { userInfo } = useSelector((state) => state.auth);

  // FETCH_API_USER
  useEffect(() => {
    if (accessToken !== null || isEmpty(userInfo)) {
      setIsLoading(true);
      dispatch(appAction(setIsLoading));
    } else {
      setIsLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            {isLoading ? <LPELoading /> : <Component {...propsRoute} />}
            <Footer />
          </>
        );
      }}
    />
  );
};
