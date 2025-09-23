import React from "react";

import { DirectorName, movieResponseType, MovieType } from "@/types/index";
import {
  getMoviesDescribtion,
  getMoviesDirectorName,
  getMoviesMoreLike,
  getMoviesTrailer,
} from "@/utils/get-data";
import { MovieCard } from "@/components/home/MovieCard";
import { Moviedescribecard } from "@/components/home/de-co";
import { Button } from "@/components/ui/button";

type MovieidPageProps = {
  params: Promise<{ id: string }>;
};
const Movieid = async ({ params }: MovieidPageProps) => {
  const params2 = await params;
  const id = params2.id;

  const Moviebyid: MovieType = await getMoviesDescribtion(id);
  const Moviedirectorname: DirectorName = await getMoviesDirectorName(id);
  const MorelikeThis: movieResponseType = await getMoviesMoreLike(id);
  const Movietrailer: movieResponseType = await getMoviesTrailer(id);

  return (
    <div>
      <Moviedescribecard
        title={Moviebyid.title}
        Score={Moviebyid.vote_average}
        Image={Moviebyid.poster_path}
        releasedate={Moviebyid.release_date}
        id={Moviebyid.id}
        runtime={Moviebyid.runtime}
        backdrop_path={Moviebyid.backdrop_path}
        genres={Moviebyid.genres}
        overview={Moviebyid.overview}
        crew={Moviedirectorname.crew}
        cast={Moviedirectorname.cast}
        vote_count={Moviebyid.vote_count}
        // type={Movietrailer.results[0].name}
      ></Moviedescribecard>

      <div className="flex justify-between mt-10 ml-42 w-[1200px]">
        {" "}
        <div className="text-4xl font-bold">More like this</div>{" "}
        <Button>See more</Button>
      </div>
      <div className="flex  gap-6 ml-42 mt-10 flex-wrap w-[1280px]">
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
  );
};

export default Movieid;
