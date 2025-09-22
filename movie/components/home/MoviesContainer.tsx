import { MovieType } from "@/types";
import { MovieCard } from "./MovieCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GrLinkNext } from "react-icons/gr";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
  link: string;
  sliceprops: number | undefined;
  sliceprops2: number;
};

export const MoviesContainer = ({
  movies,
  title,
  link,
  sliceprops,
  sliceprops2,
}: MoviesContainerProps) => {
  return (
    <div className="max-w-[1440px] m-auto px-20">
      <div className="flex justify-between pt-[52px] pb-[36px]">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Link href={`/see-more?title=${link}`}>
          <Button
            variant="ghost"
            className="text-sm text-[#09090B] font-medium leading-5"
          >
            See more <GrLinkNext />
          </Button>
        </Link>
      </div>
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
