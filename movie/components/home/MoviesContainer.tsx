import { MovieType } from "@/types";
import { MovieCard } from "./MovieCard";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
  sliceprops: number | undefined;
  sliceprops2: number;
};

export const MoviesContainer = ({
  movies,
  title,
  sliceprops,
  sliceprops2,
}: MoviesContainerProps) => {
  return (
    <div className="max-w-[1440px] m-auto px-20">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="flex gap-8 flex-wrap">
        {movies.slice(sliceprops, sliceprops2).map((movie) => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
