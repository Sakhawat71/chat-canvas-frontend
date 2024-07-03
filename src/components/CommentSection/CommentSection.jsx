import PropTypes from 'prop-types';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';
import useComments from '../../hooks/useComments';
import CommentCard from '../CommentCard/CommentCard';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CommentSection = ({ postId }) => {

    const user = useAuth()
    const [comments,refetch] = useComments(postId);
    const axiosSecure = useAxiosSecure()

    const author = {
        name: user?.displayName,
        email: user?.email
    }

    const hendelAddComment = e => {
        e.preventDefault()

        const commentText = e.target.comment.value;
        const comment = {
            commentTime: new Date,
            content: commentText,
            author,
            postId: postId,
        }

        if (!commentText) {
            toast.error('Empty Comment Field')
            return null;
        }

        axiosSecure.post('/api/v1/add-comment', comment)
        .then(res => {
            if(res.data.insertedId){
                toast.success('Comment added successfully !')
                refetch()
            }
            else{
                toast.error('Failed to add comment.')
            }
        })
        .catch(err => {
            console.log(err)
        })

        e.target.reset()
    }

    return (
        <div>
            {
                user?.email
                    ?
                    <form onSubmit={hendelAddComment} className="my-5 p-5 mx-auto border-2 rounded-xl flex-col justify-center items-center">

                        <div className="flex items-center justify-between">
                            <p className="font-bold">Post Your Comment: </p>

                            <AwesomeButton type="secondary">Post comment</AwesomeButton>
                        </div>

                        <textarea
                            name='comment'

                            className="textarea textarea-bordered flex mx-auto w-3/4 "
                            placeholder="Your comment..."
                        ></textarea>

                    </form>
                    :
                    <div className=" bg-gray-100 rounded-2xl flex justify-center items-center py-5 my-2">

                        <div className="text-center">

                            <p className="text-red-900 font-semibold text-base py-5">Please login or register to comment</p>

                            <Link to={"/login"} >
                                <AwesomeButton
                                    type="secondary"
                                >LOG IN</AwesomeButton>
                            </Link>

                        </div>

                    </div>
            }

            {/* total comment and show comment */}
            <div className="border p-5">

                <p className="text-xl font-semibold">Comments : {comments?.length}</p>

                {comments?.length ? comments.map((comment, i) => <CommentCard
                    key={i}
                    singelComment={comment}
                ></CommentCard>)
                    :
                    <div className="flex justify-center">
                        <p>No comments yet!</p>
                    </div>
                }

            </div>
        </div>
    );
};

CommentSection.propTypes = {
    postId: PropTypes.string.isRequired,
};

export default CommentSection;