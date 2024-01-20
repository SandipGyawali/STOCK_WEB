import { v4 as uuid } from "uuid";

function PaginationBtn({ currentPage, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= 5; i++) {
    pageNumbers.push(
      <button
        key={uuid()}
        className={
          currentPage == i ? "active pagination-btn" : "pagination-btn"
        }
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }

  // console.log(pageNumbers);
  return (
    <div className="page-btn-wrapper">
      <div className="page-btn">
        <button
          className="previous-btn"
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
          disabled={currentPage == 1}
        >
          Previous
        </button>
        {pageNumbers}
        <button
          className="next-btn"
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
          disabled={currentPage == 5}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationBtn;
