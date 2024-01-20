import { useGetCryptoTrendDataQuery } from "../../store/api/cryptoApiSlice";
import "./crypto.css";
import { useGetCryptoGlobalDataQuery } from "../../store/api/cryptoApiSlice";
import { useState } from "react";
import CryptoList from "./CryptoList";
import Trend from "./Trend";
import CryptoSkeleton from "./CryptoSkeleton";
import CryptoCarousel from "./CryptoCarousel";

function Crypto() {
  // hide and show content set default to be true.
  const [hide, setHide] = useState(false);
  // get's the trending data
  const { data, isLoading, isError, error } = useGetCryptoTrendDataQuery();
  const {
    data: globalData,
    isLoading: globalIsLoading,
    isError: globalError,
  } = useGetCryptoGlobalDataQuery();

  if (isLoading || globalIsLoading) {
    return <CryptoSkeleton />;
  }

  if ((isError, globalError)) {
    return <span>{error.message}</span>;
  }

  // filter the data according to the top gain percentage
  const highestGainer = [...data.coins].sort(
    (a, b) =>
      b.item.data.price_change_percentage_24h.usd -
      a.item.data.price_change_percentage_24h.usd
  );

  // filter the data with the higher looser
  const highestLooser = [...data.coins].sort(
    (a, b) =>
      a.item.data.price_change_percentage_24h.usd -
      b.item.data.price_change_percentage_24h.usd
  );

  // market cap variable
  const totalMarketCapPercent =
    globalData.data.market_cap_change_percentage_24h_usd.toFixed(2) + "%";
  const totalMarketCap = globalData.data.total_market_cap.usd.toFixed(2);

  return (
    <div className="crypto-home-container">
      <div className="content-wrapper">
        <div className="info-wrapper">
          <div className="main-box market-cap">
            <div className="info-box">
              <span className="market-cap-value">
                ${globalData.data.total_market_cap.usd.toFixed(2)}
              </span>
              <br />
              <span className="text">
                Market Cap
                <span
                  className={
                    totalMarketCapPercent > 0
                      ? "market-cap-profit"
                      : "market-cap-loss"
                  }
                >
                  {" "}
                  {globalData.data.market_cap_change_percentage_24h_usd.toFixed(
                    2
                  ) + "%"}
                </span>
              </span>
            </div>
          </div>
          <div className="main-box market-volume">
            <div className="info-box">
              <span className="market-volume-value">
                ${globalData.data.total_volume.usd}
              </span>
              <br />
              <span className="text">24h Trading Volume</span>
            </div>
          </div>
        </div>

        <div className="heading-content">
          <h1>Cryptocurrency Prices by Market Cap</h1>
          <div className="sub-content">
            <span>
              The global cryptocurrency market cap today is $
              {totalMarketCap.slice(0, 1) + "." + totalMarketCap.slice(1, 3)}{" "}
              Trillion, a
              <span
                className={
                  totalMarketCapPercent > 0
                    ? "market-cap-profit"
                    : "market-cap-loss"
                }
              >
                {" " + totalMarketCapPercent + " "}
              </span>
              change in the last 24 hours{" "}
              <button
                className="show-hide-content"
                onClick={() => {
                  setHide((prev) => !prev);
                }}
              >
                {hide ? "Hide" : "ReadMore"}
              </button>
            </span>
            {hide ? (
              // dynamic content shown and hidden based on the user experience
              <div className="dynamic-content">
                <span>
                  The most well-known cryptocurrency is Bitcoin, created in 2009
                  by an anonymous person or group using the pseudonym Satoshi
                  Nakamoto. Bitcoin paved the way for the development of
                  thousands of other cryptocurrencies, commonly referred to as
                  altcoins.
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="market-card-content market-hot">
        <Trend data={data.coins} title="Trending" />
        <Trend data={highestGainer} title="Top Gainers" />
        <Trend data={highestLooser} title="Top Losers" />
      </div>

      <CryptoCarousel data={data.coins} />

      <div className="crypto-list-wrapper">
        <CryptoList />
      </div>
    </div>
  );
}

export default Crypto;
