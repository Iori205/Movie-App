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
    <Card className="w-[230px] h-[439px] bg-secondary p-0 overflow-hidden gap-2">
      <CardContent className="p-0">
        <img src={image} alt="dear santa" width={230} height={340} />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2 ">
        <CardDescription className="flex gap-2 items-center">
          <FaStar color="#FDE047" />
          <span className="text-[#09090B] text-sm font-medium">
            {score}
            <span className="text-[#71717A] text-xs font-normal">/10</span>
          </span>
        </CardDescription>
        <CardTitle className="text-[#09090B] text-lg font-normal not-italic">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
