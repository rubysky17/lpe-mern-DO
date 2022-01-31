import React from "react";
import Skeleton from "react-loading-skeleton";
import LPESecondaryBlog from "../secondaryBlog";
import LPEPrimaryBlog from "../primaryBlog";
import LoadingSkeletionBlog from "../skeletonBlog";

function ItemList({ loading, data }) {
  return (
    <>
      <h1 className="blog-topic">
        {loading ? <Skeleton width={200} height={70} /> : "Xin chào bạn"}
      </h1>

      <div className="row blog-list">
        {loading ? (
          <LoadingSkeletionBlog />
        ) : (
          <>
            {data.map((blog, index) => {
              return (
                <>
                  {index > 1 ? (
                    <LPESecondaryBlog data={blog} key={index} />
                  ) : (
                    <LPEPrimaryBlog data={blog} key={index} />
                  )}
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default ItemList;
