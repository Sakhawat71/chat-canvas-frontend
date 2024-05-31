import PropTypes from 'prop-types';
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { Link } from 'react-router-dom';

const PostCard = ({ singelPost }) => {
    
    // console.log("post card ",singelPost);
    const { author, post, tag, postTime, upvote, downvote ,commentCount} = singelPost;

    const postDate = postTime?.split('T')[0];
    const postText = post.description.slice(0, 60);
    // console.log("post card",postDate);



    return (
        <Link
            to={`/post-details/${singelPost._id}`}
            className='border-b border-gray-300 bg-gray-50 my-5 cursor-pointer p-4 flex'
        >

            <div className='mx-4 '>
                <img
                    src={author?.image}
                    alt="author image"
                    className='w-12 border rounded-badge '
                />
            </div>

            <div className='space-y-1'>
                <h2 className='text-xl font-medium '>{post?.title}</h2>
                <p className='text-gray-500'>{postText} ...</p>

                <div className='flex items-center justify-around space-x-3 pt-2'>

                    <div className='flex px-2 py-1 border rounded-2xl items-center space-x-2 text-lg'>
                        <BiUpvote />
                        <span className='border-r-2 pr-1'>{upvote - downvote}</span>
                        <BiDownvote />
                    </div>

                    <p className='p-1 bg-cyan-100 border rounded-md hover:font-medium'>{tag}</p>

                    <p>
                        {commentCount ? `${commentCount} comments` :
                            '0 comments'
                        }
                    </p>

                    <p>Posted on <span className='font-medium'>{postDate}</span></p>
                </div>
            </div>
        </Link>
    );
};

PostCard.propTypes = {
    singelPost: PropTypes.object,
};

export default PostCard;