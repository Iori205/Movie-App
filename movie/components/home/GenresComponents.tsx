import React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GenreResponseType } from "@/types";
import { getMovieGenres } from "@/utils/get-data";

export async function Genres() {
  const genresResponse: GenreResponseType = await getMovieGenres();
  return (
    <div>
      <div className="">
        <h2 className="text-2xl font-semibold leading-[32px] pb-0">Genres</h2>
        <p className="text-base leading-[24px] font-normal pb-5">
          See list of movies by genre
        </p>
        <div className="w-[387px] flex flex-wrap gap-4">
          {genresResponse.genres.map((genre) => (
            <Link
              className="gap-4"
              key={genre.id}
              href={`/genre?id=${genre.id}&name=${genre.name}`}
            >
              <Badge variant="outline">
                {genre.name}
                <ChevronRight />
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
