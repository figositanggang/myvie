import { useEffect, useState } from "react";
import { fetchMovieLists } from "../scripts/MovieAPI";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";

export default function MovieListsPage() {
  let params = useParams();
  let [category, setCategory] = useState("");

  let [isLoaded, setIsLoaded] = useState(false);
  let [content, setContent] = useState<Array<any>>();

  useEffect(() => {
    setIsLoaded(false);

    if (params.category === undefined) {
      category = "now_playing";
      fetchMovieLists(category).then((response) => {
        setContent(response.results);
        setIsLoaded(true);
      });
    } else {
      category = params.category;
      fetchMovieLists(category!).then((response) => {
        setContent(response.results);
        setIsLoaded(true);
      });
    }

    switch (category) {
      case "now_playing":
        setCategory("Now Playing");
        break;
      case "popular":
        setCategory("Popular");
        break;
      case "top_rated":
        setCategory("Top Rated");
        break;
      case "upcoming":
        setCategory("Upcoming");
        break;

      default:
        break;
    }
  }, [params.category]);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="mb-40 flex flex-col items-center">
      <h1 id="category-title" className="my-6 text-3xl transition-all">
        {category}
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-4 gap-y-10 px-6">
        {content!.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
