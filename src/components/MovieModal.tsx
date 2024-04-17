import { Movie } from "./MovieCard";

interface Props {
  element: HTMLAnchorElement;
  movie: Movie;
}

export default function MovieModal({ element, movie }: Props) {
  const position = element.getBoundingClientRect();

  //   console.log(position);

  return (
    <div
      className={`fixed z-50`}
      style={{
        left: `${position.x}px`,
        top: `${position.y + position.height}px`,
      }}
    >
      {movie.title}
    </div>
  );
}
