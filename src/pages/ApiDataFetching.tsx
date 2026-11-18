import { useState, useEffect } from "react";

type Movie = {
  name: string,
  images: {
    portrait: string,
    landscape: string,
  },
  rating: number
};

type ApiResponse = {
  movies: Movie[];
};


export default function ApiDataFetching() {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const URL = "https://api.npoint.io/029ba3b51c37642b3db5";

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const { movies } = await response.json() as ApiResponse;
        setMovies(movies);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const searchedMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="main-cont"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        padding: "30px",
        margin: "20px 0 50px"
      }}
    >
      <input
        className="search-bar"
        style={{
          width: "80%",
          padding: "10px",
          borderRadius: "5px",
          textAlign: "center"
        }}
        type="text"
        placeholder="Search Movies…"
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />

      <div
        className="movies-cont"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "90px"
        }}
      >
        {searchedMovies.map((movie, index) => (
          <div
            className="movie"
            key={index}
            style={{
              width: "300px",
              height: "400px"
            }}
          >
            <img
              style={{ width: "inherit", height: "inherit" }}
              src={movie.images.portrait}
              alt={movie.name}
            />
            <div
              className="details"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1px"
              }}
            >
              <div
                className="name"
                style={{ fontSize: "20px" }}
              >
                {movie.name}
              </div>
              <div className="rating">
                {movie.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}