import { RiMenu2Line } from "react-icons/ri";
import logo from "../../../assets/canvas-logo.png"
import { Link, NavLink } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../../../../src/App.css'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { ImSpinner6 } from "react-icons/im";
import { RemoveJwtToken } from "../../../utilities/api/jwtReletedUtilites";
import useAnnounceCount from "../../../hooks/useAnnounceCount";
import useUserData from "../../../hooks/useUserData";
import goldBadge from "../../../assets/badge_gold.png";
import bronzeBadge from "../../../assets/badge_bronze.png";

const Navbar = () => {

    const {
        user,
        logout,
        loading,
    } = useContext(AuthContext);

    const [userDataInDB] = useUserData();
    console.log(userDataInDB);

    const handelLogOut = () => {
        logout()
            .then(() => {
                RemoveJwtToken()
                console.log('user logout');
            })
            .catch(error => console.log('log out error :', error))
    }

    const [announceCount] = useAnnounceCount(0);
    // console.log(announceCount);

    const navLink = <>
        <li >
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
                }
            >Home</NavLink>
        </li>

        <li >
            <NavLink
                to="/membership"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584] font-semibold" : "text-black"
                }
            >Membership</NavLink>
        </li>

        <li >
            <NavLink
                // to="#"
                className="btn lg:btn-sm btn-ghost btn-circle"
            >
                <IoMdNotificationsOutline className="text-2xl mt-1" />
                {
                    announceCount ? <div className="indicator bottom-7 left-3">
                        <span className="animate-pulse badge badge-xs badge-primary indicator-item"></span>
                    </div>
                        :
                        <div></div>
                }
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


            {/* user => Profile or login */}
            <div className="navbar-end">

                {
                    user?.email
                        ?
                        <div className="dropdown dropdown-end dropdown-bottom flex items-center">

                            <div className="md:mr-5">
                                {
                                    userDataInDB?.badge === 'bronze' ? 
                                    <img className="w-8" src={bronzeBadge} alt="bronze Badge" title="non premium user" />
                                    :
                                    <img className="w-8" src={goldBadge} alt="gold Badge" />    
                                }
                            </div>

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-black border">
                                <div className="w-24 rounded-full">
                                    <img alt="User Profile Image" src={user?.photoURL} />
                                </div>
                            </div>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl space-y-2">

                                <li className="px-3">
                                    {user?.displayName}
                                </li>

                                <li className="hover:font-bold">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>

                                <li className="hover:font-bold">
                                    <button onClick={handelLogOut}>Logout</button>
                                </li>
                            </ul>

                        </div>
                        :

                        <Link to={loading ? '#' : '/login'} >
                            <AwesomeButton
                                type="secondary"
                                className="aws-btn"
                            >{loading ? <ImSpinner6 className="animate-spin" /> : 'Join US'}</AwesomeButton>

                        </Link>
                }

            </div>

        </div>
    );
};

export default Navbar;