import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import LPELoading from "app/components/loading";
import LPEEditor from "app/components/editor";
import LPEModal from "app/components/modal";

import PreviewBlog from "./components/preview";
import InputOutside from "./components/outsideBlog";

import { convertBlocksToHtml } from "core/utils/editorUtil";
import { convertStringToSlug } from "core/utils/convertToSlug";

import { EDITOR_TOOLS_BLOG } from "app/const/tools";

import "./styles/index.scss";
import { postBlogAction } from "core/redux/actions/blogAction";

function AddPost() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [rawToHtml, setRawToHtml] = useState([]);
  const [errors, setErrors] = useState([]);
  const refEditor = useRef(null);
  const refModal = useRef(null);
  const refOutside = useRef(null);

  // Loading Data
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handlePostBlog = async () => {
    setErrors("");
    setIsLoadingPost(true);

    const val = await refEditor.current.getBlocks();
    // const html = convertBlocksToHtml(val.blocks);
    const value = refOutside.current.getValue();
    const cover = refOutside.current.getImage();
    console.log("cover", cover);

    if (!cover) {
      setIsLoadingPost(false);

      setErrors("Cover bài viết chưa đúng hoặc chưa tồn tại.");
      return;
    }

    if (!val.blocks.length) {
      setIsLoadingPost(false);

      setErrors("Bài viết chưa có nội dung.");
      return;
    }

    if (!value.title || value.title.length < 0) {
      setIsLoadingPost(false);

      setErrors("Tiêu đề bài viết chưa có.");
      return;
    }

    const stringToSlug = convertStringToSlug(value.title);
    const blocks = JSON.stringify(val.blocks);
    const generate = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 10);

    console.log(generate);

    const formData = new FormData();

    const dataSubmit = {
      topicId: value.topic,
      title: value.title,
      content: blocks,
      url: stringToSlug + "-" + generate,
      blog: cover,
    };

    for (let props in dataSubmit) {
      formData.append(props, dataSubmit[props]);
    }

    dispatch(postBlogAction(formData, setIsLoadingPost));
    setIsLoadingPost(false);
  };

  // Preview Button handler
  const handlePreview = async () => {
    const val = await refEditor.current.getBlocks();
    const html = convertBlocksToHtml(val.blocks);

    setRawToHtml(html);

    refModal.current.handleOpen();
  };

  return (
    <div className="addblog-screen">
      {isLoading ? (
        <LPELoading />
      ) : (
        <div className="row">
          <InputOutside ref={refOutside} errors={errors} />

          <div className="col-12 mt-4">
            <LPEEditor
              onHandleSubmit={handlePostBlog}
              onPreview={handlePreview}
              ref={refEditor}
              tools={EDITOR_TOOLS_BLOG}
              placeholder="Nhập nội dung bài viết"
            />
          </div>

          <div className="fixed-layout">
            <button
              className="btn-addblog btn-addblog-preview"
              onClick={handlePreview}
            >
              Preview
            </button>

            <button
              className="btn-addblog btn-addblog-post"
              onClick={handlePostBlog}
              disabled={isLoadingPost}
            >
              Đăng bài
            </button>
          </div>
        </div>
      )}

      <LPEModal ref={refModal} width={900} height="80vh">
        <PreviewBlog render={rawToHtml} />
      </LPEModal>
    </div>
  );
}

export default AddPost;
