import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../Layout/Dashboard";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    }
])

export default router;