import PropTypes from 'prop-types';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const PostTable = ({ post, refetch }) => {

    const axiosSecure = useAxiosSecure();

    const handelDelete = async (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/api/v1/delete-post/${id}`)
                if (res.data.deletedCount) {
                    toast.success('Post Deleted Successfully!')
                    refetch()
                }
            }
        });


    }

    return (
        <tr className="bg-white border-b-8">
            <td className="px-4 py-2">
                <div>
                    <div className="font-semibold text-gray-700">{post.post.title}</div>
                    <div className="text-sm text-gray-400">{post.tag}</div>
                </div>
            </td>
            <td className="px-4 py-2">{post.upvote + post.downvote}</td>
            <td className="px-4 py-2">
                <Link
                    to={`/dashboard/comments/${post._id}`}
                    className="btn btn-ghost btn-xs"
                    onClick={() => console.log('all coments', post._id)}
                >
                    Show Comments
                </Link>
            </td>
            <td className="px-4 py-2">
                <button onClick={() => handelDelete(post._id)} className="btn btn-xs">Delete</button>
            </td>
        </tr>
    );
};

PostTable.propTypes = {
    post: PropTypes.object.isRequired,
    refetch: PropTypes.any,
};

export default PostTable;