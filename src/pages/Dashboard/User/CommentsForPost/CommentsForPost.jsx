import { useParams } from "react-router-dom";
import useComments from "../../../../hooks/useComments";
import { HashLoader } from "react-spinners";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CommentsForPost = () => {

    const { postId } = useParams();
    const user = useAuth()
    const [comments, , isLoading] = useComments(postId);
    const [reportValues, setReportValues] = useState({});
    const axiosSecure = useAxiosSecure()

    const handleSelect = (e, commentId) => {
        const selectValue = e.target.value;
        setReportValues(prev => ({ ...prev, [commentId]: selectValue }));
    }

    const handleSubmitReport = async (commentId, postId, commenterEmail) => {

        const reportValue = reportValues[commentId];

        const reportedComment = {
            commentId,
            postId,
            report: reportValue,
            reporterEmail: user.email,
            commenterEmail,
            reportedAt: new Date

        }

        // console.log(reportedComment);

        if (reportedComment) {
            const res = await axiosSecure.post('/api/v1/send-report', reportedComment)
            if (res.data.insertedId) {
                toast.success(`Comment ${commentId} reported as ${reportValue}`);
            }
            console.log(res.data);
        }
    }





    if (isLoading) {
        <HashLoader />
    }

    return (
        <div>

            <div className="container mx-auto p-4">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    {comments.length > 0 ? (
                        <div className="text-green-600 text-lg font-semibold">
                            There are {comments.length} comments on this post
                        </div>
                    ) : (
                        <div className="text-red-600 text-lg font-semibold">
                            There are no comments for this post
                        </div>
                    )}
                </div>
            </div>


            <div className="overflow-x-auto p-10">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Comment Text</th>
                            <th>Email</th>
                            <th>feedback</th>
                            <th>action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            comments?.map(comment => <tr key={comment._id} className="hover">
                                <th>
                                    {comment?.content?.slice(0, 20)}
                                    {comment?.content.length >= 20 && (
                                        <>
                                            ...
                                            <label htmlFor={`modal_${comment._id}`} className="btn btn-xs p-0 px-1">read more</label>
                                            <input type="checkbox" id={`modal_${comment._id}`} className="modal-toggle" />
                                            <div className="modal" role="dialog">
                                                <div className="modal-box">
                                                    <h3 className="text-lg font-bold text-gray-500">
                                                        {comment?.author?.name || 'anonymous'}
                                                    </h3>
                                                    <p className="py-4">{comment?.content}</p>
                                                </div>
                                                <label className="modal-backdrop" htmlFor={`modal_${comment._id}`}>Close</label>
                                            </div>
                                        </>
                                    )}
                                </th>


                                <td>{comment?.author.email}</td>
                                <td>
                                    <select
                                        className="select select-bordered"
                                        onChange={(e) => handleSelect(e, comment._id)}

                                    >
                                        <option disabled value="null" selected>Select</option>
                                        <option value="Inappropriate">Inappropriate</option>
                                        <option value="Spam">Spam</option>
                                        <option value="Offensive">Offensive</option>
                                    </select>
                                </td>
                                <td>
                                    <button
                                        className='btn btn-xs disabled'
                                        disabled={!reportValues[comment._id]}
                                        onClick={() => handleSubmitReport(comment._id, comment?.postId, comment?.author?.email)}

                                    >
                                        Report
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default CommentsForPost;