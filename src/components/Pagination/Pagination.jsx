import PropTypes from 'prop-types';

const Pagination = (pagination) => {

    const { hendelPageChange, pages, currentPage, setCurrentPage } = pagination;

    return (
        <div>
            <div className="join flex mx-auto justify-center space-x-3 mt-10">
                <button
                    onClick={() => hendelPageChange('pre')}
                    className="join-item btn btn-outline"
                >Prev</button>
                {
                    pages?.map(page => <button
                        key={page}
                        className={currentPage === page + 1 ? `btn join-item bg-[#E58849] text-white` : 'btn join-item'}
                        onClick={() => setCurrentPage(page + 1)}
                    >{page + 1}</button>)
                }
                <button
                    onClick={() => hendelPageChange('next')}
                    className="join-item btn btn-outline"
                >Next</button>
            </div>
            
            <div className="flex justify-center mt-5">
                <p>Current page : {currentPage}</p>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    hendelPageChange : PropTypes.func,
    currentPage : PropTypes.number.isRequired,

};

export default Pagination;