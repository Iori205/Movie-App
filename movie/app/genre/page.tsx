import { GenreDropdown } from "@/components/home/Genre";
import { MovieCard } from "@/components/home/MovieCard";
import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/get-data";
import { GenreCard } from "@/components/home/Genre-card";
import { Genres } from "@/components/home/GenresComponents";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
    <div className="max-w-[1440px] m-auto">
      <h1 className="text-3xl font-semibold leading-[36px] pb-8 pl-25">
        Search filter
      </h1>
      <div className="flex justify-center gap-[41px]">
        <div>
          <Genres />
        </div>
        <div className="max-w-[806px]">
          <span className=" font-semibold text-xl leading-8">{name}</span>
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
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Genre;
