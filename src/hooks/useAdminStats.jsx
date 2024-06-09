import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdminStats = () => {

    const axiosSecure = useAxiosSecure()
    const {data : stats = {} } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/admin-stats')
            return res.data;
        }
    })


    return [stats]
};

export default useAdminStats;