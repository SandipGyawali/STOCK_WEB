/* eslint-disable react/prop-types */
import Card from "../HomePage/Card";

function Trend({ data, title }) {
  return (
    <div className="trend-wrapper">
      <div className="title">{title}</div>
      <Card data={{ coins: data }} />
    </div>
  );
}

export default Trend;
