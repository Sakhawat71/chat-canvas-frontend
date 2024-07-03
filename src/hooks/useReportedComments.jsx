import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReportedComments = () => {

    const axiosSecure = useAxiosSecure();

    const { data: reportedComments, isLoading, refetch } = useQuery({
        queryKey: ['reportedComments'],
        queryFn: async () => {
            try {

                const res = await axiosSecure.get('/api/v1/reported-comments')
                return res.data ;

            } catch (error) {
                console.log('problem to fetch with axios', error);
            }
        }
    })

    return { reportedComments, isLoading, refetch };
};

export default useReportedComments;