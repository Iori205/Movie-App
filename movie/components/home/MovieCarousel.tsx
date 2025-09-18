"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType } from "@/types";
import { PiX } from "react-icons/pi";
import { Fullscreen } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

type MovieCarouselProps = {
  movies: MovieType[];
  sliceprops: number | undefined;
  sliceprops2: number | undefined;
};

export function MovieCarousel({
  movies,
  sliceprops,
  sliceprops2,
}: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="">
        <CarouselContent>
          {movies.slice(sliceprops, sliceprops2).map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="p-0">
                  <CardContent className="flex aspect-video w-full max-h-[600px] items-center justify-center relative">
                    <img
                      className="absolute w-full h-full"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt=""
                      height={600}
                      width={1440}
                    />
                    <div className="absolute w-[380px] left-[140px] top-[170px]">
                      <p className="text-white text-base font-normal leading-6">
                        Now Playing:
                      </p>
                      <span className="text-4xl font-semibold text-white leading-10">
                        {movie.title}
                      </span>
                      <div className="flex items-center pt-2 pb-4">
                        <FaStar color="#FDE047" />
                        <span className="text-[#FAFAFA] text-lg leading-7">
                          {movie.vote_average}
                        </span>
                        <span className="text-[#717171] text-base font-semibold leading-6">
                          /10
                        </span>
                      </div>
                      <div className="pb-4">
                        <span className="text-white text-xs font-normal leading-5">
                          {movie.overview}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="text-sm font-medium leading-5"
                      >
                        <SiGoogledisplayandvideo360 />
                        Watch Trailer
                      </Button>
                    </div>
                  </CardContent>
                  <div className="flex gap-2 absolute bottom-[37px] pl-[679px]">
                    {Array.from({ length: count }).map((_, index) => (
                      <div
                        onClick={() => {
                          api?.scrollTo(index);
                        }}
                        key={index}
                        className={`rounded-full size-2.5 ${
                          index + 1 === current ? "bg-white" : "bg-gray-400"
                        }`}
                      ></div>
                    ))}
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
    </>
  );
}
