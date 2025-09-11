import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { FaChevronRight } from "react-icons/fa";

import Link from "next/link";

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
  let array = [
    "Action",
    "Adventure",
    " Western",
    "Sci-Fi",
    "Romance",
    " Short ",
    "Western ",
    "Sport",
    "Talk-Show",
    "Thriller",
    " War ",
    " History ",
    "Music",
    "Mystery",
    "News",
    " Reality-TV ",
    " Family",
    " Fantasy",
    "  Game-Show ",
    " Film-Noir",
    " Amimation",
    "Biography",
    "Comedy",
    "Documentary ",
    "Crime",
    "Drama ",
    "Family",
  ];
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="border-1">
              Genre
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="pl-2">
                <div className="text-[24px] font-semibold">Genre</div>
                <div className="pb-5 pt-2 text-[16px]">
                  See lists of movies by genre
                </div>
              </div>

              <div className="flex flex-wrap w-[577px] h-[333px] items-center gap-2">
                {array.map((index) => {
                  return (
                    <NavigationMenuLink
                      key={index}
                      className="border border-[#E4E4E7] "
                      href="/genre"
                    >
                      <div className="flex items-center gap-2 ">
                        <span className="text-[12px] font-semibold">
                          {index}
                        </span>
                        <FaChevronRight
                          color="#09090B"
                          className="w-[12px] h-[12px]"
                        />
                      </div>
                    </NavigationMenuLink>
                  );
                })}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
