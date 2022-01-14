import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function ItemList({ loading, data }) {
  const specialBlogItem = (data) => {
    return (
      <div className="col-12 col-md-6 px-1 mb-3 mb-md-0">
        {loading ? (
          <Skeleton width="100%" height={300} />
        ) : (
          <Link to="/">
            <article
              className="lpe-blog big-item"
              style={{
                backgroundImage:
                  "url(" +
                  "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/df36a760735811ec85fc41a2f5147a1f.jpeg" +
                  ")",
              }}
            >
              <div className="wrapper-blog__item">
                <div className="shadow-box">
                  <div className="blog-big_text">
                    <div>
                      <p className="blog-big_text--info">
                        <span>
                          <span className="text-uppercase">
                            Khoa học - Công nghệ
                          </span>{" "}
                          - 12 giờ trước
                        </span>
                      </p>
                      <h2 className="blog-big_text--title">
                        Mọi người cần biết cách đọc số liệu
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        )}
      </div>
    );
  };

  const normalBlogItem = (data) => {
    return (
      <div className="col-12 col-lg-6 col-xl-3 mb-3 mb-md-0  mt-4">
        {loading ? (
          <Skeleton count={8} />
        ) : (
          <Link to="/">
            <article className="lpe-blog small-item">
              <div className="right-content">
                <img
                  src="https://img.vietcetera.com/uploads/images/06-jan-2022/untitled-1-1641460571203.jpg"
                  alt="https://img.vietcetera.com/uploads/images/06-jan-2022/untitled-1-1641460571203.jpg"
                  className="img-fluid w-100 lpe-blog-small__img"
                />
              </div>

              <div className="left-content">
                <Link to="/topic">
                  <p className="text-uppercase lpe-blog-small__topic">
                    điện ảnh
                  </p>
                </Link>

                <h2 className="lpe-blog-small__title">
                  Blockchain 101 : Block #0 - Lịch sử hình thành Blockchain và
                  Bitcoin.
                </h2>

                <div className="lpe-blog-small__author">
                  <div className="lpe-blog-small__author-avatar">
                    <img
                      src="https://img.vietcetera.com/uploads/images/28-may-2021/186510184-388400872423759-8729387870001938347-n-160x160.jpg"
                      alt="https://img.vietcetera.com/uploads/images/28-may-2021/186510184-388400872423759-8729387870001938347-n-160x160.jpg"
                      className="author-img"
                    />
                  </div>

                  <div className="lpe-blog-small__author-name">
                    <p className="text-uppercase author-name">
                      Vũ Hoàng Long (Người Kể Chuyện)
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
  };

  return (
    <>
      <h1 className="blog-topic">
        {loading ? <Skeleton width={200} height={70} /> : "Xin chào bạn"}
      </h1>

      <div className="row blog-list">
        {/* Big item */}
        {specialBlogItem()}
        {specialBlogItem()}
        {/* small item */}

        {normalBlogItem()}
        {normalBlogItem()}
        {normalBlogItem()}
        {normalBlogItem()}
        {normalBlogItem()}
        {normalBlogItem()}
        {normalBlogItem()}
        {normalBlogItem()}
      </div>
    </>
  );
}

export default ItemList;
