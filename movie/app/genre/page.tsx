import { GenreDropdown } from "@/components/home/Genre";
import { MovieCard } from "@/components/home/MovieCard";
import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/get-data";
import { GenreCard } from "@/components/home/Genre-card";

import Link from "next/link";
import { getMovieGenres } from "@/utils/get-data";
import { GenreResponseType } from "@/types";

type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string; page: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;
  const page = params.page || "1";

  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  const genresResponse: GenreResponseType = await getMovieGenres();
  return (
    <div className="max-w-[1440px] m-auto flex justify-end">
      <div></div>
      <div className="max-w-[806px]">
        <span className="text-[#09090B] font-semibold text-xl leading-8">
          {name}
        </span>
        <div className="flex flex-wrap gap-8">
          {filteredMoviesResponse.results.slice(0, 12).map((movie) => (
            <GenreCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genre;
