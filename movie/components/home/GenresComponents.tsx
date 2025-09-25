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
      <h2>Genres</h2>
      <p>See list of movies by genre</p>
      <div>
        {genresResponse.genres.map((genre) => (
          <Link
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
  );
}
