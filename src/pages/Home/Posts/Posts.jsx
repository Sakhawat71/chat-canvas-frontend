import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Announcement from "../Announce/Announcement";
import { useLoaderData } from "react-router-dom";
import usePost from "../../../hooks/usePost";
import PostSection from "./PostSection/PostSection";
import useAnnounceCount from "../../../hooks/useAnnounceCount";
// import useAnnounce from "../../../hooks/useAnnounce";

const Posts = () => {

    const postCount = useLoaderData(0);
    // console.log(count);

    const [posts] = usePost([]);
    // console.log(posts);

    // refetch()

    const node = posts.filter(p => p.tag === "Node.js");
    const react = posts.filter(p => p.tag === "React");
    const graphQL = posts.filter(p => p.tag === "GraphQL");
    const css = posts.filter(p => p.tag === "CSS");


    // const [announceData] = useAnnounce([]);
    const [announceCount] = useAnnounceCount(0);
    // console.log('announce data : ' ,announceData);


    return (
        <div className="container mx-auto mt-10 ">

            <Tabs className="flex gap-10">


                <div className="w-3/4">

                    <div className="py-2 px-4 border-2 rounded-lg justify-between bg-[#CBFFE9] flex">
                        <h2 className=" font-semibold text-2xl">All Posts : {postCount}</h2>
                        <button
                            // onClick={()=> refetch()}
                            className="btn btn-outline btn-sm">Post</button>
                    </div>

                    <TabPanel>
                        <PostSection posts={posts}></PostSection>
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


                {/* tag and announceMent section */}
                <div className="w-1/4 border-[#7cd4ad] border sticky top-10">

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

export default Posts;