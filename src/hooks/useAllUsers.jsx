import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const {data : users = []} = useQuery({
        queryKey: ['allusers'],
        queryFn : async () => {
            const res = await axiosSecure.get('/api/v1/all-users')
            return res.data;
        }
    })

    return [users];
};

export default useAllUsers;