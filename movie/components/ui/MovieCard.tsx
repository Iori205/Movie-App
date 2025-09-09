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

import { Button } from "@/components/ui/button";

import { SiGoogledisplayandvideo360 } from "react-icons/si";

import { MdOutlineNavigateNext } from "react-icons/md";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

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

export function NavigationMenuDemo() {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/docs">Documentation</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export const Genre = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="border-1">
              Genre
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <h1 className="text-[#09090B] text-base font-semibold leading-[32px]">
                Genres
              </h1>
              <p>See lists of movies by genre</p>
              <div className="flex flex-wrap w-[577px] h-[333px] items-center">
                <NavigationMenuLink
                  className="border border-black"
                  href="/genre"
                >
                  Action
                  <MdOutlineNavigateNext />
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Adventure
                  <MdOutlineNavigateNext />
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Amimation
                  <MdOutlineNavigateNext />
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Biography
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Comedy
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Crime
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Documentary
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Drama
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Family
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Fantasy
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Film-Noir
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Game-Show
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  History
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Horror
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Music
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Mystery
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  News
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Reality-TV
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Romance
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Sci-Fi
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Short
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Sport
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Talk-Show
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Thriller
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  War
                </NavigationMenuLink>
                <NavigationMenuLink className="border" href="/genre">
                  Western
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

//
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
          <CarouselItem className="w-full h-[600px] bg-[url(https://assets.teenvogue.com/photos/689477fd927ba5dc795b4133/master/w_2560%2Cc_limit/523301482_18401497033116540_2151462723899694136_n.jpg)] bg-no-repeat bg-center">
            <div className="w-[450px] pt-[178px] pl-[140px]">
              <p className="text-white text-base font-normal leading-6">
                Now Playing:
              </p>
              <h2 className="text-4xl font-bold leading-10 text-white pb-2">
                Wicked
              </h2>
              <div className="flex pb-[26px]">
                <FaStar color="#FDE047" />
                <span className="text-white text-sm font-medium">
                  6.9
                  <span className="text-shadow-fuchsia-100 text-xs font-normal">
                    /10
                  </span>
                </span>
              </div>
              <p className="text-white leading-4 font-normal text-xs pb-4">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.{" "}
              </p>
              <Button className="hv: bg-neutral-200" variant="outline">
                <SiGoogledisplayandvideo360 />
                Watch Trailer
              </Button>
            </div>
          </CarouselItem>
          <CarouselItem className="w-full h-[600px] bg-[url(https://substackcdn.com/image/fetch/$s_!mroO!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd50aeb13-72c4-4e68-aed8-bd2bd9c83c8d_1400x700.jpeg)] bg-no-repeat bg-cover  bg-center">
            <div className="w-[450px] pt-[178px] pl-[140px]">
              <p className="text-white text-base font-normal leading-6">
                Now Playing:
              </p>
              <h2 className="text-4xl font-bold leading-10 text-white pb-2">
                Wicked
              </h2>
              <div className="flex pb-[26px]">
                <FaStar color="#FDE047" />
                <span className="text-white text-sm font-medium">
                  6.9
                  <span className="text-shadow-fuchsia-100 text-xs font-normal">
                    /10
                  </span>
                </span>
              </div>
              <p className="text-white leading-4 font-normal text-xs pb-4">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.{" "}
              </p>
              <Button className="hv: bg-neutral-200" variant="outline">
                <SiGoogledisplayandvideo360 />
                Watch Trailer
              </Button>
            </div>
          </CarouselItem>
          <CarouselItem className="w-full h-[600px] bg-[url(https://weliveentertainment.com/wp-content/uploads/2024/11/moana-2-banner-2-scaled.jpg)] bg-no-repeat bg-cover bg-bg-center">
            <div className="w-[450px] pt-[178px] pl-[140px]">
              <p className="text-blue-600 text-base font-normal leading-6">
                Now Playing:
              </p>
              <h2 className="text-4xl font-bold leading-10 text-blue-400 pb-2">
                Wicked
              </h2>
              <div className="flex pb-[26px]">
                <FaStar color="#FDE047" />
                <span className="text-black text-sm font-medium">
                  6.9
                  <span className="text-shadow-fuchsia-100 text-xs font-normal">
                    /10
                  </span>
                </span>
              </div>
              <p className="text-blue-500 leading-4 font-normal text-xs pb-4">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.{" "}
              </p>
              <Button className="hv: bg-neutral-200" variant="outline">
                <SiGoogledisplayandvideo360 />
                Watch Trailer
              </Button>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-[20px]" />
        <CarouselNext className="right-[25px]" />
      </Carousel>
    </div>
  );
};
