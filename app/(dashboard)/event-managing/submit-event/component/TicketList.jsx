import React from 'react';
import { Field, ErrorMessage, FieldArray } from 'formik';
import { AiOutlineDelete } from "react-icons/ai";
import { LuTicketPlus } from "react-icons/lu";
const TicketList = ({ name, setTicketList }) => {
  return (
    <FieldArray name={name}>
      {({ push, remove, form }) => (
        <div className='mt-3'>
          {form.values[name]?.map((_, index) => (
            <div key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '10px' }}>
                <label htmlFor={`${name}[${index}].Ticket_type`}>Ticket Type:</label>
                <Field name={`${name}[${index}].Ticket_type`} placeholder="Ticket Type" />
                <ErrorMessage name={`${name}[${index}].Ticket_type`} component="div" style={{ color: 'red' }} />
              </div>

              <div style={{ marginRight: '10px' }}>
                <label htmlFor={`${name}[${index}].Ticket_price`}>Ticket Price:</label>
                <Field name={`${name}[${index}].Ticket_price`} type="number" placeholder="Ticket Price" />
                <ErrorMessage name={`${name}[${index}].Ticket_price`} component="div" style={{ color: 'red' }} />
              </div>

              <div style={{ marginRight: '10px' }}>
                <label htmlFor={`${name}[${index}].Quantity`}>Quantity Limit</label>
                <Field name={`${name}[${index}].Quantity`} placeholder="Quantity Limit" />
                <ErrorMessage name={`${name}[${index}].Quantity`} component="div" style={{ color: 'red' }} />
              </div>

              <button
                type="button"
                onClick={() => remove(index)}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  marginTop: '28px',
                }}
              >
               <AiOutlineDelete />
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => push()}
            style={{
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
          Add <LuTicketPlus />
          </button>
        </div>
      )}
    </FieldArray>
  );
};

export default TicketList;
