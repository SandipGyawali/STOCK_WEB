/* eslint-disable react/prop-types */
function Data({ data }) {
  return (
    <div className="price">
      <span className="price-ind">
        Current Price
        <span className="data">
          ${data.market_data.current_price.usd.toLocaleString()}
        </span>
      </span>
      <span className="price-ind">
        Market Cap
        <span className="data">
          ${data.market_data.market_cap.usd.toLocaleString()}
        </span>
      </span>
      <span className="price-ind">
        Total Volume
        <span className="data">
          ${data.market_data.total_volume.usd.toLocaleString()}
        </span>
      </span>

      <span className="price-ind">
        Fully Diluted Valuation
        <span className="data">
          ${data.market_data.fully_diluted_valuation.usd.toLocaleString()}
        </span>
      </span>
    </div>
  );
}

export default Data;
