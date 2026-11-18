import React from 'react';


export default function Rating() {

  const [activeStar, setActiveStar] = React.useState<number>(0);

  return (
    <div
      className="rating"
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {Array.from({ length: 5 }).map((_, index) => {

        const rating = index + 1;

        return (
          <span
            className="star"
            style={{ fontSize: "50px", cursor: "pointer" }}
            key={index}
            onClick={() => setActiveStar(rating)}
          >
            {activeStar > index ? '★' : '☆'}
          </span>
        )})}
    </div>
  );
}