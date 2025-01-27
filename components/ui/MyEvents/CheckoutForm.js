import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';


import { useState } from 'react';



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (!stripe || !elements) {
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: 'http://localhost:3000/success',
            },
        });
        if (error) {
            console.error(error);
        }
        setIsLoading(false);
    };
    return (
        <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}
            <PaymentElement />
            <div className='pt-3'>
                <button disabled={!stripe || isLoading} className='btn btn-danger'>
                    {isLoading ? 'Processing...' : 'Submit'}
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;