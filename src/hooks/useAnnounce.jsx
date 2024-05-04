import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAnnounce = () => {
    
    const axiosPublic = useAxiosPublic()
    const {data: announceData,refetch} = useQuery({
        queryKey: ['announceData'],
        queryFn: async () => {
            const res =  await axiosPublic.get('/api/v1/announcement')
            return res.data
        }
    })

    return [announceData,refetch]

};

export default useAnnounce;