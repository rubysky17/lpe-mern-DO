import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { appAction } from "core/redux/actions/appAction";

import Header from "./layout/header";
import Footer from "./layout/footer";
import LPELoading from "app/components/loading";

import { KEY_TOKEN } from "app/const/App";

export const HomeTemplate = ({ Component, ...restProps }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // FETCH_API_USER
  useEffect(() => {
    setIsLoading(true);

    if (Boolean(localStorage.getItem(KEY_TOKEN))) {
      dispatch(appAction(setIsLoading));

      setIsLoading(false);
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
