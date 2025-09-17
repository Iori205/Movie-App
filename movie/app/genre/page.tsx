import { MovieCard } from "@/components/home/MovieCard";
import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/get-data";

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
  return (
    <div>
      <div></div>
      <div className="max-w-[806px]">
        <span className="text-[#09090B] font-semibold text-xl leading-8">
          {name}
        </span>
        <div className="flex flex-wrap gap-8">
          {filteredMoviesResponse.results.slice(0, 12).map((movie) => (
            <MovieCard
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
