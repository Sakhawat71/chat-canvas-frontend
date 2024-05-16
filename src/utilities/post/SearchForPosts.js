import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export const SearchForPosts = (searchText) => {

    const axiosPublic = useAxiosPublic()

    const { data: searchPost = [], isLoading } = useQuery({
        queryKey: ['search-result', searchText],
        queryFn: async () => {
            if(!searchText){
                return []
            }
            const res = await axiosPublic.get(`/api/v1/search/${searchText}`)
            return res.data;
        }
    })

    return [searchPost, isLoading];

}

