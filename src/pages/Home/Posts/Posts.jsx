import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Announcement from "../Announce/Announcement";

const Posts = () => {

    return (
        <div className="container mx-auto border-4 mt-10">

            <Tabs className="flex gap-10">



                <div className="w-3/4">
                    <h2 className="text-canvasThem">All Posts</h2>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, obcaecati?</p>
                    </TabPanel>

                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem magni eos consectetur sed ipsum.</p>
                    </TabPanel>
                </div>

                <div className="w-1/4 border-black border px-4">
                    <h3 className="text-[#44B584] text-xl">Related Tags</h3>

                    <TabList className='cursor-pointer flex flex-wrap space-x-2'>

                        <Tab className='hover:bg-lime-200'>Hello</Tab>
                        
                        <Tab>Hola</Tab>
                        <Tab>Hola</Tab>
                        <Tab>Hola</Tab>
                        <Tab>Hola</Tab>
                        <Tab>Hola</Tab>
                        <Tab>Hola</Tab>
                        <Tab>Hola</Tab>
                        <Tab>Hola</Tab>
                        <Tab>Hola</Tab>

                    </TabList>

                    <Announcement></Announcement>

                </div>

            </Tabs>

        </div>
    );
};

export default Posts;