import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './style.css';

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="border-4 w-1/2 mt-10 flex-row items-center"
        >
            <CardElement
                // options={{
                //     style: {
                //         base: {
                //             fontSize: '16px',
                //             color: '#424770',
                //             '::placeholder': {
                //                 color: '#aab7c4',
                //             },
                //         },
                //         invalid: {
                //             color: '#9e2146',
                //         },
                //     },
                // }}
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            ':focus': {
                                color: '#424770',
                            },
                            '::selection': {
                                color: '#f6f9fc',
                                background: '#6772e5',
                            },
                            padding: '10px 14px',
                            backgroundColor: '#fff',
                            boxShadow: 'rgba(50, 50, 93, 0.15) 0px 1px 3px, rgba(0, 0, 0, 0.15) 0px 1px 0px',
                            borderRadius: '4px',
                            transition: 'box-shadow 150ms ease',
                        },
                        invalid: {
                            color: '#9e2146',
                            '::placeholder': {
                                color: '#ff9c95',
                            },
                        },
                    },
                }}

                className="card-element"
            />

            <button className="btn btn-outline mx-auto flex" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};


export default CheckoutForm;