import { Link } from "react-router-dom";
import { POSTER_PATH } from "../scripts/MovieAPI";
import { useState } from "react";
import { createPortal } from "react-dom";
import MovieModal from "./MovieModal";

export interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [element, setElement] =
    useState<React.MouseEvent<HTMLAnchorElement, MouseEvent>>();

  return (
    <>
      <Link
        to={"/movie/" + movie.id}
        className="relative transition-all md:hover:!scale-110 md:hover:-translate-y-5 md:hover:z-50 text-center flex flex-col rounded-xl bg-black bg-opacity-0 text-white hover:bg-opacity-100 p-3 hover:text-white hover:rounded-none after:absolute after:w-full after:left-0 after:bottom-6 after:line-clamp-2 after:content-[attr(data-title)]"
        id="movie-card"
        data-title={movie.title}
        onMouseEnter={(e) => {
          setShowModal(true);
          setElement(e);
        }}
        onMouseLeave={() => {
          setShowModal(false);
        }}
      >
        <img
          src={POSTER_PATH + movie.poster_path}
          alt=""
          className="h-full w-full object-cover transition-all rounded-xl pointer-events-none"
        />
      </Link>
      {showModal &&
        createPortal(
          <MovieModal
            element={element!.target as HTMLAnchorElement}
            movie={movie}
          />,
          document.body
        )}
    </>
  );
}
