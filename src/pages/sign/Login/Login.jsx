import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../../assets/sign/extraLogin.png";
import loginBg from "../../../assets/sign/bg.svg";
import { AuthContext } from "../../../providers/AuthProvider";
import GoogleSignUp from "../../../components/SocialSignUp/GoogleSignUp";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { SignInEmailPass } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    console.log("location ", location);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    const hendelSignIn = info => {
        // console.log(info);

        const email = info.email;
        const password = info.password;

        SignInEmailPass(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log('loggedUser : ',loggedUser);
                navigate("/")
                console.log('navigate', navigate);
            })
            .catch(error => console.log('cant login :', error))

        // console.log(email, password);

    }



    return (

        <div
            className="hero min-h-screen bg-base-200  bg-cover"
            style={{ backgroundImage: `url(${loginBg})` }}
        >

            <div className="hero-content flex-col lg:flex-row shadow-2xl my-10  mx-20 w-10/12 py-20">

                <div className="text-center lg:w-1/2 hidden lg:block">
                    <figure className=" flex justify-center">
                        <img
                            src={loginImage}
                            alt="Log in cover image"
                            className="w-4/6"
                        />
                    </figure>
                </div>

                <div
                    className="card w-full lg:w-1/2 max-w-sm h-full"
                >

                    <h1 className="text-3xl font-bold text-center uppercase">Login</h1>

                    <form
                        onSubmit={handleSubmit(hendelSignIn)}
                        className="card-body pt-0 pb-5 "
                    >

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

                        {/* ---------------- forget password --------------- */}

                        <label className="label disabled">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>

                        {/* ********* submit button ********* */}

                        <div className="form-control">
                            <input
                                type="submit"
                                value="Login"
                                className="btn text-white bg-[#D1A054B2] hover:bg-[#D1A054B2]"
                            ></input>
                        </div>
                    </form>

                    <div className="mx-auto ">
                        <span
                            className="text-[#D1A054] text-base"
                        >New here? <Link
                            to="/register"
                            className="font-bold hover:text-[#1C2E34]"
                        >Create a New Account</Link> </span>
                    </div>

                    <div className="divider">OR</div>
                    <GoogleSignUp></GoogleSignUp>

                </div>
            </div>
        </div>


    );
};

export default Login;