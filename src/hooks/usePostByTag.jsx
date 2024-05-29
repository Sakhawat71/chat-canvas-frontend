import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePostByTag = (tag) => {

    const axiosPublic = useAxiosPublic();

    const { data: tagData = [] } = useQuery({
        queryKey: ['Post_By_Tag', tag],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/search/${tag}`)
            return res.data
        }
    })


    return [tagData];
};

export default usePostByTag;