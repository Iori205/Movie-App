import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaStar } from "react-icons/fa";

type movieCardProps = {
  title: string;
  score: number;
  image: string;
};

export const MovieCard = ({ title, score, image }: movieCardProps) => {
  return (
    <Card className="w-[230px] bg-[#F4F4F5] p-0 overflow-hidden gap-2">
      <CardContent className="p-0">
        <img src={image} alt="dear santa" width={230} height={340} />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2 ">
        <CardDescription className="flex gap-2 items-center">
          <FaStar color="#FDE047" />
          <span className="text-[#09090B] text-sm font-medium">{score}
          <span className="text-[#71717A] text-xs font-normal">/10</span>
          </span>
        </CardDescription>
        <CardTitle className="text-[#09090B] text-lg font-normal not-italic">{title}</CardTitle>
      </CardFooter>
    </Card>
  );
};

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const Btn = () => {
  return (
     <div>
       <Select>
         <SelectTrigger className="w-[97px] h-[36px]">
            <SelectValue placeholder="Genre" />
         </SelectTrigger>
         <SelectContent>
            <div className="p-4">
              <h3 className="text-[24px] font-semibold ">Genres</h3>
              <p className="">See lists of movies by genre</p>
             <div className="w-[537px] h-[37px]"></div>
             <div className="flex">
               <SelectItem value="Action">Action</SelectItem>
               <SelectItem value="Adventure">Adventure</SelectItem>
               <SelectItem value="Amimation">Amimation</SelectItem>
               <SelectItem value="Biographyv">Biography</SelectItem>
               <SelectItem value="Comedy">Comedy</SelectItem>
               <SelectItem value="Crime">Crime</SelectItem>
               <SelectItem value="Documentary">Documentary</SelectItem>
               <SelectItem value="Drama">Drama</SelectItem>
               <SelectItem value="Family">Family</SelectItem>
               <SelectItem value="Fantasy">Fantasy</SelectItem>
               <SelectItem value="Film-Noir">Film-Noir</SelectItem>
               <SelectItem value="Game-Show">Game-Show</SelectItem>
               <SelectItem value="History">History</SelectItem>
               <SelectItem value="Horror">Horror</SelectItem>
               <SelectItem value="Music">Music</SelectItem>
               <SelectItem value="Musical">Musical</SelectItem>
               <SelectItem value="Mystery">Mystery</SelectItem>
               <SelectItem value="News">News</SelectItem>
               <SelectItem value="Reality-TV">Reality-TV</SelectItem>
               <SelectItem value="Romance">Romance</SelectItem>
               <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
               <SelectItem value="Short">Short</SelectItem>
               <SelectItem value="Sport">Sport</SelectItem>
               <SelectItem value="Talk-Show">Talk-Show</SelectItem>
               <SelectItem value="Thriller">Thriller</SelectItem>
               <SelectItem value="War">War</SelectItem>
               <SelectItem value="Western">Western</SelectItem>
             </div>
            </div>
         </SelectContent>
       </Select>
     </div>
  )
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { url } from "inspector";

// type BigCardProps = {
//   score:number;
//   text:string;

// }

export const BigCard = () => {
  return (
    <div>
      <Carousel>
         <CarouselContent>
            <CarouselItem className="w-fit h-[600px] bg-no-repeat" style={{backgroundImage: "url('/images/b1.png')"}}></CarouselItem>
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
      </Carousel>
    </div>
  )
}