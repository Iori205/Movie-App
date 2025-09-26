import React from 'react'
import { MovieCard } from "@/components/home/MovieCard";
import { Moviedescribecard } from "@/components/home/de-co";
import { Button } from "@/components/ui/button";
import {
  getMoviesDescribtion,
  getMoviesMoreLike,
} from "@/utils/get-data";
import { DirectorName, movieResponseType, MovieType } from "@/types/index";
type MovieidPageProps = {
  params: Promise<{ id: string }>;
};

const moreLike = async ({ params }: MovieidPageProps) => {
    const params2 = await params;
    const id = params2.id;

    const MorelikeThis: movieResponseType = await getMoviesMoreLike(id);

  return (
    <div>
      <div className="flex items-center justify-between mt-10 ml-42 w-[1200px]">
        <div className="text-4xl font-bold">More like this</div>
      </div>
      <div className="flex gap-6 ml-42 mt-10 flex-wrap w-[1280px]">
        {" "}
        {MorelikeThis.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
            id={movie.id}
          ></MovieCard>
        ))}
      </div>
    </div>
  )
}

export default moreLike