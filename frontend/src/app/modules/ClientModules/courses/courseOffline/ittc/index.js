import React from "react";
import BannerITTC from "./components/banner";
import Content from "./components/content";
import Footer from "./components/footer";
import Quotes from "./components/quotes";
import TimeLine from "./components/timeline";
import Video from "./components/video";
import Catagory from "./components/catagory";
import ItemList from "./components/itemList";
import FadeInWhenVisible from "./components/fadeIn";
// npm install framer-motion@4.1.17
import LoadingITTC from "./components/loading";
import priceImg from "./assets/priceittc.png";

import "./styles/styles.scss";

function ITTCPage() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const setLoadingTime = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(setLoadingTime);
    };
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <div className="wrapper-ittc">
            <BannerITTC />
            <div className="py-5"></div>
            <div className="py-5"></div>

            <Quotes />
            <div className="py-5"></div>
            <div className="py-5"></div>

            <Video />

            <div className="py-5"></div>
            <div className="py-5"></div>

            <Catagory />

            <div className="py-5"></div>
            <div className="py-5"></div>
            <ItemList />

            <div className="py-5"></div>
            <TimeLine />

            <div className="py-5"></div>
            <div className="py-5"></div>

            <Content />

            <div className="py-5"></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="col-12 col-md-10 text-center pb-5">
                <img src={priceImg} alt={priceImg} className="img-fluid" />
              </div>
            </div>
          </div>

          <Footer />
        </>
      ) : (
        <LoadingITTC />
      )}
    </>
  );
}

export default ITTCPage;