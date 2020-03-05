import Home from "../pages/home";
import DetailBook from "../pages/detailBook";
import Login from "../pages/login";

export const routers = [
  {
    name: "Introduce",
    path: "/",
    exact: true,
    component: Login
  },
  {
    name: "Home",
    path: "/home",
    exact: true,
    component: Home
  },
  {
    name: "Detail",
    path: "/detail/:id",
    exact: true,
    component: DetailBook
  }
];
