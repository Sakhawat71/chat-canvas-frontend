import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../pages/sign/Login/Login";
import Register from "../pages/sign/Register/Register";
import HomeLayout from "../pages/Home/HomeLayout/HomeLayout";
import Membership from "../pages/Membership/Membership";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path: "/membership",
                element: <Membership></Membership>,
            }
        ]
    },
    {
        path:"/login",
        element: <Login></Login>  
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    }
])

export default router;