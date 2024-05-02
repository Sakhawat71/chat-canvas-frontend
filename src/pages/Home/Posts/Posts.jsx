import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Posts = () => {

    return (
        <div className="container mx-auto border-4 mt-10">

            <Tabs className="flex gap-10">



                <div className="w-3/4">
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, obcaecati?</p>
                    </TabPanel>

                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem magni eos consectetur sed ipsum.</p>
                    </TabPanel>
                </div>

                <div className="w-1/4 border-black border">
                    <h3 className="text-[#44B584]">Related Tags</h3>
                    <TabList className='cursor-pointer'>
                        <Tab>Hello</Tab>
                        <Tab>Hola</Tab>
                    </TabList>
                </div>

            </Tabs>

        </div>
    );
};

export default Posts;