import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Checkout/CheckoutForm";

const stripePromise = loadStripe('pk_test_51OwKrqG32hbyrQzeel69euEvH8bGduAvNGDykUiKC7WBL78vLyguRI0Dspg5PBxt6llwJUbMdKcY3L0Nqj9G8o2F00HRdTqTjg')

const Membership = () => {


    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Membership;