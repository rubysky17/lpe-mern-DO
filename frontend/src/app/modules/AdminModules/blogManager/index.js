import React from "react";
import { useSelector } from "react-redux";
import BlogList from "./components/list";

function BlogsManager() {
  const { list } = useSelector((state) => state.blog);

  return <BlogList list={list} />;
}

export default BlogsManager;
