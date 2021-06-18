import { lazy } from "react";

export const movieDetailsPageRoutes = [
  {
    path: "/movies/:movieId/cast",
    name: "Cast",
    exact: false,
    component: lazy(() => import("../pages/cast/Cast")),
  },
  {
    path: "/movies/:movieId/reviews",
    name: "Reviews",
    exact: false,
    component: lazy(() => import("../pages/reviews/Reviews")),
  },
];
