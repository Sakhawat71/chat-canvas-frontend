import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePost = (currentPage) => {
    console.log(currentPage, 'currentPage in hook');
    const axiosPublic = useAxiosPublic();

    const { data: posts = [], refetch, isLoading, } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/posts?page=${currentPage}`);
            return res.data;
        }
    })

    return [posts, refetch, isLoading,]
};

export default usePost;