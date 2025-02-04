'use client';
import React, { useState } from "react";
import TicketCounter from "./TicketCounter";
import TicketSummary from "./TicketSummary";
import Modal from "./Modal";
import PaymentForm from "./PaymentForm";

const TicketBooking = ({ event }) => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const ticketPrices = {
    adult: 10,
    child: 20,
    senior: 5,
  };

  const calculateTotal = () => {
    return (
      adultCount * ticketPrices.adult +
      childCount * ticketPrices.child +
      seniorCount * ticketPrices.senior
    );
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleSubmit = (data) => {
    console.log(data); // Process payment here
    handleCloseModal();
  };

  return (
    <>
      <div className="heading">Ticket Price</div>
      <TicketCounter title="Adult" price={ticketPrices.adult} count={adultCount} onDecrement={() => setAdultCount(Math.max(adultCount - 1, 0))} onIncrement={() => setAdultCount(adultCount + 1)} />
      <TicketCounter title="Child" price={ticketPrices.child} count={childCount} onDecrement={() => setChildCount(Math.max(childCount - 1, 0))} onIncrement={() => setChildCount(childCount + 1)} />
      <TicketCounter title="Seniors" price={ticketPrices.senior} count={seniorCount} onDecrement={() => setSeniorCount(Math.max(seniorCount - 1, 0))} onIncrement={() => setSeniorCount(seniorCount + 1)} />
      <TicketSummary totalAmount={calculateTotal()} />

      <button onClick={handleOpenModal}>
        Get Ticket
      </button>

      <Modal isOpen={modalOpen} onClose={handleCloseModal} title={event?.eventTitle}>
        <PaymentForm onSubmit={handleSubmit} total={calculateTotal()} ticketCount={adultCount + childCount + seniorCount}  />
      </Modal>
    </>
  );
};

export default TicketBooking;