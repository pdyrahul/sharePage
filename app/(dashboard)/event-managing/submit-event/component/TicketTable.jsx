import React, { useState } from 'react';
import { FaSave, FaTrashAlt } from 'react-icons/fa'; // Import Save and Trash icons

const TicketTable = () => {
    const [tickets, setTickets] = useState([]);

    // Add a new ticket row
    const addTicket = () => {
        setTickets([
            ...tickets,
            { name: '', price: '', quantity: '', isNew: true }, // New row marked as editable
        ]);
    };

    // Save a new ticket
    const saveTicket = (index) => {
        const ticket = tickets[index];

        // Validate fields before saving
        if (!ticket.name || !ticket.price || !ticket.quantity) {
            alert('Please fill in all fields before saving.');
            return;
        }

        const updatedTickets = tickets.map((t, i) =>
            i === index ? { ...t, isNew: false } : t
        );
        setTickets(updatedTickets);
    };

    // Update ticket details while editing
    const updateTicket = (index, field, value) => {
        const updatedTickets = tickets.map((ticket, i) =>
            i === index ? { ...ticket, [field]: value } : ticket
        );
        setTickets(updatedTickets);
    };

    // Remove a ticket
    const removeTicket = (index) => {
        const updatedTickets = tickets.filter((_, i) => i !== index);
        setTickets(updatedTickets);
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
                        {tickets.map((ticket, index) => (
                            <tr
                                key={index}
                                style={{
                                    backgroundColor: index === 1 ? '#ffffff' : index % 2 === 0 ? '#f9f9f9' : '#ffffff',
                                    borderBottom: '1px solid #ddd', textTransform: 'capitalize',
                                }}
                            >
                                <td>
                                    <input
                                        type="text"
                                        maxLength={20}
                                        value={ticket.name}
                                        onChange={(e) =>
                                            updateTicket(index, 'name', e.target.value)
                                        }
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
                                        onChange={(e) =>
                                            updateTicket(index, 'price', e.target.value)
                                        }
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
                                        onChange={(e) =>
                                            updateTicket(index, 'quantity', e.target.value)
                                        }
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
                                                onClick={() => saveTicket(index)}
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
                                                onClick={() => removeTicket(index)}
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
                                            onClick={() => removeTicket(index)}
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

            {/* Add New Ticket Button */}

            <button
                type="button"
                onClick={addTicket}
                style={{
                    backgroundColor: '#c11',
                    color: 'white',
                    border: 'none',
                    marginTop:'5px',
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
