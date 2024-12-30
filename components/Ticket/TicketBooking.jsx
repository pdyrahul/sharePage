'use client'
import React, { useState } from "react";

const TicketBooking = () => {
  // State for ticket counts
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);

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

      <button data-bs-toggle="modal" data-bs-target="#buy-ticket">
        Get Ticket
      </button>
    </>
  );
};

export default TicketBooking;
