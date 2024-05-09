import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import { CiShoppingTag } from "react-icons/ci";
import { FacebookShareButton, LinkedinShareButton } from "react-share";

const PostDetails = () => {

    const postData = useLoaderData([]);
    const { author, postTime, post, upvote, downvote, tag } = postData;
    console.log(postData);

    const postDate = postTime.split("T")[0];
    // console.log(postDate);

    return (
        <div className="container mx-auto px-5 bg-stone-50">

            {/* author and posted time */}
            <div className="bg-stone-100 flex items-center border my-5 justify-between px-5">

                <div className="flex items-center">
                    <figure>
                        <img
                            className="w-16 border rounded-full"
                            src={author?.image}
                            alt="author image" />
                    </figure>

                    <h2 className="font-bold text-xl pl-2">{author?.name}</h2>
                </div>

                <p className="">Posted on : {postDate}</p>
            </div>

            {/* post body */}
            <div className="border text-center">

                <h2 className="text-2xl font-semibold text-gray-700 text-center">{post?.title}</h2>

                <p className="py-5">{post?.description}</p>

            </div>

            <div className="border my-2 py-2 flex bg-stone-50 items-center">

                <div className="flex border rounded-3xl items-center ">

                    <button className=" items-center p-2 text-gray-700 hover:text-green-600 ">
                        <BiSolidUpvote className="text-3xl" />
                    </button>

                    <span className="text-xl text-gray-600 border-r-2 pr-2">
                        {upvote - downvote}
                    </span>

                    <button className="p-2 text-gray-700 hover:text-red-600">
                        <BiSolidDownvote className="text-3xl" />
                    </button>

                </div>

                <div>
                    <button className="flex items-center text-xl">
                        <CiShoppingTag />
                        {tag}
                    </button>
                    <FacebookShareButton url="/hello"/>
                    <LinkedinShareButton/>
                </div>

            </div>

        </div>
    );
};


export default PostDetails;