import React from "react";
import { Route, Redirect } from "react-router-dom";
import { KEY_TOKEN } from "app/const/App";
import Header from "../homeTemplate/layout/header";
import Footer from "../homeTemplate/layout/footer";
import { useDispatch } from "react-redux";
import { appAction } from "core/redux/actions/appAction";
import LPELoading from "app/components/loading";

export const PrivateTemplate = ({ Component, ...restProps }) => {
  const token = localStorage.getItem(KEY_TOKEN);
  const isLogin = Boolean(token);
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();

  // FETCH_API_USER
  React.useEffect(() => {
    if (isLogin) {
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
            {isLogin ? (
              <>
                <Header />
                {isLoading ? <LPELoading /> : <Component {...propsRoute} />}
                <Footer />
              </>
            ) : (
              <Redirect to="/dang-nhap" />
            )}
          </>
        );
      }}
    />
  );
};
