'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import EventPayment from "@components/ui/MyEvents/EventPayment";
const TicketBooking = ({ event }) => {
  // State for ticket counts
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  // Ticket prices
  const ticketPrices = {
    adult: 10,
    child: 20,
    senior: 5,
  };

  // Calculate total amount
  const calculateTotal = () => {
    return (
      adultCount * ticketPrices.adult +
      childCount * ticketPrices.child +
      seniorCount * ticketPrices.senior
    );
  };

  // Function to open modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Setup for React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log(data); // Handle form submission here, e.g., process payment
    handleCloseModal(); // Close modal after submission
  };

  return (
    <>
      <div className="heading">Ticket Price</div>

      {/* Adult Tickets */}
      <div className="count">
        <div className="title">Adult (${ticketPrices.adult})</div>
        <div className="detail">
          <div
            className="box"
            onClick={() => setAdultCount(Math.max(adultCount - 1, 0))}
          >
            -
          </div>
          {adultCount}
          <div
            className="box"
            onClick={() => setAdultCount(adultCount + 1)}
          >
            +
          </div>
        </div>
      </div>

      {/* Child Tickets */}
      <div className="count">
        <div className="title">Child (${ticketPrices.child})</div>
        <div className="detail">
          <div
            className="box"
            onClick={() => setChildCount(Math.max(childCount - 1, 0))}
          >
            -
          </div>
          {childCount}
          <div
            className="box"
            onClick={() => setChildCount(childCount + 1)}
          >
            +
          </div>
        </div>
      </div>

      {/* Senior Tickets */}
      <div className="count">
        <div className="title">Seniors (${ticketPrices.senior})</div>
        <div className="detail">
          <div
            className="box"
            onClick={() => setSeniorCount(Math.max(seniorCount - 1, 0))}
          >
            -
          </div>
          {seniorCount}
          <div
            className="box"
            onClick={() => setSeniorCount(seniorCount + 1)}
          >
            +
          </div>
        </div>
      </div>

      {/* Total Amount */}
      <div className="total">
        <div className="title">Total Amount</div>
        <div className="price">CA ${calculateTotal()}</div>
      </div>

      {/* Button to open modal */}
      <button onClick={handleOpenModal}>
        Get Ticket
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="modal change-location-modal show" id="buy-ticket" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog" style={{ display: 'block', paddingLeft: '0px' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header d-flex">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">{event.eventTitle}</h1>
                <div className="" style={{ textAlign: 'center', width: '40%' }}>
                <button type="button" style={{ fontSize: '14px', color: '#fff', float: 'right' }} onClick={handleCloseModal}>CANCEL</button>
              </div>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)} style={{ msFlexDirection: 'column' }}>
                  <div className="in-1-col total" style={{ fontSize: '24px', fontWeight: '500' }}>
                    Total amount : ${calculateTotal()}
                  </div>
                  <div className="ticket" style={{ color: '#4D4D4D', fontSize: '20px' }}>Ticket : {adultCount + childCount + seniorCount}</div>
                  <div className="in-1-col">
                    <img src="./images/card.svg" alt="" />
                    <span>Card</span>
                  </div>

                  <div className="input-group in-1-col">
                    <label>First Name<span style={{ color: '#EF1D26' }}>*</span></label>
                    <input {...register("firstName", { required: "First name is required" })} type="text" placeholder="Enter first name" />
                    {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
                  </div>

                  <div className="input-group in-1-col">
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
                      <input {...register("useAsBillingName")} type="checkbox" checked />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <EventPayment />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketBooking;