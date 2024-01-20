/* eslint-disable react/prop-types */
import "./HomePage.css";
import Card from "./Card";

function MarketCard({ data }) {
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

  return (
    <div className="market-card-wrapper">
      <div className="market-card-content">
        <div>
          <span className="trend-title">Trending</span>
          <Card data={data} />
        </div>
        <div>
          <span className="trend-title">Top Gainers</span>
          <Card data={{ coins: highestGainer }} />
        </div>
        <div>
          <span className="trend-title">Top Losers</span>
          <Card data={{ coins: highestLooser }} />
        </div>
      </div>
    </div>
  );
}

export default MarketCard;
