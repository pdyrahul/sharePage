"use client";
import CheckoutForm from "./CheckoutForm";
import { postRequest, setAuthToken } from "lib/api";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const FeaturedAmount = await process.env.NEXT_PUBLIC_STRIPE_AMOUNT;
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function EventPayment({ event_id = null, amount = null }) {
    const [clientSecret, setClientSecret] = useState('');
    setAuthToken(process.env.NEXT_PUBLIC_API_TOKEN);

    useEffect(() => {
        const fetchClientSecret = async () => {
            const response = await postRequest('payment/create-payment-intent', {
                amount: 3500,

            });
            console.log(response);
            setClientSecret(response.clientSecret);
        };
        fetchClientSecret();
    }, []);

    const options = {
        clientSecret: clientSecret,
    };

    if (!clientSecret) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm event_id={event_id} clientSecret={clientSecret} />
            </Elements>
        </>
    )
}
