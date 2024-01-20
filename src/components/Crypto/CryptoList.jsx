import { useState } from "react";
import { useGetCryptoDataQuery } from "../../store/api/cryptoApiSlice";
import PaginationBtn from "./PaginationBtn";
import ListCard from "./ListCard";

const itemsPerPage = 50;

function CryptoList() {
  const { data, isLoading, isError, error } = useGetCryptoDataQuery();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  let indexOfLastItem;
  let indexOfFirstItem;

  let currentItems;
  if (data) {
    indexOfLastItem = currentPage * itemsPerPage;
    indexOfFirstItem = indexOfLastItem - itemsPerPage;
    currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  }

  return (
    <div className="crypto-list">
      <ListCard data={currentItems} />
      <div className="pagination-head-container">
        <PaginationBtn
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default CryptoList;
