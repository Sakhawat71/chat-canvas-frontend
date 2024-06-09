import toast from "react-hot-toast";
import useAllUsers from "../../../../hooks/useAllUsers";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {

    const [users, refetch] = useAllUsers();
    const axiosSecure = useAxiosSecure();

    const hendelMakeAdmin = async (id) => {
        const res = await axiosSecure.patch(`api/v1/make-admin/${id}`)

        if (res.data.modifiedCount) {
            toast.success('User promoted to admin successfully');
            refetch()
        }
    }

    return (

        <div className="overflow-x-auto p-14 bg-white rounded-lg shadow-md">

            <h2 className="text-2xl font-semibold mb-6 text-gray-800">{users?.length} Registered Users</h2>

            <table className="min-w-full bg-white divide-y divide-gray-200">

                {/* Head */}
                <thead className="bg-gray-50">
                    <tr className=" text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <th scope="col" className="px-6 py-3 ">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Badge
                        </th>
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="bg-white divide-y divide-gray-200">
                    {users?.map(user => (

                        <tr key={user._id} className="hover:bg-gray-100 whitespace-nowrap text-sm font-medium">

                            <td className="px-6 py-4  text-gray-900">{user?.name}</td>

                            <td className="px-6 py-4 text-gray-500">{user?.email}</td>

                            <td className="px-6 py-4 text-gray-500">
                                {user?.role === 'user' ?
                                    <button
                                        onClick={() => hendelMakeAdmin(user._id)}
                                        className="btn btn-xs">Make Admin</button>
                                    :
                                    'Admin'
                                }
                            </td>

                            <td className="px-6 py-4 text-gray-500">{user?.badge}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

    );
};

export default ManageUsers;