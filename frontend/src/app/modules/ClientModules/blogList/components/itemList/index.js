import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function ItemList({ loading, data }) {
  // const specialBlogItem = (data) => {
  //   return (
  //     <div className="col-12 col-md-6 px-1 mb-3 mb-md-0">
  //       {loading ? (
  //         <Skeleton width="100%" height={300} />
  //       ) : (
  //         <Link to="/">
  //           <article
  //             className="lpe-blog big-item"
  //             style={{
  //               backgroundImage:
  //                 "url(" +
  //                 "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/df36a760735811ec85fc41a2f5147a1f.jpeg" +
  //                 ")",
  //             }}
  //           >
  //             <div className="wrapper-blog__item">
  //               <div className="shadow-box">
  //                 <div className="blog-big_text">
  //                   <div>
  //                     <p className="blog-big_text--info">
  //                       <span>
  //                         <span className="text-uppercase">
  //                           Khoa học - Công nghệ
  //                         </span>{" "}
  //                         - 12 giờ trước
  //                       </span>
  //                     </p>
  //                     <h2 className="blog-big_text--title">
  //                       Mọi người cần biết cách đọc số liệu
  //                     </h2>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </article>
  //         </Link>
  //       )}
  //     </div>
  //   );
  // };

  const normalBlogItem = (data) => {
    return (
      <div className="col-12 col-lg-6 col-xl-3 mb-3 mb-md-0  mt-4">
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
  };

  return (
    <>
      <h1 className="blog-topic">
        {loading ? <Skeleton width={200} height={70} /> : "Xin chào bạn"}
      </h1>

      <div className="row blog-list">
        {data.map((blog, index) => {
          return <Fragment key={index}>{normalBlogItem(blog)}</Fragment>;
        })}
      </div>
    </>
  );
}

export default ItemList;
