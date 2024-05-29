import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePost = (searchText, currentPage) => {

    console.log(currentPage, 'currentPage in hook');
    console.log(searchText, 'searchText in hook');

    const axiosPublic = useAxiosPublic();

    const { data: posts = [], refetch, isLoading } = useQuery({
        queryKey: ['post', searchText, currentPage],
        queryFn: async () => {
            
            const res = await axiosPublic.get(`/api/v2/posts?search=${searchText}&page=${currentPage}`);
            // console.log(isLoading);
            return res.data;
        }
    })

    return [posts, refetch, isLoading,]
};

export default usePost;