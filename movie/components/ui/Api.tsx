"use client";

import React, { useEffect, useState } from "react";
import { MovieCard } from "@/components/ui/MovieCard";

type MovieType = {
  original_title: string;
  poster_path: string;
  vote_average: number;
};

function Movie() {
  const [movieList, setMovieList] = useState<MovieType[] | undefined>();

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=55af3480ca26d83a32c17fa221b191fb"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movieList);
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {movieList?.map((movie) => (
        <div>
          <MovieCard
            title={movie.original_title}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            score={movie.vote_average}
          />
        </div>
      ))}
    </div>
  );
}

export default Movie;
