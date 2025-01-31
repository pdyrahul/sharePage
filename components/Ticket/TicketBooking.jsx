'use client'
import React, { useState } from "react";

const TicketBooking = () => {
  // State for ticket counts
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false); // New state for modal

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
        <div className="modal fade" id="buy-ticket" tabIndex="-1" role="dialog" aria-labelledby="buy-ticket-label" aria-hidden="true" style={{ display: modalOpen ? 'block' : 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="buy-ticket-label">Confirm Purchase</h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Your total is CA ${calculateTotal()}. Do you want to proceed?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                <button type="button" className="btn btn-primary">Purchase</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketBooking;