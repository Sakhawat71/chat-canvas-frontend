import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePost = () => {

    const axiosPublic = useAxiosPublic();

    const { data: posts = [], refetch, isLoading, } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/v1/posts');
            return res.data;
        }
    })

    return [posts, refetch, isLoading,]
};

export default usePost;