import React from "react";
import Skeleton from "react-loading-skeleton";

function LoadingSkeletionBlog({ loading, children, ...restProps }) {
  return <>{loading ? <Skeleton {...restProps} /> : children}</>;
}

export default LoadingSkeletionBlog;
