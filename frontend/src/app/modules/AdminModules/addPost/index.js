import React, { useState, useEffect, useRef } from "react";

import LPELoading from "app/components/loading";
import LPEEditor from "app/components/editor";
import LPEModal from "app/components/modal";

import PreviewBlog from "./components/preview";
import InputOutside from "./components/outsideBlog";

import { convertBlocksToHtml } from "core/utils/editorUtil";
import { convertStringToSlug } from "core/utils/convertToSlug";

import { EDITOR_TOOLS_BLOG } from "app/const/tools";

import "./styles/index.scss";

function AddPost() {
  const [isLoading, setIsLoading] = useState(true);
  const [rawToHtml, setRawToHtml] = useState([]);
  const [errors, setErrors] = useState({});
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
    const val = await refEditor.current.getBlocks();
    const html = convertBlocksToHtml(val.blocks);

    // const stringToSlug = convertStringToSlug(refHeading.current.value);

    // console.log({ stringToSlug });
  };

  // Preview Button handler
  const handlePreview = async () => {
    const val = await refEditor.current.getBlocks();
    const html = convertBlocksToHtml(val.blocks);

    console.log("html", val);

    setRawToHtml(html);

    refModal.current.handleOpen();
  };

  return (
    <div className="addblog-screen">
      {isLoading ? (
        <LPELoading />
      ) : (
        <div className="row">
          <InputOutside refs={refOutside} errors={errors} />

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
            >
              Đăng bài
            </button>
          </div>
        </div>
      )}

      <LPEModal ref={refModal}>
        <PreviewBlog render={rawToHtml} />
      </LPEModal>
    </div>
  );
}

export default AddPost;
