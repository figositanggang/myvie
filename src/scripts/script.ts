import { Movie } from "../components/MovieCard";

export function toggleTheme() {
  const html = document.documentElement;

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }
}

export function showMovieModal(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  const target = e.target as HTMLAnchorElement;

  console.log(target.style);
}
