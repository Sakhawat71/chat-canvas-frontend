import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../pages/sign/Login/Login";
import Register from "../pages/sign/Register/Register";
import HomeLayout from "../pages/Home/HomeLayout/HomeLayout";
import Membership from "../pages/Membership/Membership";
import PostDetails from "../pages/Home/Posts/PostDetails/PostDetails";
import PrivetRoute from "./PrivetRoute";
import AdminRoute from "./AdminRoute";
import UserProfile from "../pages/Dashboard/User/userProfile/UserProfile";
import AddPost from "../pages/Dashboard/User/AddPost/AddPost";
import MyPosts from "../pages/Dashboard/User/MyPosts/MyPosts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
                loader: () => fetch(`http://localhost:5000/api/v1/post-count`)
            },
            {
                path: "/membership",
                element: <PrivetRoute> <Membership></Membership> </PrivetRoute>
            },
            {
                path: `/post-details/:id`,
                element: <PostDetails></PostDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/post-details/${params.id}`)
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/dashboard",
        element: <PrivetRoute> <Dashboard></Dashboard> </PrivetRoute>,
        children: [


            // user route
            {
                path: "my-profile",
                element: <UserProfile />,
            },
            {
                path: "add-post",
                element: <AddPost />
            },
            {
                path: "my-posts",
                element: <MyPosts />
            },


            // Admin route
            {
                path: 'admin-profile',
                element: <AdminRoute> <div>admin-profile</div> </AdminRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute> <div>manage-users</div> </AdminRoute> 
            },
            {
                path: 'reported-comments',
                element: <AdminRoute> <div>reported-comments</div> </AdminRoute> 
            },
            {
                path: 'make-announcement',
                element: <AdminRoute> <div>make-announcement</div> </AdminRoute> 
            },
            
        ]
    }
])

export default router;