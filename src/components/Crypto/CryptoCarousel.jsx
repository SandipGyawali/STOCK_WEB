/* eslint-disable react/prop-types */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //styling loader for react
import { v4 as uuid } from "uuid";

function CryptoCarousel({ data }) {
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        centerMode={true}
        centerSlidePercentage={23}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={3000}
      >
        {data
          ? data.map((obj) => (
              <div key={uuid()} className="carousel">
                <img src={obj.item.large} alt="logo" />
                <div className="carousel-content">
                  <span>{obj.item.symbol}</span>
                  &nbsp;&nbsp;
                  <span
                    className={
                      obj.item.data.price_change_percentage_24h.usd > 0
                        ? "item-list-profit"
                        : "item-list-loss"
                    }
                  >
                    {obj.item.data.price_change_percentage_24h.usd.toFixed(2) +
                      "%"}
                  </span>
                </div>
              </div>
            ))
          : ""}
      </Carousel>
    </div>
  );
}

export default CryptoCarousel;
