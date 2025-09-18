"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { movieResponseType } from "@/types";
import { getSearchedMovies } from "@/utils/get-data";
import { Search } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await getSearchedMovies(value);
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setFoundMovies(foundData);
  };
  return (
    <div>
      <Search className="text-[#09090B)] size-3 absolute ml-3 mt-3" />
      <Input
        value={searchValue}
        onChange={handleChange}
        className="relative pl-[36px] flex items-center max-w-[370px]"
        placeholder="Search.."
      />
      <div>
        <Popover open={isOpen}>
          <PopoverTrigger className="hidden"></PopoverTrigger>
          <PopoverContent className="w-80">
            {foundMovies?.results.slice(0, 5).map((movie) => {
              return <div>{movie.title}</div>;
            })}
            <Link href={`/search?value=${searchValue}`}>
              See all results for {searchValue}
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};