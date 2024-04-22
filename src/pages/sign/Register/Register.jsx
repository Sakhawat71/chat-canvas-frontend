import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import regiBg from "../../../assets/sign/bg.svg"
import regiImage from "../../../assets/sign/regi.png"
import axios from "axios";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import GoogleSignUp from "../../../components/SocialSignUp/GoogleSignUp";
import { SaveUser } from "../../../utilities/api/saveuserdb";
import toast from "react-hot-toast";

const imgbb_api_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imgbb_api_key}`;

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { signUpEmailPass } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    const handelSignUp = async (info) => {

        // Image upload is not mandatory during SignUp    
        let photoLink;
        if (info.photo.length) {

            const imageFile = { 'image': info.photo[0] };

            const res = await axios.post(image_hosting_url, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (res.data.success) {
                photoLink = res.data.data.display_url;
            }
        }
        else {
            photoLink = 'https://i.ibb.co/4K27t1f/user.png';
        }

        const name = info.name;
        const email = info.email;
        const password = info.password;

        // console.log("photo link :", photoLink);

        signUpEmailPass(email, password)
            .then(res => {
                // console.log('user details: ', res.user);
                const currentUser = res.user;
                if (currentUser) {
                    updateProfile(currentUser, {
                        displayName: name,
                        photoURL: photoLink
                    })
                        .then(async () => {
                            // console.log('update profile');
                            navigate('/')

                            const dbResponse = await SaveUser(currentUser);

                            if(dbResponse.upsertedCount){
                                toast.success(`Welcome to ChatCanvas, ${currentUser?.displayName}`)
                            }

                            // console.log('dbResponse : ',dbResponse);
                            // console.log(navigate);
                        })
                        .catch(error => console.log('cant update profile: ', error))
                }
            })
            .catch(error => console.log(' signup error: ', error))


    }



    return (
        <div
            className="hero bg-base-200 "
            style={{ backgroundImage: `url(${regiBg})` }}
        >

            <div className="hero-content flex-col lg:flex-row shadow-2xl my-10  md:mx-20 w-10/12 ">

                <div className="text-center lg:w-1/2 hidden lg:block">
                    <figure className=" flex justify-center">
                        <img
                            src={regiImage}
                            alt="Log in cover image"
                            className="w-4/6"
                        />
                    </figure>
                </div>

                <div
                    className="card w-full lg:w-1/2 max-w-sm h-full"
                >

                    <h1 className="text-3xl font-bold text-center uppercase">Sign Up</h1>

                    <form
                        onSubmit={handleSubmit(handelSignUp)}
                        className="card-body pt-0 pb-5 "
                    >
                        {/* ****************** Name ************** */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Name</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                className="input input-bordered"
                                {...register("name", { required: true })}
                            />
                            {errors.email && <span className="text-red-600"> Name is required</span>}
                        </div>

                        {/* *********** Photo *********** */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Photo</span>
                            </label>

                            <input
                                name="photo"
                                type="file"
                                className="file-input file-input-bordered w-full max-w-xs"
                                {...register("photo")}
                            />
                            {/* {errors.email && <span className="text-red-600"> Photo is required</span>} */}
                        </div>

                        {/* ----- Email Input -------- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-600"> Email is required</span>}
                        </div>

                        {/* ------ Password Input ------  */}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Password</span>
                            </label>

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/
                                })}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute bottom-4 right-4 text-xl"
                            >
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye ></FaEye>
                                }
                            </span>

                        </div>

                        {errors.password?.type === "required" && <span className="text-red-600 ">Password is required</span>}
                        {errors.password?.type === "minLength" && <span className="text-red-600 ">Password must be 6 and 20 characters</span>}
                        {errors.password?.type === "maxLength" && <span className="text-red-600 ">Password must less then 20 characters</span>}
                        {errors.password?.type === "pattern" && <span className="text-red-600 ">Password must contain at least one uppercase letter, lowercase letter and one number</span>}

                        <div className="form-control">
                            <input
                                type="submit"
                                value="Sign Up"
                                className="btn text-white bg-[#D1A054B2] hover:bg-[#D1A054B2] bg-gradient-to-r"
                            ></input>
                        </div>
                    </form>

                    <div className="mx-auto ">
                        <span
                            className="text-[#D1A054] text-base"
                        >already registered ? <Link
                            to="/login"
                            className="font-bold hover:text-blue-500"
                        >Go to Login</Link> </span>
                    </div>

                    <div className="divider">OR</div>
                    <GoogleSignUp></GoogleSignUp>
                </div>
            </div>
        </div>
    );
};

export default Register;