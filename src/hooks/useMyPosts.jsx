import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMyPosts = () => {

    const axiosSecure = useAxiosSecure();
    const user = useAuth()
    const email = user.email;

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: [email, "my-posts"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/my-posts/${email}`);
            return res.data;
        }
    })

    const postCount = data.postCount;
    return [data, postCount, refetch, isLoading]
};

export default useMyPosts;