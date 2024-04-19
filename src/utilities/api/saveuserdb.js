import useAxiosSecure from "../../hooks/useAxiosSecure"


export const SaveUser = async user => {

    const axiosSecure = useAxiosSecure();

    const currentUser = {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        uid: user?.uid,
        creationTime: user?.metadata?.creationTime,
        badge: 'bronze',
        role: 'user',
        totalPost: 0,
    }
    console.log(currentUser);
    const { data } = await axiosSecure.put(`/api/v1/add-user/${user?.email}`,currentUser)
    console.log('inside saveuserdb : ',data);
    return data;

}