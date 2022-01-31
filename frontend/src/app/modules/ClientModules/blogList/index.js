import React, { useEffect, useState } from "react";
import axios from "axios";
import useSiteTitle from "core/hooks/useSiteTitle";
import ItemList from "./components/itemList";

import { API_ENDPOINT, BLOG } from "app/const/Api";

import "./styles/styles.scss";

function BlogList() {
  useSiteTitle("blog_page");

  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBlogList = (page) => {
    setIsLoading(true);
    // const limit = 20;
    // const offset = page === 0 ? limit : (page - 1) * limit;

    axios({
      url: API_ENDPOINT + BLOG,
      method: "GET",
    })
      .then((response) => {
        setIsLoading(false);
        setBlogList(response.data.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("error", error);
      });
  };

  useEffect(() => {
    getBlogList();
  }, []);

  return (
    <div className="lpe-blog-screen container-fluid container-lg py-5">
      <ItemList data={blogList} loading={isLoading} />
    </div>
  );
}

export default BlogList;
