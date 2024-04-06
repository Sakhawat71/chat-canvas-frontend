import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <div className="max-w-7xl mx-auto"> */}
                <Outlet></Outlet>
            {/* </div> */}
        </div>
    );
};

export default MainLayout;