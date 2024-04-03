import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import regiBg from "../../../assets/sign/bg.svg"
import regiImage from "../../../assets/sign/regi.png"

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    const handelSignUp = info => {

        // const photo = e.target.photo.value;
        console.log(info.photo[0]?.name );
        console.log(info.photo.length );

        if(info.photo.length){
            console.log('yes',info.photo.length);

            
        }
        else{
            console.log('else',info.photo.length);
        }

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

                    <h1 className="text-3xl font-bold text-center">Sign Up</h1>

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

                    {/* <SocialSign></SocialSign> */}
                </div>
            </div>
        </div>
    );
};

export default Register;