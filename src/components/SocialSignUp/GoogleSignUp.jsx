import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import { FcGoogle } from "react-icons/fc";
import { SaveUser } from "../../utilities/api/saveuserdb";
import toast from "react-hot-toast";

const GoogleSignUp = () => {

    const { signWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelSignUp = () => {
        signWithGoogle()
            .then(async res => {
                const user = res.user;
                navigate('/')

                const dbRes = await SaveUser(user)
                if(dbRes.exist) {
                    toast.success(`Welcome Back, ${user?.displayName}`)
                }

                if(dbRes.upsertedCount){
                    toast.success(`Welcome to ChatCanvas, ${user?.displayName}`)
                }

                // console.log(" dbResponse : ", dbRes);

            })
            .catch(error => console.log('Google signup error : ', error))
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