import PropTypes from 'prop-types';
import PostCard from '../../../../components/PostCard/PostCard';

const PostSection = ({posts}) => {
    
    console.log(posts);
    
    return (
        <div>
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
    posts : PropTypes.array,
};

export default PostSection;