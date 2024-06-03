import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Checkout/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Publishable_key)

const Membership = () => {

    // console.log(stripePromise);

    return (
        <div>


            <div className="flex justify-center border-4 m-10 ">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>

    );
};

export default Membership;