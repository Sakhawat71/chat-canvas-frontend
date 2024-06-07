import { useForm } from "react-hook-form";
import useUserData from "../../../../hooks/useUserData";

const AddPost = () => {

    const { register, handleSubmit } = useForm()
    const [user] = useUserData()
    // console.log(user);

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

        console.log(postData);

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

                            <option disabled selected value="disabled">TAG</option>
                            <option value="salad">Salad</option>
                            <option value="pissa">Pissa</option>
                            <option value="soup">Soup</option>
                            <option value="drinks">Drinks</option>
                            <option value="dessert">Dessert</option>

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