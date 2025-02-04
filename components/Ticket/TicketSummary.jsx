import React from "react";

const TicketSummary = ({ totalAmount }) => {
  return (
    <div className="total">
      <div className="title">Total Amount</div>
      <div className="price">CA ${totalAmount}</div>
    </div>
  );
};

export default TicketSummary;