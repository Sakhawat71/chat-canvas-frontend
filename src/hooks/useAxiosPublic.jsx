import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://canvas-server.vercel.app",
    withCredentials: true,
})

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;