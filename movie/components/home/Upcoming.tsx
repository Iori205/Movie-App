"use client";

import React, { useEffect, useState } from "react";
import { MovieCard } from "@/components/home/Card";

type MovieType = {
  original_title: string;
  poster_path: string;
  vote_average: number;
};

function UpComing() {
  const [movieList, setMovieList] = useState<MovieType[] | undefined>();

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=55af3480ca26d83a32c17fa221b191fb"
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
      {movieList?.slice(0, 10).map((movie) => (
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

export default UpComing;
