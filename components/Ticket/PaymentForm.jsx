import React from "react";
import { useForm } from "react-hook-form";
import { FaCreditCard } from "react-icons/fa6";

const PaymentForm = ({ onSubmit, total,ticketCount }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <div className="in-1-col total" style={{ fontSize: '24px', fontWeight: '500' }}>
        Total amount : ${total}
      </div>
      <div className="ticket" style={{ color: '#4D4D4D', fontSize: '20px' }}>Ticket : {ticketCount}</div>
      <div className="in-1-col">
        <img src="./images/card.svg" alt="" />
        <span> <FaCreditCard style={{color:'#c11'}}/> Card</span>
      </div>

      <div className="input-group in-2-col">
        <label>First Name<span style={{ color: '#EF1D26' }}>*</span></label>
        <input {...register("firstName", { required: "First name is required" })} type="text" placeholder="Enter first name" />
        {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
      </div>

      <div className="input-group in-2-col">
        <label>Last Name<span style={{ color: '#EF1D26' }}>*</span></label>
        <input {...register("lastName", { required: "Last name is required" })} type="text" placeholder="Enter last name" />
        {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
      </div>

      <div className="input-group in-1-col">
        <label>Email<span style={{ color: '#EF1D26' }}>*</span></label>
        <input {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })} type="email" placeholder="Enter Email Address" />
        {errors.email && <span className="error-message">{errors.email.message}</span>}
      </div>

      <div className="check-box in-1-col">
        <label className="main-container"> Use as billing name
          <input {...register("useAsBillingName")} type="checkbox" defaultChecked />
          <span className="checkmark"></span>
        </label>
      </div>

      <div className="input-group in-2-col">
        <label>Card Number<span style={{ color: '#EF1D26' }}>*</span></label>
        <input {...register("cardNumber", { required: "Card number is required" })} type="text" placeholder="0000 0000 0000 0000" />
        {errors.cardNumber && <span className="error-message">{errors.cardNumber.message}</span>}
      </div>

      <div className="input-group in-2-col" style={{ gap: '16px' }}>
        <div className="input-group in-2-col">
          <label>MM/YY<span style={{ color: '#EF1D26' }}>*</span></label>
          <input {...register("expiry", { required: "Expiry date is required" })} type="text" placeholder="MM/YY" />
          {errors.expiry && <span className="error-message">{errors.expiry.message}</span>}
        </div>
        <div className="input-group in-2-col">
          <label>CVV<span style={{ color: '#EF1D26' }}>*</span></label>
          <input {...register("cvv", { required: "CVV is required" })} type="text" placeholder="CVV" />
          {errors.cvv && <span className="error-message">{errors.cvv.message}</span>}
        </div>
      </div>

      <div className="input-group in-1-col">
        <label>Card Holder's Name<span style={{ color: '#EF1D26' }}>*</span></label>
        <input {...register("cardHolderName", { required: "Cardholder's name is required" })} type="text" placeholder="Card Holder's Name" />
        {errors.cardHolderName && <span className="error-message">{errors.cardHolderName.message}</span>}
      </div>

      <div className="input-group in-1-5-col">
        <label>Billing Address<span style={{ color: '#EF1D26' }}>*</span></label>
        <input {...register("billingAddress", { required: "Billing address is required" })} type="text" placeholder="Billing Address" />
        {errors.billingAddress && <span className="error-message">{errors.billingAddress.message}</span>}
      </div>

      <div className="input-group in-0-5-col">
        <label>Postal Code<span style={{ color: '#EF1D26' }}>*</span></label>
        <input {...register("postalCode", { required: "Postal code is required" })} type="text" placeholder="Postal Code" />
        {errors.postalCode && <span className="error-message">{errors.postalCode.message}</span>}
      </div>

      <div className="input-group in-3-col">
        <label>Country<span style={{ color: '#EF1D26' }}>*</span></label>
        <select {...register("country", { required: "Country is required" })} className="form-select">
          <option value="">Select Country</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        {errors.country && <span className="error-message">{errors.country.message}</span>}
      </div>

      <div className="input-group in-3-col">
        <label>Province<span style={{ color: '#EF1D26' }}>*</span></label>
        <select {...register("province", { required: "Province is required" })} className="form-select">
          <option value="">Select Province</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        {errors.province && <span className="error-message">{errors.province.message}</span>}
      </div>

      <div className="input-group in-3-col">
        <label>City<span style={{ color: '#EF1D26' }}>*</span></label>
        <select {...register("city", { required: "City is required" })} className="form-select">
          <option value="">Select City</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        {errors.city && <span className="error-message">{errors.city.message}</span>}
      </div>

      <div className="check-box in-1-col">
        <label className="main-container"> Save card details for future
          <input {...register("saveCardDetails")} type="checkbox" defaultChecked />
          <span className="checkmark"></span>
        </label>
      </div>

      <div className="modal-footer" style={{margin:'0', textAlign: 'center',width:'100%' }}>
        <div className="payment" style={{ width: '100%' }}>
          <button type="submit" style={{ color: 'white', height: '45px', width: '100%', backgroundColor: '#CC1111' }} className="btn btn-primary">Pay</button>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;