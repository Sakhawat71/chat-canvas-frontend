import { useState } from "react";
import { GrSearch } from "react-icons/gr";

const Banner = () => {

    const [showKeyword, setShowKeyword] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;

        console.log(searchText);

    };

    // const toggleKeyWord = () => {
    //     setShowKeyword(!showKeyword)
    // }


    return (
        <div
            onMouseOut={() => setShowKeyword(false)}
            className="navbar bg-base-300 flex-col justify-center">

            <form
                onSubmit={handleSearch}
                onMouseEnter={() => setShowKeyword(true)}

                className="form-control relative mx-auto w-1/2 lg:w-1/3">

                <input
                    name="search"
                    type="text"
                    placeholder="Search for Topics...."
                    className="input input-bordered w-full"
                />

                <button
                    type="submit"
                    className="btn btn-ghost btn-circle absolute right-0"
                >
                    <GrSearch />
                </button>
            </form>


            <div className={`space-x-3 my-2 flex cursor-pointer ${showKeyword === true ? 'block' : 'hidden'}`}>
                <h3>Popular topics: </h3>
                <p>hello</p>
                <p>text</p>
                <p>topics</p>
            </div>

        </div>
    );
};

export default Banner;
