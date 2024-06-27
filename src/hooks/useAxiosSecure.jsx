import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_Local_host,
    withCredentials: true,
})


const useAxiosSecure = () => {
    return axiosSecure ;
};

export default useAxiosSecure;