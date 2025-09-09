import React from "react";
import { ThemeMenu } from "../ThemeMenu";
import { Genre } from "./MovieCard";
import { Input } from "./input";

export const Header = () => {
  return (
    <div className="w-[1440px] flex justify-between items-center p-3 mb-3 px-17 m-auto">
      <div className="flex gap-2">
        <img className="w-[16px] h-[16px]" src="images/Vector.png" alt="" />
        <h2 className="text-base font-bold leading-4 text-indigo-700">
          Movie Z
        </h2>
      </div>
      <div className="flex gap-3">
        <Genre></Genre>
        <Input placeholder="Shearch.." className="w-[379px] h-[36px]" />
      </div>
      <ThemeMenu />
    </div>
  );
};
