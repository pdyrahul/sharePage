"use client";
import CheckoutForm from "./CheckoutForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";



if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);




export default function EventPayment() {

    console.log(process.env.STRIPE_SECRET_KEY);
    // if (process.env.STRIPE_SECRET_KEY === undefined) {
    //     throw new Error("STRIPE_SECRET_KEY is not defined");
    // } 
    // 
    const clientSecret = '';

    const amount = 3500;
    const options = {
        mode: "payment",
        amount: amount,
        currency: "usd",

        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    };
    return (
        <>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm amount={amount} />
            </Elements>
        </>
    )
}
