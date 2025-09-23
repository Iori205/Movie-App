import { FaStar } from "react-icons/fa";
type MovieType = {
  title: string;
  score: number | string;
  releaseYear: string;
  image: string
};

export const SearchSectionResult = ({
  title,
  score,
  releaseYear,
  image
}: MovieType) => {
  return (
    <div className="flex flex-col">
      <div className="w-[533px] h-[116px] flex items-center justify-center gap-4">
        <div className="bg-gray-800 w-[67px] h-25">
          {image}
        </div>
        <div className="w-[454px] h-[99px]">
          <div className="w-[454px] h-[51px]">
            <div className="w-full h-7 text-foreground text-xl font-semibold leading-7">
              {title}
            </div>
            <div className="w-full h-[23px] flex">
              <FaStar color="#FDE047" />
              <span className="text-sm font-medium leading-5 text-[#09090B]">
                {score}
                <span className="text-xs font-normal leading-6 text-[#71717A]">
                  /10
                </span>
              </span>
            </div>
            <p className="text-foreground text-sm font-medium leading-tight mt-3">
              {releaseYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
