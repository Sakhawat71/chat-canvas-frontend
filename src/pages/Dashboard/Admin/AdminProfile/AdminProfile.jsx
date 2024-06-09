import useAdminStats from "../../../../hooks/useAdminStats";

const AdminProfile = () => {

    const [stats] = useAdminStats()
    console.log(stats); //{NumOfPosts: 21, NumOfComments: 24, NumOfUser: 9}



    return (
        <div className="diffstats shadow p-6 bg-gray-100 min-h-screen">
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
          <div className="diffstat place-items-center bg-white p-4 rounded-lg shadow-md">
            <div className="diffstat-title text-lg font-semibold">Number of Posts</div>
            <div className="diffstat-value text-2xl font-bold text-indigo-500">{stats?.NumOfPosts}</div>
            <div className="diffstat-desc text-gray-500">Total posts created by users</div>
          </div>
  
          <div className="diffstat place-items-center bg-white p-4 rounded-lg shadow-md">
            <div className="diffstat-title text-lg font-semibold">Number of Comments</div>
            <div className="diffstat-value text-2xl font-bold text-indigo-500">{stats?.NumOfComments}</div>
            <div className="diffstat-desc text-gray-500">Total comments on posts</div>
          </div>
  
          <div className="diffstat place-items-center bg-white p-4 rounded-lg shadow-md">
            <div className="diffstat-title text-lg font-semibold">Number of Users</div>
            <div className="diffstat-value text-2xl font-bold text-indigo-500">{stats?.NumOfUser}</div>
            <div className="diffstat-desc text-gray-500">Total registered users</div>
          </div>
        </div>
      </div>
    );
};

export default AdminProfile;