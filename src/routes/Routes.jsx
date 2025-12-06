import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Rent from "../pages/Rent";
import { Sell } from "../pages/Sell";
import { Agents } from "../pages/Agents";
import { Blogs } from "../pages/Blogs";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import MainLayout from "../layouts/MainLayout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/reviews.json')
            },
            {
                path: '/rent',
                element: <Rent />
            },
            {
                path: '/sell',
                element: <Sell />
            },
            {
                path: '/agents',
                element: <Agents />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
        ]
    },
    {
        path: '/sign-in',
        element: <Signin />
    },
    {
        path: '/sign-up',
        element: <Signup />
    },
]);

export default routes;