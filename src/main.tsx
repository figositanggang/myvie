import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import ErrorPage from "./pages/ErrorPage.tsx";
import MovieDetailPage from "./pages/MovieDetailPage.tsx";
import MovieListsPage from "./pages/MovieListsPage.tsx";
import MainPage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MovieListsPage />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetailPage />,
      },
      {
        path: "/:category",
        element: <MovieListsPage />,
        errorElement: <h1>Not Found</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
