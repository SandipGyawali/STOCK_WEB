import { useLocation } from "react-router-dom";
import {
  useGetCryptoIdDataQuery,
  useGetCryptoIdGraphDataQuery,
} from "../../../store/api/cryptoApiSlice";
import "./single.css";
import Data from "./DataDescription1";
import Data2 from "./DataDescription2";
import Graph from "./Graph";

function Single() {
  const location = useLocation();

  const id = location.state || "";

  const { data, isLoading, isError, error } = useGetCryptoIdDataQuery(id);
  const {
    data: graphData,
    isLoading: graphIsLoading,
    isError: graphError,
    error: graphErrorMsg,
  } = useGetCryptoIdGraphDataQuery(id);

  return (
    <div className="single-page-wrapper">
      {data ? (
        <div className="coin-info-wrapper">
          {/* image, name and price */}
          <div className="img-wrapper">
            <img src={data.image.large} alt="img" className="crypto-img" />
          </div>
          <div className="coin-info">
            <span className="coin-name-single">{data.name} </span>
            <span className="rank">Rank:{data.market_cap_rank}</span>
          </div>
          <div className="coin-description">
            <p>{data.description.en.split("\n")[0]}</p>
          </div>
          <div className="data-description">
            <Data data={data} />
            <Data2 data={data} />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="graph">
        {graphIsLoading ? (
          <span>Loading</span>
        ) : graphError ? (
          <span>Error:{graphErrorMsg}</span>
        ) : graphData ? (
          <Graph data={graphData} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Single;
