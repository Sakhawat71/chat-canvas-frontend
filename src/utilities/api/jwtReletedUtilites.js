import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure"

export const GetJwtToken = async email => {

    const axiosSecure = useAxiosSecure()

    const {data} = await axiosSecure.post(`/api/v1/jwt`, email);
    return data;
}

export const RemoveJwtToken = async () => {
    const axiosPublic = useAxiosPublic()

    const {data} = await axiosPublic.get(`/api/v1/remove-jwt`);
    return data;
}