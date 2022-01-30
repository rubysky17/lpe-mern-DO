import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function SecondaryBlog({ loading, data }) {
  return (
    <div className="col-12 col-lg-6 col-xl-3 mb-3 mb-md-0 mt-4">
      {loading ? (
        <Skeleton count={8} />
      ) : (
        <Link to={`/bai-dang/${data.url}`}>
          <article className="lpe-blog small-item">
            <div className="right-content">
              <img
                src={data.cover}
                alt={data.cover}
                className="img-fluid w-100 lpe-blog-small__img"
              />
            </div>

            <div className="left-content">
              <Link to={`${data.topicId._id}`}>
                <p className="text-uppercase lpe-blog-small__topic">
                  {data.topicId.name}
                </p>
              </Link>

              <h2 className="lpe-blog-small__title">{data.title}</h2>

              <div className="lpe-blog-small__author">
                <div className="lpe-blog-small__author-avatar">
                  <img
                    src={data.author.avatar}
                    alt={data.author.avatar}
                    className="author-img"
                  />
                </div>

                <div className="lpe-blog-small__author-name">
                  <p className="text-uppercase author-name">
                    {data.author.name}
                  </p>
                  <p className="time-ago">7 giờ trước</p>
                </div>
              </div>
            </div>
          </article>
        </Link>
      )}
    </div>
  );
}

export default SecondaryBlog;
