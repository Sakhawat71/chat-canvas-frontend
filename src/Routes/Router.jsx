import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../Layout/Dashboard";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../pages/sign/Login/Login";
import Register from "../pages/sign/Register/Register";

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