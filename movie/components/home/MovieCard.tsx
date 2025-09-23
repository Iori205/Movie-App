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
  id: number;
};

export const MovieCard = ({ title, score, image, id }: MovieCardProps) => {
  return (
    <Link href={`/detail/${id}`}>
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
            <span className="text-sm font-medium leading-5 text-[#09090B]">
              {score}
              <span className="text-xs font-normal leading-6 text-[#71717A]">
                /10
              </span>
            </span>
          </CardDescription>
          <CardTitle>{title}</CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};
