import { Link } from "react-router-dom";
import errorImg from "../../assets/error.jpg"
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="">
            <div>
                <Link to="/" className="btn btn-outline hover:text-[#007DFE] hover:bg-white "><FaArrowLeft/> Home</Link>
            </div>

            <figure >
                <img
                    src={errorImg}
                    alt="error page image"
                    className="w-4/6 md:w-1/2 lg:w-1/3 mx-auto" />
            </figure>
        </div>
    );
};

export default ErrorPage;