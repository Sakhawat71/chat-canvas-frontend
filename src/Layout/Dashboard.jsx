import { FadeLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin, isAdminLoading] = useAdmin()

    console.log(isAdmin);


    if (isAdminLoading) {
        return <div className="flex items-center justify-center h-screen w-screen">
            <FadeLoader />
        </div>
    }

    return (
        <div>
            <h2>deshboard</h2>
        </div>
    );
};

export default Dashboard;