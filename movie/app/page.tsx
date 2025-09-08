import { MovieCard, Btn, BigCard } from "@/components/MovieCard";
import {Movies} from "@/lib/movies"
import { Input } from "@/components/ui/input"


export default function Home() {
  return (
     <div className="bg-[#FFF] w-[1440px] h-screen m-auto">
       <div>
        <div className="flex justify-center">
          <img src="images/logo1.png" alt="" />
          <Btn></Btn>
          <Input placeholder="Shearch.." className="w-[379px] h-[36px]" />
        </div> 
        <div>
          <BigCard></BigCard>
        </div>
        <div className="h-[100px]"></div>
         <div className="flex gap-8 flex-wrap">
          {Movies.map((movie) => (
           <MovieCard 
            key={movie.id}
            title={movie.title}
            score={movie.score}
            image={movie.image}>
           </MovieCard>
          ))}
         </div>
       </div>
      </div>
  );
}
