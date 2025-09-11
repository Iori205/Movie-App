import React from "react";
import { ThemeMenu } from "../ui/ThemeMenu";
import { Genre } from "./list";
import { Input } from "../ui/input";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-[1440px] flex justify-between items-center p-3 mb-3 px-17 m-auto">
      <Link href="">
        <div className="flex gap-2">
          <img className="w-[16px] h-[16px]" src="images/Vector.png" alt="" />
          <h2 className="text-base font-bold leading-4 text-indigo-700">
            Movie Z
          </h2>
        </div>
      </Link>
      <div className="flex gap-3">
        <Genre></Genre>
        <Input placeholder="Shearch.." className="w-[379px] h-[36px]" />
      </div>
      <ThemeMenu />
    </div>
  );
};
