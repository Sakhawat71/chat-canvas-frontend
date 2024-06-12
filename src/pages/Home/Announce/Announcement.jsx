import { MdNotificationsActive } from "react-icons/md";
import useAnnounce from "../../../hooks/useAnnounce";
import { GrAnnounce } from "react-icons/gr";

const Announcement = () => {

    const [announceData] = useAnnounce();
    const announce = announceData ? announceData[0] : [];
    const { photo, name, title, description } = announce;

    const sliceTitel = title?.slice(0, 50);
    const sliceName = name?.slice(0, 19);
    const sliceDescription = description?.slice(0, 150);

    return (
        <div>
            <hr className="my-2 border-2" />
            <h1 className="text-canvasThem text-2xl flex items-center justify-center my-2 gap-1">
                < GrAnnounce />
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
                            <h2 className="text-lg font-semibold">
                                {name?.length < 19 ? name : <span>{sliceName} ...</span> }
                            </h2>
                        </div>
                    </div>
                    <h2 className="card-title">
                        {title?.length < 50 ? title : <span>{sliceTitel}...</span>}
                    </h2>
                    <p>
                        {description?.length < 150 ? description : <span>{sliceDescription} ...</span>}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Announcement;