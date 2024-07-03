import { FadeLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/canvas-logo.png"
import { CgProfile } from "react-icons/cg";
import { MdOutlineArticle, MdOutlineManageAccounts, MdPostAdd } from "react-icons/md";
import { FaCommentSlash, FaUsers } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";


const Dashboard = () => {

    const [isAdmin, isAdminLoading] = useAdmin()

    // console.log(isAdmin);


    const adminLink = <>
        <li>
            <NavLink to={'admin-profile'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                <span className="flex items-center gap-2">
                    <MdOutlineManageAccounts />
                    Admin Profile
                </span>
            </NavLink>
        </li>
        <li>
            <NavLink to={'manage-users'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                <span className="flex items-center gap-2">
                    <FaUsers />
                    Manage Users
                </span>
            </NavLink>
        </li>
        <li>
            <NavLink to={'reported-comments'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                <span className="flex items-center gap-2">
                    <FaCommentSlash />
                    Reported Comments
                </span>
            </NavLink>
        </li>
        <li>
            <NavLink to={'make-announcement'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                <span className="flex items-center gap-2">
                    < TfiAnnouncement />
                    Announcement
                </span>
            </NavLink>
        </li>
    </>

    const userLink = <>

        <li>
            <NavLink to={'my-profile'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>

                <span className="flex items-center gap-2">
                    <CgProfile />
                    My Profile
                </span>
            </NavLink>
        </li>

        <li>
            <NavLink to={'add-post'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                <span className="flex items-center gap-2">
                    <MdPostAdd />
                    Add Post
                </span>
            </NavLink>
        </li>

        <li>
            <NavLink to={'my-posts'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-gray-700"
            }>
                <span className="flex items-center gap-2">
                    <MdOutlineArticle />
                    My Posts
                </span>
            </NavLink>
        </li>

    </>

    if (isAdminLoading) {
        return <div className="flex items-center justify-center h-screen w-screen">
            <FadeLoader />
        </div>
    }

    return (
        <div className="flex gap-10 container mx-auto min-h-screen">

            <div className="w-3/12 pt-10 bg-slate-50 shadow-2xl rounded-2xl font-roboto ">
                <Link to="/">
                    <figure className=" mx-auto text-center">
                        <img
                            src={logo}
                            alt="logo" className="w-10 mx-auto" />
                        <p className="font-bold pt-1">Chat Canvas</p>
                    </figure>
                </Link>

                <ul className="space-y-3 py-10 mx-5 font-semibold text-xl ">


                    {isAdmin && <div>
                        <hr />
                        <p className="text-2xl font-semibold text-gray-400 text-center uppercase">Admin</p>
                        <hr />
                    </div>}

                    {isAdmin && adminLink}

                    <hr className="py-2" />
                    <hr />

                    {userLink}

                    <hr className=" py-2" />
                    <hr />

                </ul>
            </div>

            <main className="w-9/12 bg-slate-50 shadow-2xl rounded-2xl">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Dashboard;