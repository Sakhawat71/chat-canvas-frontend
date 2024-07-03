import PostTable from "../../../../components/PostTable/PostTable";
import useMyPosts from "../../../../hooks/useMyPosts";

const MyPosts = () => {

    const [postData, , refetch] = useMyPosts()
    const { postCount, posts } = postData;

    return (
        <div className="p-10">

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold ">My Posts</h2>
                <h2>{postCount} posts</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Post Title</th>
                            <th className="px-4 py-2">Votes</th>
                            <th className="px-4 py-2">Comments</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="space-y-3 ">
                        {
                            posts?.map(post => <PostTable key={post._id} post={post} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPosts;