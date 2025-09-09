import { MovieCard, Genre, BigCard } from "@/components/ui/MovieCard";
import { Movies } from "@/lib/movies";
import { Input } from "@/components/ui/input";
import { ThemeMenu } from "@/components/ThemeMenu";
import { Header } from "@/components/ui/Header";
import Movie from "@/components/ui/Api";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="w-[1440px] h-screen m-auto">
      <div>
        <div>
          <BigCard></BigCard>
        </div>
        <div className="h-[52px]"></div>
        <div>
          {/* {Movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              score={movie.score}
              image={movie.image}
            ></MovieCard>
          ))} */}
          <Movie />
        </div>
        <Footer />
        <div className="h-[200px]"></div>
      </div>
    </div>
  );
}
