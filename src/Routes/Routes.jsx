import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Inception from "../pages/Inception/Inception";
import Mission from "../pages/Mission/Mission";
import Branches from "../pages/Branches/Branches";
import Policy from "../pages/Policy/Policy";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/inception",
        element: <Inception />,
      },
      {
        path: "/mission",
        element: <Mission />,
      },
      {
        path: "/branches",
        element: <Branches />,
      },
      {
        path: "/policy",
        element: <Policy />,
      },
    ],
  },
]);

export default routes
