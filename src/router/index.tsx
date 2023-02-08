import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Create } from "../pages/Create";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/create",
        element: <Create />,
    },
]);
