import { MovieCard } from "@/components/MovieCard";

export default function Home() {
  return (
    <div>
      <MovieCard
        title="Dear sante"
        score={8}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXHAo4-7mWZhVyj84ZP3VHprmEjM-tmOCPw&s"
      ></MovieCard>
    </div>
  );
}
