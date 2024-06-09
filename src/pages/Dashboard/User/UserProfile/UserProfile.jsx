import useMyPosts from "../../../../hooks/useMyPosts";
import useUserData from "../../../../hooks/useUserData";

const UserProfile = () => {

    const [userData] = useUserData();
    const { badge, creationTime, email, image, name } = userData;
    const date = creationTime.slice(0, 16);
    const [{posts}] = useMyPosts();
    // console.log(posts);

    return (
        <div className="w-full p-5 flex items-center justify-center ">
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

            <div>

            </div>

        </div>
    );
};

export default UserProfile;
