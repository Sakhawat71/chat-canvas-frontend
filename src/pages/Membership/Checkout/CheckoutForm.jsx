import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './style.css';
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserData from "../../../hooks/useUserData";
import toast from "react-hot-toast";

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const axiosSecure = useAxiosSecure();
    const [user, refetch] = useUserData([]);

    const price = 9.99;

    useEffect(() => {
        try {
            axiosSecure.post('/api/v1/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        } catch (error) {
            console.error('Error fetching client secret:', error);
        }

    }, [axiosSecure, price])


    // from submit function
    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // send card info
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.error('Error creating payment method:', error);
            setErrorMessage(error.message);
        } else {
            console.log('Payment method created successfully:', paymentMethod);
            setErrorMessage('')
        }


        // confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name : user?.name || 'anonymous',
                    email : user?.email || 'anonymous',
                }
            }
        })
        if(confirmError) {
            console.error('Error for payment :', confirmError);
            setErrorMessage(confirmError.message);
        }
        else{
            console.log('Payment successfully:', paymentIntent);
            setErrorMessage('')

            if(paymentIntent.status === "succeeded"){
                setSuccessMessage('Payment Successful!')

                axiosSecure.patch(`/api/v1/update-user/${user?.email}`)
                .then(res => {
                    // console.log(" update user bronge to gold: ",res.data);
                    if(res.data.modifiedCount === 1){
                        toast.success("Congratulations! You have successfully purchased the Gold Membership.")
                        refetch()
                    }
                })
            }
        }


    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full md:w-2/3 lg:w-1/2 mt-10 flex-row items-center py-5 "
        >
            <p className="text-center text-green-600">{successMessage}</p>

            <CardElement
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

                className="card-element bg-white"
            />

            <p className="text-center text-red-600">{errorMessage}</p>

            <button className="btn btn-outline mx-auto flex mt-5" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};


export default CheckoutForm;