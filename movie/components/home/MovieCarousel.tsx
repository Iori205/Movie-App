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
                  <CardContent className="flex aspect-video w-full max-h-[600px] items-center justify-center relative ">
                    <img
                      className="absolute w-full h-full"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt=""
                      height={600}
                      width={1440}
                    />
                    <span className="text-4xl font-semibold absolute">
                      {movie.title}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
      <div className="flex gap-2 absolute">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`rounded-full size-4 ${
              index + 1 === current ? "bg-white" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </>
  );
}
