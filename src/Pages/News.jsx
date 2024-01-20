import { useState } from "react";
import "../components/News/news.css";
import axios from "axios";
import { v4 as uuid } from "uuid";

function NewsPage() {
  const [news, setNews] = useState([]);

  async function getData() {
    const res = await axios.get("http://localhost:3001");
    setNews(res.data);
  }

  return (
    <div className="news-wrapper">
      <div className="news-container">
        <button onClick={getData}>Click</button>
        {news != []
          ? news.slice(0, 1).map((data) => (
              <div key={uuid()}>
                <img
                  src={data.imageUrl}
                  alt="image"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default NewsPage;
