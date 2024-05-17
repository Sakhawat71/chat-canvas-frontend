import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Announcement from "../Announce/Announcement";
// import { useLoaderData } from "react-router-dom";
import usePost from "../../../hooks/usePost";
import PostSection from "./PostSection/PostSection";
import useAnnounceCount from "../../../hooks/useAnnounceCount";
import { AwesomeButton } from "react-awesome-button";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

const Posts = ({ searchPost }) => {

    const [allPosts, setAllPosts] = useState([])
    // const postCount = useLoaderData(0);
    const [announceCount] = useAnnounceCount(0);


        // pagination
        const itemsParPage = 5;
        const totalPost = allPosts.length;
        // const totalPost = 50;
        const totalPage = Math.ceil(totalPost / itemsParPage)
        const pages = [...Array(totalPage).keys()]
        const [currentPage, setCurrentPage] = useState(1)
        console.log('current Page ', currentPage);
        
        const hendelPageChange = (preOrNext) => {
            if (preOrNext === 'pre' && currentPage > 1) {
                setCurrentPage(currentPage - 1)
            }
            if (preOrNext === 'next' && currentPage < pages.length) {
                setCurrentPage(currentPage + 1)
                console.log('next',pages.length)
            }
        }

    const [posts, refetch, isLoading] = usePost(currentPage);

    useEffect(() => {

        if (searchPost.length) {
            setAllPosts(searchPost)
        }
        else {
            setAllPosts(posts)
        }

    }, [searchPost, posts, refetch])









    // console.log(" api posts ", posts);
    // console.log("search posts", searchPost);
    // console.log('posts search + all', allPosts);

    // tag
    
    // const [posts, refetch, isLoading] = usePost(currentPage,itemsParPage);
    const node = allPosts.filter(p => p.tag === "Node.js");
    const react = allPosts.filter(p => p.tag === "React");
    const graphQL = allPosts.filter(p => p.tag === "GraphQL");
    const css = allPosts.filter(p => p.tag === "CSS");


    // const [announceData] = useAnnounce([]);
    // console.log('announce data : ' ,announceData);

    if (isLoading) {
        <GridLoader color="#36d7b7" />
    }

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
                    {
                        allPosts.length > 5 && <div className="join flex mx-auto justify-center space-x-3 my-10">
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
                    }
                    <p>{currentPage}</p>
                </div>


                {/* tag and announceMent section */}
                <div className="w-1/4 rounded-2xl top-10">

                    <h3 className="text-black font-semibold text-center text-xl border-b py-3 bg-[#cbffe9] border-[#44B584]">Related Tags</h3>

                    <TabList className='cursor-pointer flex p-4 flex-wrap space-x-2 border '>
                        <Tab>All Posts</Tab>
                        <Tab className='hover:bg-lime-200'>Node.js</Tab>
                        <Tab>React</Tab>
                        <Tab>GraphQL</Tab>
                        <Tab>CSS</Tab>

                    </TabList>

                    {
                        announceCount ? <Announcement></Announcement> : <div></div>
                    }

                </div>

            </Tabs>

        </div>
    );
};

Posts.propTypes = {
    searchPost: PropTypes.array.isRequired,
};

export default Posts;