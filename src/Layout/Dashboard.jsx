import { FadeLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const [isAdmin, isAdminLoading] = useAdmin()

    console.log(isAdmin);


    const adminLink = <>
        <li>
            <NavLink to={'admin-profile'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                Admin Profile
            </NavLink>
        </li>
        <li>
            <NavLink to={'manage-users'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                Manage Users
            </NavLink>
        </li>
        <li>
            <NavLink to={'reported-comments'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                Reported Comments
            </NavLink>
        </li>
        <li>
            <NavLink to={'make-announcement'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                Make Announcement
            </NavLink>
        </li>
    </>

    const userLink = <>

        <li>
            <NavLink to={'my-profile'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                My Profile
            </NavLink>
        </li>

        <li>
            <NavLink to={'add-post'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                Add Post
            </NavLink>
        </li>

        <li>
            <NavLink to={'my-posts'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
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
        <div className="flex border-2 gap-10">

            <div className="w-1/6 border-2 h-screen">
                <div>
                    <figure >
                        <img src="/src/assets/canvas-logo.png" alt="logo" className="w-10" />
                        <p>Chat Canvas</p>
                    </figure>
                </div>

                <ul className="space-y-3">
                    {isAdmin && adminLink}
                    {userLink}
                </ul>
            </div>

            <div className="w-5/6 border-2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;