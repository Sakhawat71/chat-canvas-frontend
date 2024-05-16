import PropTypes from 'prop-types';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useSearchForPosts = (searchText) => {

    const axiosPubluc = useAxiosPublic()

    const { data: searchData = [] } = useQuery({
        queryKey: ['search',searchText],
        queryFn: async () => {
            const res = await axiosPubluc.get(`/api/v1/search/${searchText}`)
            return res.data;
        }
    })

    return [searchData]

};

useSearchForPosts.propTypes = {
    searchText : PropTypes.string,
};

export default useSearchForPosts;