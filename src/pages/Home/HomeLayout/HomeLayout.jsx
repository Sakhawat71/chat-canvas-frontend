import { useState } from "react";
import Banner from "../Banner/Banner";
import Posts from "../Posts/Posts";

const HomeLayout = () => {

    const [searchText, setSearchText] = useState('');

    return (
        <div>
            <Banner
                key={'banner'}
                setSearchText={setSearchText}
            ></Banner>

            <Posts
                key={'posts_feed'}
                searchText={searchText}
            ></Posts>
        </div>
    );
};

export default HomeLayout;