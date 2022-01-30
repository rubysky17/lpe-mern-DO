import React, { useEffect, useState } from "react";
import axios from "axios";
import useSiteTitle from "core/hooks/useSiteTitle";
import ItemList from "./components/itemList";

import { API_ENDPOINT, BLOG } from "app/const/Api";

import "./styles/styles.scss";

function BlogList() {
  useSiteTitle("blog_page");

  const [blogList, setBlogList] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const getBlogList = (page) => {
    setisLoading(true);
    // const limit = 20;
    // const offset = page === 0 ? limit : (page - 1) * limit;

    axios({
      url: API_ENDPOINT + BLOG,
      method: "GET",
    })
      .then((response) => {
        setisLoading(false);
        setBlogList(response.data.data);
      })
      .catch((error) => {
        setisLoading(false);
        console.log("error", error);
      });
  };

  useEffect(() => {
    getBlogList();
  }, []);

  return (
    <div className="lpe-blog-screen container-fluid container-lg py-5">
      {/* Fixed category */}

      {/* list blog render with category */}
      <ItemList data={blogList} loading={isLoading} />
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
