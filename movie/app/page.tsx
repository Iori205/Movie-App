import { BigCard } from "@/components/home/MovieCard";
import Popular from "@/components/home/Popular";
import TopRated from "@/components/home/Top-Rated";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UpComing from "@/components/home/Upcoming";
import { GrLinkNext } from "react-icons/gr";

export default function Home() {
  return (
    <div className="w-[1440px] m-auto">
      <div>
        <div>
          <BigCard></BigCard>
        </div>
        <div className="h-[52px]"></div>
        <div>
          <div>
            <div className="flex justify-between px-[80px] pb-8">
              <p className="text-2xl leading-8 font-semibold text-[#09090B]">
                Upcoming
              </p>
              <Link href="/See-more">
                <Button className="hv: bg-neutral-200" variant="outline">
                  See more
                  <GrLinkNext />
                </Button>
              </Link>
            </div>
            <UpComing />
          </div>
          {/*  */}
          <div>
            <div className="flex justify-between px-[80px] py-8">
              <p className="text-2xl leading-8 font-semibold text-[#09090B]">
                Popular
              </p>
              <Button className="hv: bg-neutral-200" variant="outline">
                See more
                <GrLinkNext />
              </Button>
            </div>
            <Popular />
          </div>
          {/*  */}
          <div>
            <div className="flex justify-between  px-[80px] py-8">
              <p className="text-2xl leading-8 font-semibold text-[#09090B]">
                Top Rated
              </p>
              <Button className="hv: bg-neutral-200" variant="outline">
                See more
                <GrLinkNext />
              </Button>
            </div>
            <TopRated />
          </div>
        </div>
      </div>
    </div>
  );
}
