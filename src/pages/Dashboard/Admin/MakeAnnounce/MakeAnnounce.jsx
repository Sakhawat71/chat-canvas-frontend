import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import { AwesomeButton } from "react-awesome-button";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MakeAnnounce = () => {

    const user = useAuth()
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, formState: { errors } ,reset } = useForm();
    const onSubmit = async(data) => {

        const announceData = {
            name: user?.displayName,
            email: user?.email,
            title : data.title,
            description : data.description,
            time : new Date
        }

        const res = await axiosSecure.post(`/api/v1/make-announcement`, announceData)
        if(res.data.insertedId){
            toast.success("Announcement made successfully")
        }
        reset()
    };


    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 shadow-md w-full max-w-md rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Make Announcement</h2>

                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title</label>
                    <input
                        id="title"
                        className={`input input-bordered w-full ${errors.title ? 'border-red-500' : ''}`}
                        {...register('title', { required: 'Title is required' })}
                    />
                    {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700">Description</label>
                    <textarea
                        id="description"
                        className={`textarea textarea-bordered w-full ${errors.description ? 'border-red-500' : ''}`}
                        {...register('description', { required: 'Description is required' })}
                    ></textarea>
                    {errors.description && <span className="text-red-500">{errors.description.message}</span>}
                </div>


                <button type="submit" className=" w-full">
                    <AwesomeButton type="secondary" className="w-full">Announce</AwesomeButton>
                </button>
            </form>
        </div>
    );
};

export default MakeAnnounce;