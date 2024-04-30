
import AllPost from "../AllPost/AllPost";
import Banner from "../Banner/Banner";
import Tags from "../Tags/Tags";

const HomeLayout = () => {



    return (
        <div>
            <Banner></Banner>
            <div className="container md:flex mx-auto ">
                <div className="w-9/12 border">
                    <AllPost></AllPost>
                </div>
                <div className="w-3/12 border ">
                    <Tags></Tags>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;