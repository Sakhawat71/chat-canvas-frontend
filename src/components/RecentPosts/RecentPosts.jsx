import PropTypes from 'prop-types';
import { CiShoppingTag } from "react-icons/ci";

const RecentPosts = ({ post }) => {

    const postDate = post?.postTime.slice(0, 10)

    return (
        <tr className='text-base'>
            <td className='font-semibold text-gray-600'>{post?.post.title}</td>
            <td className='flex items-center gap-2'>
                <CiShoppingTag />
                {post?.tag}
            </td>
            <td>{postDate}</td>
        </tr>
    );
};

RecentPosts.propTypes = {
    post: PropTypes.object,
};

export default RecentPosts;