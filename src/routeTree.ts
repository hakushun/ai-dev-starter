import { createRootRoute, createRoute } from "@tanstack/react-router";
import { IndexPage } from "./pages/IndexPage";
import { AboutPage } from "./pages/AboutPage";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

export const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);
