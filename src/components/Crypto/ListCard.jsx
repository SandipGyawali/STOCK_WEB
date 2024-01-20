/* eslint-disable react/prop-types */
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import CryptoCarousel from "./CryptoCarousel";

function ListCard({ data }) {
  console.log(data);
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th className="s.n-head">S.N</th>
            <th className="coin-head">Coin</th>
            <th className="price-head">Price</th>
            <th className="change-head">% change 24hr</th>
            <th className="total-volume-head">Total Volume</th>
            <th>Market Cap</th>
          </tr>
        </thead>

        <tbody>
          {data
            ? data.map((r) => (
                <tr key={uuid()} className="table-data">
                  <td className="table-symbol">
                    <span>{r.market_cap_rank}</span>
                  </td>
                  <td className="table-name">
                    <img src={r.image} alt="coin-img" />
                    <span className="coin-name">
                      <Link to="/market/crypto/single" state={r.id}>
                        {r.name.split(" ")[0]}
                      </Link>
                    </span>
                    <span className="table-name-symbol">
                      {r.symbol.toUpperCase()}
                    </span>
                  </td>
                  <td className="table-price">
                    ${r.current_price.toLocaleString()}
                  </td>
                  <td
                    className={
                      r.price_change_percentage_24h > 0
                        ? "table-price-percent-profit"
                        : "table-price-percent-loss"
                    }
                  >
                    {r.price_change_percentage_24h.toFixed(2) + "%"}
                  </td>
                  <td className="table-volume">
                    ${r.total_volume.toLocaleString()}
                  </td>
                  <td className="table-market_cap">
                    ${r.market_cap.toLocaleString()}
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default ListCard;
