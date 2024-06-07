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
import Pagination from "../../../components/Pagination/Pagination";
import usePostByTag from "../../../hooks/usePostByTag";

const Posts = ({ searchText }) => {

    const [announceCount] = useAnnounceCount(0);
    const [allPosts, setAllPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [posts, refetch, isLoading] = usePost(searchText, currentPage - 1);
    const postCount = useLoaderData(0);

    const hendelPageChange = (preOrNext) => {
        if (preOrNext === 'pre' && currentPage > 1) {
            setCurrentPage(currentPage - 1)
            refetch()
        }
        if (preOrNext === 'next' && currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
            refetch()
        }
    }


    // pagination
    const itemsParPage = 5;
    const totalPost = postCount;
    const totalPage = Math.ceil(totalPost / itemsParPage)
    const pages = [...Array(totalPage).keys()]


    useEffect(() => {
        setAllPosts(posts)
    }, [posts, refetch])


    // tag

    const [node] = usePostByTag('Node.js')
    const [react] = usePostByTag('React')
    const [ai] = usePostByTag("Ai")
    const [database] = usePostByTag("Database")
    const [express] = usePostByTag("express.js")
    const [backend] = usePostByTag("Backend")
    const [frontEnd] = usePostByTag("FrontEnd")
    const [bug] = usePostByTag("bug")
    const [whatsNew] = usePostByTag("new")
    const [css] = usePostByTag("CSS")


    // const [announceData] = useAnnounce([]);
    // console.log('announce data : ' ,announceData);

    const pagination = { hendelPageChange, pages, currentPage, setCurrentPage }

    return (
        <div className="container mx-auto mt-10 ">

            <Tabs className="flex gap-10">

                {/* post feed */}
                <div className="w-3/4">

                    <div className="py-2 px-4 border-2 rounded-lg justify-between bg-[#CBFFE9] flex items-center">
                        <h2 className=" font-semibold text-2xl">All Posts : {postCount}</h2>

                        <AwesomeButton
                            href="/dashboard/add-post"
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
                            <PostSection posts={allPosts} pagination={pagination}></PostSection>
                            <Pagination
                                hendelPageChange={hendelPageChange}
                                pages={pages}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </TabPanel>

                        <TabPanel>
                            <PostSection posts={node}></PostSection>
                        </TabPanel>

                        <TabPanel>
                            <PostSection posts={react}></PostSection>
                        </TabPanel>
                        <TabPanel>
                            <PostSection posts={ai}></PostSection>
                        </TabPanel>
                        <TabPanel>
                            <PostSection posts={css}></PostSection>
                        </TabPanel>
                        <TabPanel>
                            <PostSection posts={database}></PostSection>
                        </TabPanel>
                        <TabPanel>
                            <PostSection posts={express}></PostSection>
                        </TabPanel>
                        <TabPanel>
                            <PostSection posts={backend}></PostSection>
                        </TabPanel>
                        <TabPanel>
                            <PostSection posts={frontEnd}></PostSection>
                        </TabPanel>
                        <TabPanel>
                            <PostSection posts={bug}></PostSection>
                        </TabPanel>
                        <TabPanel>
                            <PostSection posts={whatsNew}></PostSection>
                        </TabPanel>

                    </div>

                </div>

                {/* tag and announceMent section */}
                <div className="w-1/4 rounded-2xl top-10">

                    <h3 className="text-black font-semibold text-center text-xl border-b py-3 bg-[#cbffe9] border-[#44B584]">Related Tags</h3>

                    <TabList className='cursor-pointer flex p-4 flex-wrap space-x-2 border '>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>All Posts</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>Node.js</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>React</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>Ai</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>CSS</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>Database</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>Express.js</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>Backend</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>FrontEnd</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>Bug</Tab>
                        <Tab className='hover:bg-lime-200 p-1 rounded-lg'>What`s New</Tab>

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