import PropTypes from 'prop-types';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const PostTable = ({ post, refetch }) => {

    const axiosSecure = useAxiosSecure();

    const handelDelete = async (id) => {

        console.log(id);
        const res = await axiosSecure.delete(`/api/v1/delete-post/${id}`)

        if(res.data.deletedCount){
            toast.success('Post Deleted Successfully!')
            refetch()
        }
    }

    return (
        <tr className="bg-white border-b-8">
            <td className="px-4 py-2">
                <div>
                    <div className="font-semibold text-gray-700">{post.post.title}</div>
                    <div className="text-sm text-gray-400">{post.tag}</div>
                </div>
            </td>
            <td className="px-4 py-2">{post.upvote - post.downvote}</td>
            <td className="px-4 py-2">
                <button
                    className="btn btn-ghost btn-xs"
                >
                    Show Comments
                </button>
            </td>
            <td className="px-4 py-2">
                <button onClick={() => handelDelete(post._id)} className="btn btn-xs">Delete</button>
            </td>
        </tr>
    );
};

PostTable.propTypes = {
    post: PropTypes.object.isRequired,
    refetch : PropTypes.any,
};

export default PostTable;