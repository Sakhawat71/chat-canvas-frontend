import PropTypes from 'prop-types';
import PostCard from '../../../../components/PostCard/PostCard';

const PostSection = ({ posts }) => {

    return (
        <div>
            <p className='text-gray-300'>{posts?.length} post in this page</p>
            {
                posts?.map(singelPost => <PostCard
                    key={singelPost._id}
                    singelPost={singelPost}
                ></PostCard>)
            }
        </div>
    );
};

PostSection.propTypes = {
    posts: PropTypes.array
};

export default PostSection;