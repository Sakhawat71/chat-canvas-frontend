import useUserData from "../../../../hooks/useUserData";

const UserProfile = () => {

    const [userData] = useUserData();
    const { badge, creationTime, email, image, name } = userData;

    return (
        <div className="border-2 p-10">

            <figure className=" ">
                <img
                    src={image}
                    alt="user image"
                    className="w-32 mx-auto"
                />
            </figure>
            <div className="p-10 bg-white">
                <p>Name: {name}</p>
                <p>Badges: {badge}</p>
                <p>Email: {email}</p>
                <p>creation Time : {creationTime}</p>
            </div>
        </div>
    );
};

export default UserProfile;
