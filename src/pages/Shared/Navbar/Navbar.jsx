import { RiMenu2Line } from "react-icons/ri";
import logo from "../../../assets/canvas-logo.png"
import { Link, NavLink } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../../../../src/App.css'

const Navbar = () => {

    let user = false;


    const navLink = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
                }
            >Home</NavLink>
        </li>

        <li>
            <NavLink
                to="/membership"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
                }
            >Membership</NavLink>
        </li>

        <li >
            <NavLink
                to="/n"
                className="btn lg:btn-sm btn-ghost btn-circle"
            >
                <IoMdNotificationsOutline className="text-2xl mt-1" />
                <div className="indicator bottom-7 left-3">
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
            </NavLink>
        </li>
    </>


    return (
        <div className="navbar bg-base-300 pr-5 md:pr-5 lg:px-10 mx-auto">

            <div className="navbar-start">

                {/* this is for small device */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <RiMenu2Line className="text-xl" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {
                            navLink
                        }
                    </ul>
                </div>

                {/* logo + name */}
                <Link to="/" className="btn btn-ghost text-xl">
                    <img
                        className="w-[24px]"
                        src={logo}
                        alt="chat canvas logo"
                    />
                    <span>Chat Canvas</span>
                </Link>
            </div>

            {/* this part for large device */}
            <div className="navbar-center hidden lg:flex">
                <ul className="text-lg menu menu-horizontal px-1 flex items-center">
                    {navLink}
                </ul>
            </div>


            {/*  */}
            <div className="navbar-end">

                {
                    user
                        ?
                        <div className="dropdown dropdown-end ">

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User Profile Image" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl space-y-2">

                                <li className="px-3">
                                    Profile Name
                                </li>

                                <li className="hover:font-bold">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>

                                <li className="hover:font-bold">
                                    <button>Logout</button>
                                </li>
                            </ul>

                        </div>
                        :
                        
                        <Link to={'/login'}>
                            <AwesomeButton
                                type="secondary"
                                className="aws-btn"
                            >Join US</AwesomeButton>
                        </Link>


                }

            </div>

        </div>
    );
};

export default Navbar;