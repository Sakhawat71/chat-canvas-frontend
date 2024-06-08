import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMyPosts = (email) => {

    const axiosSecure = useAxiosSecure();

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: [email, "my-posts"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/my-posts/${email}`);
            return res.data;
        }
    })

    const postCount = data.postCount;
    return [data, postCount, isLoading, refetch]
};

export default useMyPosts;