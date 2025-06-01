import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home";
import NotFound from "../pages/NotFound";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: '*',
        Component: NotFound
      }
    ],
  },
]);

export default router;
