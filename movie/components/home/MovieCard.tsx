import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

type MovieCardProps = {
  title: string;
  score: number;
  image: string;
};

// export const MovieCard = ({ title, score, image }: movieCardProps) => {
//   return (
//     <Card className="w-[230px] h-[439px] bg-secondary p-0 overflow-hidden gap-2">
//       <CardContent className="p-0">
//         <img src={image} alt="dear santa" width={230} height={340} />
//       </CardContent>
//       <CardFooter className="flex flex-col items-start p-2 ">
//         <CardDescription className="flex gap-2 items-center">
//           <FaStar color="#FDE047" />
//           <span className="text-[#09090B] text-sm font-medium">
//             {score}
//             <span className="text-[#71717A] text-xs font-normal">/10</span>
//           </span>
//         </CardDescription>
//         <CardTitle className="text-[#09090B] text-lg font-normal not-italic">
//           {title}
//         </CardTitle>
//       </CardFooter>
//     </Card>
//   );
// };

export const MovieCard = ({ title, score, image }: MovieCardProps) => {
  return (
    <Link href="/detail">
      <Card className="w-[230px] h-[439px] bg-secondary p-0 overflow-hidden gap-2 ">
        <CardContent className="p-0">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            alt=""
            width={230}
            height={340}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start p-2">
          <CardDescription className="flex gap-2 pb-2">
            <FaStar color="#FDE047" />
            <span>{score}/10</span>
          </CardDescription>
          <CardTitle>{title}</CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};
