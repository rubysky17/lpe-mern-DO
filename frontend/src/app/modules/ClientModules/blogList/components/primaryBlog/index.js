import React from "react";
import { Link } from "react-router-dom";

function LPEPrimaryBlog({ data }) {
  return (
    <div className="col-12 col-md-6 px-1 mb-3 mb-md-0">
      <Link to={`/bai-dang/${data.url}`}>
        <article
          className="lpe-blog big-item"
          style={{
            backgroundImage: `url(${data.cover})`,
          }}
        >
          <div className="wrapper-blog__item">
            <div className="shadow-box">
              <div className="blog-big_text">
                <div>
                  <p className="blog-big_text--info">
                    <Link to={`${data.topicId._id}`}>
                      <p>
                        <span className="text-uppercase">
                          {data.topicId.name}
                        </span>
                      </p>
                    </Link>
                  </p>

                  <h2 className="blog-big_text--title">{data.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}

export default LPEPrimaryBlog;
