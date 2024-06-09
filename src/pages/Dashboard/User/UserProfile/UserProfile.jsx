import { Link } from "react-router-dom";
import useMyPosts from "../../../../hooks/useMyPosts";
import useUserData from "../../../../hooks/useUserData";
import RecentPosts from "../../../../components/RecentPosts/RecentPosts";

const UserProfile = () => {

    const [userData] = useUserData();
    const { badge, creationTime, email, image, name } = userData;
    const date = creationTime?.slice(0, 16);
    const [{ posts }] = useMyPosts();
    const recentPosts = posts?.slice(0, 3)
    recentPosts?.map(post => console.log(post))
    // console.log(recentPosts);

    return (
        <div className="w-full p-5 ">

            <div className="w-full max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start">
                <div className="flex-shrink-0 md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
                    <img
                        src={image}
                        alt="user image"
                        className="w-48 h-48 rounded-full shadow-md"
                    />
                </div>
                <div className="md:w-2/3 md:pl-10">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-4">{name}</h1>
                    <p className="text-xl text-gray-500 mb-2">Badge: {badge}</p>
                    <p className="text-lg text-gray-600 mb-4">Email: {email}</p>
                    <div className="flex items-center bg-gray-100 rounded-full px-4 py-1 text-lg text-gray-600 gap-4">
                        <span>Member Since:</span>
                        <span>{date}</span>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto mt-20 mb-10">

                <h2 className="text-xl font-bold font-mono">My 3 Recent Posts</h2>

                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Tag</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recentPosts?.map(post => <RecentPosts key={post._id} post={post} />)
                        }
                    </tbody>
                </table>
            </div>

            {
                posts?.length > 3 &&
                <Link className="btn flex" to="/dashboard/my-posts">See All Post</Link>
            }

        </div>
    );
};

export default UserProfile;
