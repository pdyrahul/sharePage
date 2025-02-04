import React from "react";

const TicketCounter = ({ title, price, count, onIncrement, onDecrement }) => {
  return (
    <div className="count">
      <div className="title">{title} (${price})</div>
      <div className="detail">
        <div className="box" onClick={onDecrement}>-</div>
        {count}
        <div className="box" onClick={onIncrement}>+</div>
      </div>
    </div>
  );
};

export default TicketCounter;