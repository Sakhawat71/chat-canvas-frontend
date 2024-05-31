import PropTypes from 'prop-types';

const CommentCard = ({ singelComment }) => {

    const { author, content, commentTime } = singelComment;

    const date = commentTime?.split('T')[0];
    // console.log(date);

    return (
        <div className='my-5 md:pl-10 '>

            <div className='flex items-center gap-10'>

                <h3 className='font-bold cursor-pointer text-xl text-gray-600'>{author?.name}</h3>
                <p className='text-gray-700'>{date}</p>
                <button className='btn btn-xs text-gray-500'>Report to admin</button>

            </div>

            <p className='text-gray-700'>{content}</p>


        </div>
    );
};

CommentCard.propTypes = {
    singelComment: PropTypes.object,
};

export default CommentCard;