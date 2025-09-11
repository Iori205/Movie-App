"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselApi,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// type BigCardProps = {
//   score:number;
//   text:string;

// }

export const BigCard = () => {
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
      <div className="flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`rounded-full size-4 ${
              index + 1 === current ? "bg-white" : "bg-black"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

// "use client";
// import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselApi,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function MovieCard() {
//   const [api, setApi] = React.useState<CarouselApi>();
//   const [current, setCurrent] = React.useState(0);
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     if (!api) {
//       return;
//     }

//     setCount(api.scrollSnapList().length);
//     setCurrent(api.selectedScrollSnap() + 1);

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1);
//     });
//   }, [api]);

//   return (
//     <>
//       <Carousel setApi={setApi} className="w-screen">
//         <CarouselContent>
//           {Array.from({ length: 5 }).map((_, index) => (
//             <CarouselItem key={index}>
//               <div className="p-1">
//                 <Card>
//                   <CardContent className="flex aspect-video max-h-[600px] items-center justify-center p-6">
//                     <span className="text-4xl font-semibold">{index + 1}</span>
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="left-13" />
//         <CarouselNext className="right-13" />
//       </Carousel>
//       <div className="flex gap-2">
//         {Array.from({ length: count }).map((_, index) => (
//           <div
//             onClick={() => {
//               api?.scrollTo(index);
//             }}
//             key={index}
//             className={`rounded-full size-4 ${
//               index + 1 === current ? "bg-white" : "bg-gray-600"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </>
//   );
// }
