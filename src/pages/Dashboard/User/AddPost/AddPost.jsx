import { useForm } from "react-hook-form";
import useUserData from "../../../../hooks/useUserData";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useMyPosts from "../../../../hooks/useMyPosts"
import LimitPosts from "../../../../components/LimitPosts/LimitPosts";
import { AwesomeButton } from "react-awesome-button";

const AddPost = () => {

    const { register, handleSubmit, reset } = useForm()
    const [user] = useUserData()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [, postCount] = useMyPosts()

    const author = {
        image: user?.image,
        name: user?.name,
        email: user?.email
    }

    const onSubmit = async (info) => {

        const postData = {
            author,
            post: {
                title: info.title,
                description: info.description
            },
            tag: info.tag,
            upvote: 0,
            downvote: 0,
            postTime: new Date,
        }

        const res = await axiosSecure.post('/api/v1/add-post', postData)
        if (res.data.insertedId) {
            reset()
            toast.success("Post submitted successfully!")
            navigate('/dashboard/my-posts')
        }
    }

    let limit;

    if (user.badge === "bronze") {
        limit = 5;

        if (postCount < limit) {
            console.log('you can post now');
        }
        else {
            return <LimitPosts />
        }
    }

    return (
        <div className="p-5">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" p-2 rounded-lg" >

                {user?.badge === 'bronze' && (
                    <div className="flex w-full pb-5">
                        <div className="grid h-20 flex-grow card bg-gradient-to-r from-yellow-50 to-yellow-100 text-black rounded-lg shadow-lg place-items-center">
                            <p className="text-lg font-semibold">Your Post Limit: <span className="font-bold">{limit}</span></p>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 flex-grow card bg-gradient-to-r from-blue-50 to-blue-100 text-black rounded-lg shadow-lg place-items-center">
                            <p className="text-lg font-semibold">Your Posts: <span className="font-bold">{postCount}</span></p>
                        </div>
                    </div>
                )}


                <h2 className="text-2xl font-semibold text-center">Add Now Post</h2>

                {/* ****** Post Title ****** */}
                <label className="space-y-3">

                    <div className="label">
                        <span className="label-text text-xl font-semibold">Post Title*</span>
                    </div>
                    <input
                        placeholder="Post Title"
                        className="input input-bordered w-full "
                        {...register("title")}
                        required
                    />
                </label>

                <div className="flex items-center gap-10 mt-4">

                    {/* ***** tag ***** */}
                    <label className="space-y-3 w-1/3 flex">
                        <div className="label">
                            <span className="label-text text-xl font-semibold pr-2">Tag*: </span>
                        </div>
                        <select
                            {...register("tag")}
                            className="select w-full"
                            required
                            defaultValue={"disabled"}
                        >

                            {/* <option disabled selected value="disabled">TAG</option> */}
                            <option value="React">React</option>
                            <option value="Node.js">Node.js</option>
                            <option value="CSS">CSS</option>
                            <option value="Database">Database</option>
                            <option value="express.js">express.js</option>
                            <option value="Backend">Backend</option>
                            <option value="FrontEnd">FrontEnd</option>
                            <option value="bug">Bug</option>
                            <option value="new">what`s new</option>
                            <option value="ai">Ai</option>

                        </select>
                    </label>
                </div>

                {/* ************ Post Description ************* */}
                <label className="form-control space-y-3 mt-2 w-full ">
                    <div className="label">
                        <span className="label-text text-xl font-semibold">Post Description*</span>
                    </div>

                    <textarea
                        {...register('description')}
                        placeholder="Post Description"
                        className="textarea textarea-bordered textarea-lg w-full"
                        required
                    ></textarea>
                </label>


                <button
                    className="mt-5"
                    type="submit"
                >
                    <AwesomeButton className="w-28" type="secondary" >Post</AwesomeButton>
                </button>

            </form>
        </div>

    );
};

export default AddPost;