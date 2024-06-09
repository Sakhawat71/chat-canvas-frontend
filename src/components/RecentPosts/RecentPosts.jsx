import PropTypes from 'prop-types';

const RecentPosts = ({ post }) => {

    const postDate = post?.postTime.slice(0,10)

    return (
        <tr>
            <td>{post?.post.title}</td>
            <td>{post?.tag}</td>
            <td>{postDate}</td>
        </tr>
    );
};

RecentPosts.propTypes = {
    post: PropTypes.object,
};

export default RecentPosts;