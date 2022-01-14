import React, { useState, useEffect, useRef } from "react";

import LPELoading from "app/components/loading";
import LPEEditor from "app/components/editor";
import { EDITOR_TOOLS_BLOG } from "app/const/tools";

import "./styles/index.scss";

function AddPost() {
  const [isLoading, setIsLoading] = useState(true);
  const refEditor = useRef(null);

  // Loading Data
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handlePostBlog = () => {
    refEditor.current.handleSave();
  };

  const handleGoBack = () => {};

  return (
    <div className="addblog-screen">
      {isLoading ? (
        <LPELoading />
      ) : (
        <div className="row">
          {/* Title of Post */}
          <div className="col-12 lpe-editor-title">
            <input name="title" placeholder="Tiêu đề bài viết" />
          </div>

          <div className="col-12">
            <LPEEditor
              onHandleSubmit={handlePostBlog}
              ref={refEditor}
              tools={EDITOR_TOOLS_BLOG}
              placeholder="Nhập nội dung bài viết"
            />
          </div>

          <div className="fixed-layout">
            <button
              className="btn-addblog btn-addblog-preview"
              onClick={handleGoBack}
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
    </div>
  );
}

export default AddPost;
