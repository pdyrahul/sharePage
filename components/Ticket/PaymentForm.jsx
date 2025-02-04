// "use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { FaCreditCard } from "react-icons/fa6";

const PaymentForm = ({ onSubmit, total, ticketCount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async (data) => {
    setIsLoading(true);
    console.log("Ticket Data:", data);
    if (!stripe || !elements) {
      console.error("Stripe.js has not yet loaded.");
      return;
    }

    // Perform Stripe payment confirmation
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Redirect to success page after payment is confirmed
        return_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/payment-success`,
      },
    });

    if (error) {
      console.error(error);
    } else {
      // Optionally handle success or other logic here
      onSubmit(data); // Handle form submission logic
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(handlePayment)}>
      <div className="in-1-col total" style={{ fontSize: "24px", fontWeight: "500" }}>
        Total amount: ${total}
      </div>
      <div className="ticket" style={{ color: "#4D4D4D", fontSize: "20px" }}>
        Ticket: {ticketCount}
      </div>

      <div className="in-1-col">
        <img src="./images/card.svg" alt="" />
        <span><FaCreditCard style={{ color: "#c11" }} /> Card</span>
      </div>

      {/* First Name */}
      <div className="input-group in-2-col">
        <label>First Name<span style={{ color: "#EF1D26" }}>*</span></label>
        <input {...register("firstName", { required: "First name is required" })} type="text" placeholder="Enter first name" />
        {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
      </div>

      {/* Last Name */}
      <div className="input-group in-2-col">
        <label>Last Name<span style={{ color: "#EF1D26" }}>*</span></label>
        <input {...register("lastName", { required: "Last name is required" })} type="text" placeholder="Enter last name" />
        {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
      </div>

      {/* Email */}
      <div className="input-group in-1-col">
        <label>Email<span style={{ color: "#EF1D26" }}>*</span></label>
        <input {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })} type="email" placeholder="Enter Email Address" />
        {errors.email && <span className="error-message">{errors.email.message}</span>}
      </div>

      {/* Card Holder's Name */}
      <div className="input-group in-1-col">
        <label>Card Holder's Name<span style={{ color: "#EF1D26" }}>*</span></label>
        <input {...register("cardHolderName", { required: "Cardholder's name is required" })} type="text" placeholder="Card Holder's Name" />
        {errors.cardHolderName && <span className="error-message">{errors.cardHolderName.message}</span>}
      </div>

      {/* 🔹 Stripe PaymentElement */}
      <div className="input-group in-1-col">
        <PaymentElement />
      </div>

      {/* Billing Address */}
      <div className="input-group in-1-5-col">
        <label>Billing Address<span style={{ color: "#EF1D26" }}>*</span></label>
        <input {...register("billingAddress", { required: "Billing address is required" })} type="text" placeholder="Billing Address" />
        {errors.billingAddress && <span className="error-message">{errors.billingAddress.message}</span>}
      </div>

      {/* Postal Code */}
      <div className="input-group in-0-5-col">
        <label>Postal Code<span style={{ color: "#EF1D26" }}>*</span></label>
        <input {...register("postalCode", { required: "Postal code is required" })} type="text" placeholder="Postal Code" />
        {errors.postalCode && <span className="error-message">{errors.postalCode.message}</span>}
      </div>

      {/* Save Card Checkbox */}
      <div className="check-box in-1-col">
        <label className="main-container">
          Save card details for future
          <input {...register("saveCardDetails")} type="checkbox" defaultChecked />
          <span className="checkmark"></span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="modal-footer" style={{ margin: "0", textAlign: "center", width: "100%" }}>
        <div className="payment" style={{ width: "100%" }}>
          <button type="submit" style={{ color: "white", height: "45px", width: "100%", backgroundColor: "#CC1111" }} className="btn btn-primary" disabled={!stripe || isLoading}>
            {isLoading ? 'Processing...' : 'Pay'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
