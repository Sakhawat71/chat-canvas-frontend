import { useForm } from "react-hook-form";
import useUserData from "../../../../hooks/useUserData";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddPost = () => {

    const { register, handleSubmit ,reset} = useForm()
    const [user] = useUserData()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const author = {
        image : user?.image,
        name : user?.name,
        email : user?.email
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

        const res  = await axiosSecure.post('/api/v1/add-post', postData)
        if(res.data.insertedId){
            reset()
            toast.success("Post submitted successfully!")
            navigate('/dashboard/my-posts')
        }
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-[#F3F3F3] p-10 rounded-lg" >


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
                    <label className="space-y-3 w-1/2">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Tag*</span>
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
                    className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white font-bold text-xl mt-5"
                    type="submit"
                >
                    Post
                </button>

            </form>
        </div>
    );
};

export default AddPost;