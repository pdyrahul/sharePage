
import React, { useState } from 'react';
import { FaSave, FaTrashAlt } from 'react-icons/fa';

const TicketTable = ({tickets, setTickets}) => {
      

    // Add a new ticket row
    const addTicket = () => {
        const id = Date.now().toString(); // Unique identifier for each ticket
        setTickets((prev) => {
            const updated = new Map(prev);
            updated.set(id, { name: '', price: '', quantity: '', isNew: true });
            return updated;
        });
    };

    // Save a ticket
    const saveTicket = (id) => {
        setTickets((prev) => {
            const updated = new Map(prev);
            const ticket = updated.get(id);

            // Validate fields
            if (!ticket.name || !ticket.price || !ticket.quantity) {
                alert('Please fill in all fields before saving.');
                return prev;
            }

            updated.set(id, { ...ticket, isNew: false });
            return updated;
        });
    };

    // Update ticket details while editing
    const updateTicket = (id, field, value) => {
        setTickets((prev) => {
            const updated = new Map(prev);
            const ticket = updated.get(id);
            if (!ticket) return prev;

            updated.set(id, { ...ticket, [field]: value });
            return updated;
        });
    };

    // Remove a ticket
    const removeTicket = (id) => {
        setTickets((prev) => {
            const updated = new Map(prev);
            updated.delete(id);
            return updated;
        });
    };

    return (
        <div style={{ width: '100%' }}>
            <div style={{ overflowX: 'auto' }}>
                <table
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginTop: '10px',
                        border: '1px solid #ddd',
                    }}
                >
                    <thead>
                        <tr style={{ backgroundColor: '#f9f9f9', border: '1px solid #ccc' }}>
                            <th style={{ padding: '10px', textAlign: 'left' }}>Ticket Type</th>
                            <th style={{ padding: '10px', textAlign: 'left' }}>Ticket Price</th>
                            <th style={{ padding: '10px', textAlign: 'left' }}>Quantity Limit</th>
                            <th style={{ padding: '10px', textAlign: 'right' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...tickets.entries()].map(([id, ticket], index) => (
                            <tr
                                key={id}
                                style={{
                                    backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff',
                                    borderBottom: '1px solid #ddd',
                                    
                                }}
                            >
                                <td>
                                    <input
                                        type="text"
                                        maxLength={20}
                                        value={ticket.name}
                                        onChange={(e) => updateTicket(id, 'name', e.target.value)}
                                        readOnly={!ticket.isNew}
                                        style={{
                                            width: '100%',
                                            padding: '5px',
                                            border: ticket.isNew ? '1px solid #ccc' : 'none',
                                            backgroundColor: ticket.isNew ? '#fff' : 'transparent',
                                            textTransform: 'capitalize',
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={ticket.price}
                                        onChange={(e) => updateTicket(id, 'price', e.target.value)}
                                        readOnly={!ticket.isNew}
                                        style={{
                                            width: '100%',
                                            padding: '5px',
                                            border: ticket.isNew ? '1px solid #ccc' : 'none',
                                            backgroundColor: ticket.isNew ? '#fff' : 'transparent',
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={ticket.quantity}
                                        onChange={(e) => updateTicket(id, 'quantity', e.target.value)}
                                        readOnly={!ticket.isNew}
                                        style={{
                                            width: '100%',
                                            padding: '5px',
                                            border: ticket.isNew ? '1px solid #ccc' : 'none',
                                            backgroundColor: ticket.isNew ? '#fff' : 'transparent',
                                        }}
                                    />
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    {ticket.isNew ? (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() => saveTicket(id)}
                                                style={{
                                                    backgroundColor: 'green',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '5px',
                                                    padding: '5px 10px',
                                                    cursor: 'pointer',
                                                    marginRight: '5px',
                                                }}
                                            >
                                                <FaSave />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => removeTicket(id)}
                                                style={{
                                                    backgroundColor: '#c11',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '5px',
                                                    padding: '5px 10px',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => removeTicket(id)}
                                            style={{
                                                backgroundColor: '#c11',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '5px',
                                                padding: '5px 10px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button
                type="button"
                onClick={addTicket}
                style={{
                    backgroundColor: '#c11',
                    color: 'white',
                    border: 'none',
                    marginTop: '5px',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    float: 'right',
                }}
            >
                Add Ticket
            </button>
        </div>
    );
};

export default TicketTable;
