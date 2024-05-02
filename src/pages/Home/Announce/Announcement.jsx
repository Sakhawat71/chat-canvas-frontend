import { MdNotificationsActive } from "react-icons/md";

const Announcement = () => {


    return (
        <div>
            <hr className="my-2 border-2" />
            <h1 className="text-canvasThem text-2xl flex items-center justify-center my-2">
                Announcement
                <MdNotificationsActive className="animate-ping items-center ml-2"/>
            </h1>
            {/* <hr className="my-2" /> */}
        </div>
    );
};

export default Announcement;