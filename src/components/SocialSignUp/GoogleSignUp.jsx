import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import { FcGoogle } from "react-icons/fc";

const GoogleSignUp = () => {

    const { signWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelSignUp = () => {
        signWithGoogle()
        .then(res => {
            const user = res.user;
            console.log('google sign up : ',user);  
            navigate('/')
        })
        .catch(error => console.log('Google signup error : ',error))
    }

    return (
        <div className="flex mx-auto">
            <Link onClick={handelSignUp}>
                <AwesomeButton
                    type="secondary"
                    before={<FcGoogle />}
                >Google</AwesomeButton>
            </Link>
        </div>
    );
};

export default GoogleSignUp;