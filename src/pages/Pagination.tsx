import { useState } from 'react';


const data = [
  1, 2, 3,
  4, 5, 6, 
  7, 8, 9, 
  10, 11, 12, 
  13, 14, 15,
  16, 17, 18, 
  19, 20, 21, 
  22, 23, 24, 
  25, 26, 27, 
  28, 29, 30
];


export default function Pagination() {

  const itemsPerPage = 3;
  const totalPages = data.length / itemsPerPage;

  const firstPage = 1;
  const lastPage = totalPages;

  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const shownData = data.slice(startIndex, endIndex);


  
  const handleOnPrevious = () => {

    if (currentPage === 1) {
      return;
    }

    setCurrentPage(currentPage - 1);
  }

  const handleOnNext = () => {

    if (currentPage === totalPages) {
      return;
    }

    setCurrentPage(currentPage + 1);
  }

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  }

  

  return (
    <div
      className="pagination-cont"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "80vh"
      }}
    >
    <div
      className="items-cont"
      style={{
        display: "flex",
        gap: "30px",
        margin: "20px"
      }}
    >
    {shownData.map((item: number, index: number) => 
      <div
        key={index}
        className="box"
        style={{
          padding: "50px",
          backgroundColor: "cyan",
          fontSize: "4rem"
        }}
      >
        {item}
      </div>
    )}
    </div>

      <div className=""pagination-bar>
        <button
          className="prev-btn"
          style={{
            padding: "10px"
          }}
          onClick={handleOnPrevious}
          disabled={currentPage === firstPage}
        >
          {"< Prev"}
        </button>

        {Array.from({ length: totalPages }).map((_, index) => {

          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() => handleCurrentPage(page)}
              style={{
                padding: "10px",
                margin: "0 5px",
                backgroundColor: "greenyellow",
                border: currentPage === page ? "2px solid orange" : "2px solid black",
                cursor: "pointer"
              }}
            >
              {page}
            </button>
          );
        })}

        <button
          className="next-btn"
          onClick={handleOnNext}
          style={{
            padding: "10px"
          }}
          disabled={currentPage === lastPage}
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
}