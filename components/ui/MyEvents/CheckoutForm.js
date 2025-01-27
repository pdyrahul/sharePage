import { PaymentElement } from '@stripe/react-stripe-js';
import { useActionState } from "react";
import { paymentAction } from "./paymentAction";



const CheckoutForm = () => {
    const [state, formAction, isPending] = useActionState(paymentAction, {});
    return (
        <form action={formAction} method="post">

            <PaymentElement />
            <div className='pt-3'>
                <button type="submit" className='btn btn-danger '>Submit</button>
            </div>
        </form>
    );
};

export default CheckoutForm;