import { FadeLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/canvas-logo.png"

const Dashboard = () => {

    const [isAdmin, isAdminLoading] = useAdmin()

    // console.log(isAdmin);


    const adminLink = <>
        <li>
            <NavLink to={'admin-profile'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                Admin Profile
            </NavLink>
        </li>
        <li>
            <NavLink to={'manage-users'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                Manage Users
            </NavLink>
        </li>
        <li>
            <NavLink to={'reported-comments'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                Reported Comments
            </NavLink>
        </li>
        <li>
            <NavLink to={'make-announcement'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                Make Announcement
            </NavLink>
        </li>
    </>

    const userLink = <>

        <li>
            <NavLink to={'my-profile'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                My Profile
            </NavLink>
        </li>

        <li>
            <NavLink to={'add-post'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                Add Post
            </NavLink>
        </li>

        <li>
            <NavLink to={'my-posts'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                My Posts
            </NavLink>
        </li>

    </>

    if (isAdminLoading) {
        return <div className="flex items-center justify-center h-screen w-screen">
            <FadeLoader />
        </div>
    }

    return (
        <div className="flex gap-10 container mx-auto">

            <div className="w-3/12 h-screen pt-10 bg-slate-50">
                <Link to="/">
                    <figure className=" mx-auto text-center">
                        <img
                            src={logo}
                            alt="logo" className="w-10 mx-auto" />
                        <p className="font-bold pt-1">Chat Canvas</p>
                    </figure>
                </Link>

                <ul className="space-y-3 py-10 ml-5 font-semibold text-xl ">
                    
                    <hr />

                    {isAdmin && adminLink}

                    <hr className="py-2" />

                    {userLink}

                    <hr className=" py-2" />

                </ul>
            </div>

            <div className="w-9/12 bg-slate-50">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;