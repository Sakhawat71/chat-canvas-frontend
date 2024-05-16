import Banner from "../Banner/Banner";
import Posts from "../Posts/Posts";

const HomeLayout = () => {


    return (
        <div>
            <Banner
                key={'banner'}
                // setSearchData={setSearchData}
            ></Banner>
            <Posts></Posts>
        </div>
    );
};

export default HomeLayout;