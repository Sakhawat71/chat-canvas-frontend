import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Announcement from "../Announce/Announcement";
import { useLoaderData } from "react-router-dom";
import usePost from "../../../hooks/usePost";
import PostSection from "./PostSection/PostSection";

const Posts = () => {

    const count = useLoaderData();
    // console.log(count);

    const [posts, refetch] = usePost([]);
    // console.log(posts);

    const react = posts.filter(p => p.tag === "React")
    // console.log("react ", react);


    return (
        <div className="container mx-auto mt-10">

            <Tabs className="flex gap-10">


                <div className="w-3/4">

                    <div className="py-2 border-2 justify-between bg-gray-100 flex">
                        <h2 className="text-canvasThem text-2xl">All Posts : {count}</h2>
                        <button
                            // onClick={()=> refetch()}
                            className="btn btn-outline btn-sm">Post</button>
                    </div>

                    <TabPanel>
                        <PostSection posts={posts}></PostSection>
                    </TabPanel>

                    <TabPanel>
                        <PostSection posts={react}></PostSection>
                    </TabPanel>

                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem magni eos consectetur sed ipsum.</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem magni eos consectetur sed ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem magni eos consectetur sed ipsum. Iusto exercitationem magni eos consectetur sed ipsum.</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem magni eos consectetur sed ipsum. Iusto exercitationem magni eos consectetur sed ipsum.</p>
                    </TabPanel>
                </div>


                {/* tag and announceMent section */}
                <div className="w-1/4 border-[#44B584] border ">

                    <h3 className="text-black font-semibold text-center text-xl border-b py-3 bg-[#cbffe9] border-[#44B584]">Related Tags</h3>

                    <TabList className='cursor-pointer flex p-4 flex-wrap space-x-2 '>
                        <Tab>All Posts</Tab>
                        <Tab className='hover:bg-lime-200'>Node.js</Tab>
                        <Tab>React</Tab>
                        <Tab>GraphQL</Tab>
                        <Tab>CSS</Tab>

                    </TabList>

                    <Announcement></Announcement>

                </div>

            </Tabs>

        </div>
    );
};

export default Posts;