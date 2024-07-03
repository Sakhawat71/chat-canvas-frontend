import useReportedComments from "../../../../hooks/useReportedComments";

const ReportedComments = () => {

    const { reportedComments } = useReportedComments([]);
    // console.log(reportedComments);

    return (
        <div>
            <div className="overflow-x-auto p-10">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Comment Text</th>
                            <th>Details</th>
                            <th>Report</th>
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

                                <td>
                                    <button className="btn btn-xs">
                                        delete
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

export default ReportedComments;