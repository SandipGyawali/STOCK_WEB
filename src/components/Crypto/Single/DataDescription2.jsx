function Data2({ data }) {
  return (
    <div className="price">
      <span className="price-ind">
        Total Supply
        <span className="data">
          {data.market_data.total_supply.toLocaleString()}
        </span>
      </span>
      <span className="price-ind">
        Circulating Supply
        <span className="data">
          {data.market_data.circulating_supply.toLocaleString()}
        </span>
      </span>
      <span className="price-ind">
        Price change 24hr
        <span
          className={
            "data" + data.market_data.price_change_24h > 0
              ? "data-profit"
              : "data-loss"
          }
        >
          {data.market_data.price_change_24h.toFixed(2)}
        </span>
      </span>
      <span className="price-ind">
        % change 7d
        <span
          className={`data ${
            data.market_data.price_change_percentage_7d > 0
              ? "data-profit"
              : "data-loss"
          }`}
        >
          {data.market_data.price_change_percentage_7d.toFixed(2) + "%"}
        </span>
      </span>
    </div>
  );
}

export default Data2;
