import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: "https://canvas-server.vercel.app",
    baseURL: import.meta.env.VITE_Local_host,
    withCredentials: true,
})

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;