import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Checkout/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Publishable_key)

const Membership = () => {


    return (
        <div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Gold Membership</h2>
                <p className="text-xl text-gray-600">Only, <span className="text-green-500 font-semibold">$9.99</span> for lifetime <span className="text-yellow-500 font-semibold">gold</span> Membership</p>
            </div>

            <div className="flex justify-center m-10 bg-stone-50 rounded-2xl">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>


            {/* ++++++++++++++++++++  Features +++++++++++++++++++++ */}

            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-8 w-full mx-auto flex  justify-around">

                {/* bronze Features */}
                <div className="text-left">
                    <h2 className="text-3xl font-bold text-[#A26D41] mb-4">Bronze Membership</h2>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-3">Features:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Post fewer than 5 posts</li>
                        <li>Standard support</li>
                        <li>Access to basic content</li>
                        <li>Basic profile badge</li>
                        <li>Standard experience</li>
                        <li>Access to standard features</li>
                        <li>Quarterly newsletters</li>
                    </ul>
                </div>

                {/* gold Features */}
                <div className="text-left">

                    <h2 className="text-3xl font-bold text-[#DDAC31] mb-4">Gold Membership</h2>

                    <h3 className="text-2xl font-semibold text-gray-700 mb-3">Features:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Post more than 5 posts / Unlimited posts</li>
                        <li>Priority support</li>
                        <li>Access to exclusive content</li>
                        <li>Custom profile badge</li>
                        <li>Ad-free experience</li>
                        <li>Early access to new features</li>
                        <li>Monthly newsletters</li>
                    </ul>
                </div>

            </div>


            {/* if user a gold user */}
            <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-8 w-full max-w-lg">
                    <h2 className="text-4xl font-bold text-gold-600 mb-4 "><span className="text-[#DDAC31]">Gold</span> Membership</h2>
                    <p className="text-xl text-gray-700 mb-6">You are a proud <span className="text-[#DDAC31]">Gold Member</span> !</p>
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-3">Your Benefits:</h3>
                        <ul className="list-disc list-inside text-gray-600 mb-6">
                            <li>Unlimited posts</li>
                            <li>Priority support</li>
                            <li>Access to exclusive content</li>
                            <li>Custom profile badge</li>
                            <li>Ad-free experience</li>
                            <li>Early access to new features</li>
                            <li>Monthly newsletters</li>
                        </ul>
                    </div>
                    <button className="bg-[#DDAC31] text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#DDAC31] transition duration-300">
                        Gold User
                    </button>
                </div>

            </div>


        </div >
    );
};

export default Membership;