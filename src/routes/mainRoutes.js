import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() => import("../pages/homePage/HomePage")),
  },
  {
    path: "/movies",
    name: "MoviesPage",
    exact: true,
    component: lazy(() => import("../pages/moviesPage/MoviesPage")),
  },
  {
    path: "/movies/:movieId",
    name: "MovieDetailsPage",
    exact: false,
    component: lazy(() => import("../pages/movieDetailsPage/MovieDetailsPage")),
  },
  {
    path: "",
    name: "NotFound",
    exact: false,
    component: lazy(() => import("../pages/notFound/NotFound")),
  },
];
