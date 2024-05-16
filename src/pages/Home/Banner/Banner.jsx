import PropTypes from 'prop-types';
// import { useState } from "react";
import { GrSearch } from "react-icons/gr";
// import { SearchForPosts } from "../../../utilities/post/SearchForPosts";

const Banner = ({setSearchText}) => {

    // const [showKeyword, setShowKeyword] = useState(false);


    const handelSearch = (e) => {
        e.preventDefault()
        const form = e.target;
        const searchText = form.search.value;

        if (searchText) {
            setSearchText(searchText);
        }
        form.reset()
    }

    // if (searchPost.length > 0) {
    // console.log(searchPost)
    // }


    return (
        <div

            className="navbar bg-base-300 flex-col justify-center">

            <form

                onSubmit={handelSearch}
                // onClick={() => setShowKeyword(true)}
                // onBlur={() => setShowKeyword(false)}

                className="form-control relative mx-auto w-1/2 lg:w-1/3">

                <input
                    name="search"
                    type="text"
                    placeholder="Search for Topics...."
                    className="input input-bordered w-full"
                />

                <button
                    type="submit"
                    aria-label="Search"
                    className="btn btn-ghost btn-circle absolute right-0"
                >
                    <GrSearch />
                </button>
            </form>


            {/* <div className={`space-x-3 my-2 flex cursor-pointer ${showKeyword === true ? 'block' : 'hidden'}`}>
                <h3>Popular topics: </h3>
                <p>hello</p>
                <p>text</p>
                <p>topics</p>
            </div> */}

        </div>
    );
};

Banner.propTypes = {
    setSearchText : PropTypes.func.isRequired,
};

export default Banner;
