import HomePage from "@pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const RouterDOM = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default RouterDOM;
