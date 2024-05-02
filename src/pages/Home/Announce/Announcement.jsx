import { MdNotificationsActive } from "react-icons/md";

const Announcement = () => {


    return (
        <div>
            <hr className="my-5 border-2" />
            <h1 className="text-canvasThem text-2xl flex items-center justify-center">
                Announcement
                <MdNotificationsActive className="animate-ping mx-2"/>
            </h1>
            <hr className="my-2" />
        </div>
    );
};

export default Announcement;