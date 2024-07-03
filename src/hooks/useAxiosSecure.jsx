import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_HOST_SITE,
    withCredentials: true,
})


const useAxiosSecure = () => {
    return axiosSecure ;
};

export default useAxiosSecure;