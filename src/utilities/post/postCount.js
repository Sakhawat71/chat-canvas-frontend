import useAxiosPublic from "../../hooks/useAxiosPublic"


export const TotalData =  async () => {
    
    const axiosPublic = useAxiosPublic()

    const {data} = await axiosPublic.get('/api/v1/count')
    // console.log(data);
    return data;
}