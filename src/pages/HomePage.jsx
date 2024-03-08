import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        setMovies();
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
    },[])

    return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies}></MoviesList>
    </div>
  );
}
