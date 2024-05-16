import { useState } from "react";
import Banner from "../Banner/Banner";
import Posts from "../Posts/Posts";
import { SearchForPosts } from "../../../utilities/post/SearchForPosts";
import { GridLoader } from "react-spinners";

const HomeLayout = () => {

    const [searchText, setSearchText] = useState('');
    const [searchPost, isLoading] = SearchForPosts(searchText);
    // console.log("searchPost function :",searchPost);

    if (isLoading) {
        <div>
            <GridLoader color="#36d7b7" />
        </div>
    }

    return (
        <div>
            <Banner
                key={'banner'}
                setSearchText={setSearchText}
            ></Banner>

            <Posts
                key={'posts_feed'}
                searchPost={searchPost}
            ></Posts>
        </div>
    );
};

export default HomeLayout;