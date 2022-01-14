import React, { useEffect, useState } from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import ItemList from "./components/itemList";
import { DATA_BLOG_SAMPLE } from "./data";

import "./styles/styles.scss";

function BlogList() {
  useSiteTitle("blog_page");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="lpe-blog-screen container-fluid container-lg py-5">
      {/* Fixed category */}

      {/* list blog render with category */}
      <ItemList data={DATA_BLOG_SAMPLE} loading={isLoading} />
      {/* <LoadingSkeletionBlog
        loading={!isLoading}
        count={4}
        style={{ height: 300, margin: "10px 0px" }}
      >
        <ItemList data={DATA_BLOG_SAMPLE} loading={!isLoading} />
      </LoadingSkeletionBlog> */}
    </div>
  );
}

export default BlogList;
