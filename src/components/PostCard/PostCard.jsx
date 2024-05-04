import PropTypes from 'prop-types';

const PostCard = ({ singelPost }) => {
    console.log(singelPost);
    const { author, post,tag } = singelPost;

    return (
        <div
            onClick={() => console.log('click singel post', singelPost._id)}
            className='border border-gray-300 my-5 cursor-pointer p-4 flex  '
        >

            <div className='border'>
                <img
                    src={author?.image}
                    alt="author image"
                    className='w-12 border-black'
                />
            </div>

            <div className='border'>
                <h2 className='text-2xl font-semibold'>{post?.title}</h2>
                <p>{tag}</p>
            </div>
            
        </div>
    );
};

PostCard.propTypes = {
    singelPost: PropTypes.object,
};

export default PostCard;