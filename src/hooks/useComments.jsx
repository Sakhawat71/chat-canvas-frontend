import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useComments = (postId) => {

    const axiosPublic = useAxiosPublic();

    const { data: comments = [], refetch ,isLoading} = useQuery({

        queryKey: ['comments', postId],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/comments/${postId}`)
            return res.data;
        }
    })

    return [comments, refetch,isLoading];
};

export default useComments;