// ! poster path
export const POSTER_PATH = "https://image.tmdb.org/t/p/original";

// ! fetch movie lists
export async function fetchMovieLists(category: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDcyNzQzODBmMTVlYjdhOTE5OTY0YmE1YmM2NTQxMiIsInN1YiI6IjYxZmJiYjliNDE0MjkxMDExNTM0MTkzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UUVhVRV0LhFvh4jWhn6bsBJOtNOgpwmexuPK0JJEoDU",
    },
  };

  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    options
  );

  return await response.json();
}

// ! fetch a movie
export async function fetchMovie(movieId: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDcyNzQzODBmMTVlYjdhOTE5OTY0YmE1YmM2NTQxMiIsInN1YiI6IjYxZmJiYjliNDE0MjkxMDExNTM0MTkzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UUVhVRV0LhFvh4jWhn6bsBJOtNOgpwmexuPK0JJEoDU",
    },
  };

  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );

  return await response.json();
}
