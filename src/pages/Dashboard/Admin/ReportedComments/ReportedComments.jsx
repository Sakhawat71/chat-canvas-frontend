import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useReportedComments from "../../../../hooks/useReportedComments";

const ReportedComments = () => {

    const { reportedComments, isLoading, refetch } = useReportedComments([]);
    const axiosSecure = useAxiosSecure()

    const hendelDeleteReport = async (id) => {
        const res = await axiosSecure.delete(`/api/v1/delete-report/${id}`)
        if (res.data.deletedCount) {
            toast.success('Report Deleted!')
            refetch()
        }
    }

    const hendelDeleteComment = async (commentId,reportId) => {

        const res = await axiosSecure.delete(`/api/v1/delete-comment/${commentId}`)
        if(res.data.deletedCount){

            hendelDeleteReport(reportId)
            toast.success('Comment Deleted!')
        }

    }

    if (isLoading) {
        return <div>loading..................</div>
    }

    return (

        <div className="p-10 ">

            <table className="table">
                {/* head */}
                <thead>
                    <tr className="font-bold text-lg">
                        <th>Comment Text</th>
                        <th>Details</th>
                        <th>Report</th>
                        {/* <th>Status</th> */} 
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        reportedComments?.map(comment => <tr key={comment._id} className="hover">

                            <td>
                                {comment?.commentText.slice(0, 20)}
                                {comment.commentText.length >= 20 && `...`}
                            </td>

                            <td>
                                <label htmlFor={`modal_${comment._id}`} className="btn btn-xs p-0 px-1">Show Details</label>

                                <input type="checkbox" id={`modal_${comment._id}`} className="modal-toggle" />

                                <div className="modal" role="dialog">
                                    <div className="modal-box">
                                        <h4 className="text-lg font-semibold">Report Details</h4>

                                        <p className="mt-2">
                                            <strong>Comment Text: </strong>
                                            {comment?.commentText}
                                        </p>

                                        <p className="mt-2"><strong>Reason:</strong> {comment.report}</p>

                                        <p className="mt-2"><strong>Reporter Email:</strong> {comment.reporterEmail} </p>
                                        <p className="mt-2"><strong>Commenter Email:</strong> {comment.commenterEmail}</p>

                                        <p className="mt-2"><strong>Reported At:</strong> {new Date(comment.reportedAt).toLocaleString()}</p>

                                        <div className="modal-action p-0 m-0">
                                            <label htmlFor={`modal_${comment._id}`} className="btn">Close</label>
                                        </div>

                                    </div>
                                </div>
                            </td>

                            <td> {comment.report} </td>
                            
                            {/* <td>status</td> */}

                            <td>
                                <div className="dropdown">

                                    <div tabIndex={0} role="button" className="btn btn-sm m-1">Take Action</div>

                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow space-y-2">

                                        <li>
                                            <button
                                                onClick={() => hendelDeleteReport(comment._id)}
                                                className="btn"
                                            >
                                                Deny Report
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                onClick={() => hendelDeleteComment(comment.commentId,comment._id)}
                                                className="btn"
                                            >
                                                Delete Comment
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </td>

                        </tr>)
                    }
                </tbody>

            </table>
        </div>

    );
};

export default ReportedComments;