"use client";
import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import TicketCounter from "./TicketCounter";
import TicketSummary from "./TicketSummary";
import Modal from "./Modal";
import PaymentForm from "./PaymentForm";
import { postRequest,setAuthToken } from "@lib/mainApi"; // Ensure this function is correct

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const ticketPrices = {
  adult: 10,
  child: 20,
  senior: 5,
};

const TicketBooking = ({ event }) => {
  const [ticketCounts, setTicketCounts] = useState({ adult: 0, child: 0, senior: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
setAuthToken(process.env.NEXT_PUBLIC_API_TOKEN);
  const calculateTotal = () => {
    return Object.keys(ticketCounts).reduce((total, type) => {
      return total + ticketCounts[type] * ticketPrices[type];
    }, 0);
  };

  const handleOpenModal = async () => {
    if (calculateTotal() === 0) return;
    
    // 🔹 Fetch clientSecret when opening modal
    const response = await postRequest("payment/create-payment-intent", {
      amount: calculateTotal() * 100, // Convert to cents
    });
    
    setClientSecret(response?.clientSecret);
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  const handleSubmit = async (data) => {
    console.log(data);
    handleCloseModal();
  };

  const options = clientSecret ? { clientSecret } : null;

  return (
    <>
      <div className="heading">Ticket Price</div>
      {Object.keys(ticketPrices).map((type) => (
        <TicketCounter
          key={type}
          title={type.charAt(0).toUpperCase() + type.slice(1)}
          price={ticketPrices[type]}
          count={ticketCounts[type]}
          onDecrement={() => setTicketCounts((prev) => ({ ...prev, [type]: Math.max(prev[type] - 1, 0) }))} 
          onIncrement={() => setTicketCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }))} 
        />
      ))}
      <TicketSummary totalAmount={calculateTotal()} />

      <button 
        onClick={handleOpenModal} 
        disabled={calculateTotal() === 0} 
        style={{ opacity: calculateTotal() === 0 ? 0.5 : 1 }}
      >
        Get Ticket
      </button>

      <Modal isOpen={modalOpen} onClose={handleCloseModal} title={event?.eventTitle}>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentForm onSubmit={handleSubmit} total={calculateTotal()} />
          </Elements>
        ) : (
          <p>Loading payment form...</p>
        )}
      </Modal>
    </>
  );
};

export default TicketBooking;
