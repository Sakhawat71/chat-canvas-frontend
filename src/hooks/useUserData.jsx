import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserData = () => {

    const user = useAuth()
    const userEmail = user?.email;

    const axiosSecure = useAxiosSecure()

    const {data: userData = [],refetch} = useQuery({
        queryKey : ['user data',userEmail],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/user/${userEmail}`);
            return res.data;
        },
        
    })

    return [userData,refetch]
    
}

export default useUserData;