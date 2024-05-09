import { useLoaderData } from "react-router-dom";


const PostDetails = () => {

    const postData = useLoaderData([])
    console.log(postData);


    return (
        <div>
            <p>{postData}</p>
        </div>
    );
};


export default PostDetails;