import { MoviesContainer } from "@/components/home/MoviesContainer";
import { MovieCarousel } from "@/components/home/MovieCarousel";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

export default async function Home() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  console.log(upcomingMovies);

  return (
    <div className="max-w-[1440px] m-auto">
      <MovieCarousel movies={nowPlayingMovies.results} />
      <MoviesContainer
        movies={upcomingMovies.results}
        title="Upcoming"
        sliceprops={0}
        sliceprops2={10}
      />
      <MoviesContainer
        sliceprops={0}
        sliceprops2={10}
        movies={popularMovies.results}
        title="Popular"
      />
      <MoviesContainer
        sliceprops={0}
        sliceprops2={10}
        movies={topRatedMovies.results}
        title="Top Rated"
      />
    </div>
  );
}
