import { FadeLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";
import { NavLink } from "react-router-dom";

const Dashboard = () => {

    const [isAdmin, isAdminLoading] = useAdmin()

    console.log(isAdmin);


    const adminLink = <>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                Admin Profile
            </NavLink>
        </li>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                Manage Users
            </NavLink>
        </li>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                Reported Comments
            </NavLink>
        </li>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                Make Announcement
            </NavLink>
        </li>
    </>
    
    const userLink = <>

        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                My Profile
            </NavLink>
        </li>

        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
            }>
                Add Post
            </NavLink>
        </li>

        <li>
            <NavLink className={({ isActive, isPending }) =>
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
        <div>

            <ul className="space-y-3">
                {adminLink}
                {userLink}
            </ul>

        </div>
    );
};

export default Dashboard;