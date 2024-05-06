import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



export const useAnnounceCount = () => {
    const axiosPublic = useAxiosPublic();
    const { data: announceCount } = useQuery({
        queryKey: ['announcement-count'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/v1/announcement-count');
            return res.data;
        }
    })
    return [announceCount];
}

export default useAnnounceCount;