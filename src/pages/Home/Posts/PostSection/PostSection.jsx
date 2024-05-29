import PropTypes from 'prop-types';
import PostCard from '../../../../components/PostCard/PostCard';
import Pagination from '../../../../components/Pagination/Pagination';

const PostSection = ({ posts, pagination }) => {

    const { hendelPageChange, pages, currentPage, setCurrentPage } = pagination;

    return (
        <div className='border-4'>
            <p>{posts?.length}</p>
            {
                posts?.map(singelPost => <PostCard
                    key={singelPost._id}
                    singelPost={singelPost}
                ></PostCard>)
            }

            <Pagination
                hendelPageChange={hendelPageChange}
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />



        </div>
    );
};

PostSection.propTypes = {
    posts: PropTypes.array,
    pagination: PropTypes.object
};

export default PostSection;