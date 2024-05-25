import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Announcement from "../Announce/Announcement";
import { useLoaderData } from "react-router-dom";
import usePost from "../../../hooks/usePost";
import PostSection from "./PostSection/PostSection";
import useAnnounceCount from "../../../hooks/useAnnounceCount";
import { AwesomeButton } from "react-awesome-button";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

const Posts = ({ searchText }) => {

    // console.log('search text in posts ', searchText);

    const [announceCount] = useAnnounceCount(0);
    const [allPosts, setAllPosts] = useState([])
    const postCount = useLoaderData(0);


    // pagination
    const itemsParPage = 5;
    const totalPost = allPosts?.length;
    const totalPage = Math.ceil(totalPost / itemsParPage)
    const pages = [...Array(totalPage).keys()]
    const [currentPage, setCurrentPage] = useState(1)
    // console.log('current Page ', currentPage);

    const hendelPageChange = (preOrNext) => {
        if (preOrNext === 'pre' && currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
        if (preOrNext === 'next' && currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
            // console.log('next', pages.length)
        }
    }

    const [posts, refetch, isLoading] = usePost(searchText, currentPage - 1);
    // console.log("posts in usePost hook", posts);

    useEffect(() => {

        // if (searchPost.length) {
        //     setAllPosts(searchPost)
        // }
        // else {
        setAllPosts(posts)
        // }
        // searchText
    }, [posts, refetch])


    // tag

    const node = allPosts.filter(p => p.tag === "Node.js");
    const react = allPosts.filter(p => p.tag === "React");
    const graphQL = allPosts.filter(p => p.tag === "GraphQL");
    const css = allPosts.filter(p => p.tag === "CSS");


    // const [announceData] = useAnnounce([]);
    // console.log('announce data : ' ,announceData);


    return (
        <div className="container mx-auto mt-10 ">

            <Tabs className="flex gap-10">

                {/* post feed */}
                <div className="w-3/4">

                    <div className="py-2 px-4 border-2 rounded-lg justify-between bg-[#CBFFE9] flex items-center">
                        <h2 className=" font-semibold text-2xl">All Posts : {allPosts?.length}</h2>

                        <AwesomeButton
                            type="secondary"
                            className="bg-[#cbffe9]"
                        >Post now</AwesomeButton>
                    </div>

                    {
                        isLoading && <div className="flex mx-auto mt-10 justify-center items-center">
                            <GridLoader color="#36d7b7" />
                        </div>
                    }

                    {
                        isLoading || !posts.length && <div className="flex mx-auto justify-center items-center mt-10">
                            <p className="text-xl text-red-500">Sorry, No posts found for `{searchText}`</p>
                        </div>
                    }

                    <div>
                        <TabPanel>
                            <PostSection posts={allPosts}></PostSection>
                        </TabPanel>

                        <TabPanel>
                            <PostSection posts={node}></PostSection>
                        </TabPanel>

                        <TabPanel>
                            <PostSection posts={react}></PostSection>
                        </TabPanel>
                        <TabPanel>
                            <PostSection posts={graphQL}></PostSection>
                        </TabPanel>
                        <TabPanel>
                            <PostSection posts={css}></PostSection>
                        </TabPanel>
                    </div>



                    {/* ++++++++++++++++++  pagination ++++++++++++++++++++++++ */}
                    {/* allPosts.length > 5 && */}

                    <div className="join flex mx-auto justify-center space-x-3 mt-10">
                        <button
                            onClick={() => hendelPageChange('pre')}
                            className="join-item btn btn-outline"
                        >Prev</button>
                        {
                            pages?.map(page => <button
                                key={page}
                                className={currentPage === page + 1 ? `btn join-item bg-[#E58849] text-white` : 'btn join-item'}
                                onClick={() => setCurrentPage(page + 1)}
                            >{page + 1}</button>)
                        }
                        <button
                            onClick={() => hendelPageChange('next')}
                            className="join-item btn btn-outline"
                        >Next</button>
                    </div>

                    <div className="flex justify-center mt-5">
                        <p>Current page : {currentPage}</p>
                    </div>

                </div>


                {/* tag and announceMent section */}
                <div className="w-1/4 rounded-2xl top-10">

                    <h3 className="text-black font-semibold text-center text-xl border-b py-3 bg-[#cbffe9] border-[#44B584]">Related Tags</h3>

                    <TabList className='cursor-pointer flex p-4 flex-wrap space-x-2 border '>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>All Posts</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>Node.js</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>React</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>GraphQL</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>CSS</Tab>

                    </TabList>

                    {
                        announceCount ? <Announcement /> : null
                    }

                </div>

            </Tabs>

        </div>
    );
};

Posts.propTypes = {
    searchText: PropTypes.string,
};

export default Posts;