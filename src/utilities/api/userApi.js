import useAxiosSecure from "../../hooks/useAxiosSecure"


export const UserDataFromDB = async (userEmail) => {

    const axiosSecure = useAxiosSecure()

    const res = await axiosSecure.get(`/api/v1/user/${userEmail}`)

    return res.data;

}