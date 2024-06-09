import { FaRegCommentDots, FaRegUser } from "react-icons/fa";
import useAdminStats from "../../../../hooks/useAdminStats";
import useUserData from "../../../../hooks/useUserData";
import { MdOutlineArticle } from "react-icons/md";

const AdminProfile = () => {

    const [stats] = useAdminStats();
    const [userData] = useUserData();

    return (
        <div className="h-screen">

            <div className="w-full max-w-6xl bg-[#F8FAFC] border rounded-lg shadow-md flex flex-col items-center p-6">
                
                <div className="flex justify-center mb-6">
                    <img
                        src={userData?.image}
                        alt="Admin Profile"
                        className="w-32 h-32 rounded-full shadow-md"
                    />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">{userData?.name}</h1>
                    <p className="text-lg text-gray-600 mb-2">Email: {userData?.email}</p>

                </div>
            </div>


            <div className="diffstats shadow p-6 ">

                <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1 text-center">

                    <div className="diffstat place-items-center bg-white p-4 rounded-lg shadow-md">
                        <div className="diffstat-title text-lg font-semibold text-gray-800">Number of Posts</div>
                        <div className="diffstat-value text-2xl font-bold text-indigo-500 flex items-center justify-center gap-2">
                            {stats?.NumOfPosts}
                            <MdOutlineArticle />
                        </div>
                        <div className="diffstat-desc text-gray-500">Total posts created by users</div>
                    </div>

                    <div className="diffstat place-items-center bg-white p-4 rounded-lg shadow-md">
                        <div className="diffstat-title text-lg font-semibold text-gray-800">Number of Comments</div>
                        <div className="diffstat-value text-2xl font-bold text-indigo-500 flex items-center justify-center gap-2">
                            {stats?.NumOfComments}
                            <FaRegCommentDots />
                        </div>
                        <div className="diffstat-desc text-gray-500">Total comments on posts</div>
                    </div>

                    <div className="diffstat place-items-center bg-white p-4 rounded-lg shadow-md">
                        <div className="diffstat-title text-lg font-semibold text-gray-800">Number of Users</div>
                        <div className="diffstat-value text-2xl font-bold text-indigo-500 flex items-center justify-center gap-2">
                            {stats?.NumOfUser}
                            <FaRegUser />
                        </div>
                        <div className="diffstat-desc text-gray-500">Total registered users</div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default AdminProfile;