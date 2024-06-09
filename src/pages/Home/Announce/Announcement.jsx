import { MdNotificationsActive } from "react-icons/md";
import useAnnounce from "../../../hooks/useAnnounce";

const Announcement = () => {

    const [announceData] = useAnnounce()
    const announce = announceData ? announceData[0] : [];
    const {photo,name,title,description} = announce;

    return (
        <div>
            <hr className="my-2 border-2" />
            <h1 className="text-canvasThem text-2xl flex items-center justify-center my-2">
                Announcement
                <MdNotificationsActive className="animate-ping items-center ml-2" />
            </h1>


            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center mb-4">
                        <div className="avatar">
                            <figure className="w-16 rounded">
                                <img src={announce && photo} alt="Admin photo" />
                            </figure>
                        </div>
                        <div className="ml-4">
                            <h2 className="text-lg font-semibold">{name}</h2>
                        </div>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default Announcement;