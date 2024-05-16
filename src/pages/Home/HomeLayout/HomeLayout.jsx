import { useState } from "react";
import Banner from "../Banner/Banner";
import Posts from "../Posts/Posts";
import { SearchForPosts } from "../../../utilities/post/SearchForPosts";

const HomeLayout = () => {

    const [searchText, setSearchText] = useState('');
    const [searchPost] = SearchForPosts(searchText);
    // console.log("searchPost function :",searchPost);

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