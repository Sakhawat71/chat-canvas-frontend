import { RiMenu2Line } from "react-icons/ri";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <RiMenu2Line className="text-xl"/>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item mobile</a></li>
                        <li><a>Item </a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Chat Canvas</a>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end ">

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Navbar;