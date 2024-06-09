import { Link } from 'react-router-dom';

const LimitPosts = () => {
    return (
        <div className='h-screen border'>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">

                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-red-600">Post limit exceeded</h1>

                        <p className="py-6">You have reached your posting limit for the Bronze Membership. To post more, consider upgrading to our Gold Membership and enjoy unlimited posts along with many other benefits!</p>

                        <Link to='/membership' className="btn font-semibold text-lg bg-[#ddca3d]">Become a <span className='text-black'>Member</span></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default LimitPosts;