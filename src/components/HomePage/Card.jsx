/* eslint-disable react/prop-types */
import "./HomePage.css";
import { v4 as uuid } from "uuid";
import { Link, useParams } from "react-router-dom";

function Card({ data }) {
  // check the params and show the view all option.
  const params = useParams();

  return (
    <div className="market-card">
      {data != []
        ? data.coins.slice(0, 5).map((item) => (
            <div key={uuid()} className="list-item">
              <div className="list-item-image">
                <img src={item.item.large} alt="" />
              </div>
              <div className="list-price-status">
                <span>
                  {item.item.symbol}{" "}
                  <span className="symbol">{item.item.name.split(" ")[0]}</span>
                </span>
                <span
                  className={
                    item.item.data.price_change_percentage_24h.usd > 0
                      ? "item-list-profit"
                      : "item-list-loss"
                  }
                >
                  {item.item.data.price_change_percentage_24h.usd.toFixed(2) +
                    "%"}
                </span>
              </div>
            </div>
          ))
        : ""}
      {params["*"] == "market/crypto" ? (
        ""
      ) : (
        <div className="list-showAll">
          <span>
            <Link to="/market/crypto">View All</Link>
          </span>
        </div>
      )}
    </div>
  );
}

export default Card;
