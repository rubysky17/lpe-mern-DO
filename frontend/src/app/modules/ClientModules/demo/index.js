import { demoAction } from "core/redux/actions/appAction";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Demo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(demoAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <p>Demo page</p>
    </div>
  );
}

export default Demo;
