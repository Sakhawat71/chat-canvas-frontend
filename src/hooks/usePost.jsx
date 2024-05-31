import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePost = (searchText, currentPage) => {

    const axiosPublic = useAxiosPublic();

    const { data: posts = [], refetch, isLoading } = useQuery({
        queryKey: ['post', searchText, currentPage],
        queryFn: async () => {
            
            const res = await axiosPublic.get(`/api/v2/posts?search=${searchText}&page=${currentPage}`);
            return res.data;
        }
    })

    return [posts, refetch, isLoading,]
};

export default usePost;