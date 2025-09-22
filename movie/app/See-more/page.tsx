import { MovieCard } from "@/components/home/MovieCard";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

type MorePageProps = {
  searchParams: Promise<{ title: string }>;
};

 const MorePage = async ({ searchParams }: MorePageProps) => {
  const params = await searchParams;
  const title = params.title;

  const moviesRes: movieResponseType = await getMoviesList(title);
  console.log(moviesRes)
  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="flex gap-4 flex-wrap">
      {moviesRes.results.map((movie) => (
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
  );
};

export default MorePage
