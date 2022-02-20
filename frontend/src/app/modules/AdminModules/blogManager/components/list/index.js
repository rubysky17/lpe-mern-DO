import React from "react";
import BlogItem from "../item";

function BlogList({ list }) {
  return (
    <>
      {list && (
        <div className="row">
          {list?.map((item, index) => {
            return (
              <div className="col-3 mt-4" key={index}>
                <BlogItem item={item} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default BlogList;
