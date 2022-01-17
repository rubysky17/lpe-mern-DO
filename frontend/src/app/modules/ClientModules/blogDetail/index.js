import { convertBlocksToHtml } from "core/utils/editorUtil";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles/index.scss";

const demo_blocks = [];

function BlogDetail() {
  const [blocks, setBlocks] = useState([]);

  // Convert blocks to html
  useEffect(() => {
    const newBlocks = convertBlocksToHtml(demo_blocks);

    setBlocks(newBlocks);
  }, []);
  // Set title for website
  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      "Câu hỏi: Đâu là những thiên kiến nhận thức quan trọng nhất mà chúng ta cần lưu ý?";

    return () => {
      document.title = prevTitle;
    };
  });

  return (
    <div className="lpe-blog-detail">
      <div className="author-container">
        <div className="category">
          <Link to="/">Truyền cảm hứng</Link>
        </div>

        {/* Title */}
        <h1 className="blog-title">
          Câu hỏi: Đâu là những thiên kiến nhận thức quan trọng nhất mà chúng ta
          cần lưu ý?
        </h1>

        <div className="author-info-block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcIaxYAD-WEsrmkZJisCmmf4MfC5vUyP3pg&usqp=CAU"
            alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcIaxYAD-WEsrmkZJisCmmf4MfC5vUyP3pg&usqp=CAU"
            className="img-fluid"
          />

          <div className="author-info-block_name">
            <p className="name">
              <strong>đại tá monogram</strong>
            </p>

            <p className="created-at">14 tháng 1</p>
          </div>
        </div>
      </div>

      {blocks && (
        <div
          className="content-container"
          dangerouslySetInnerHTML={{ __html: blocks }}
        ></div>
      )}
    </div>
  );
}

export default BlogDetail;
