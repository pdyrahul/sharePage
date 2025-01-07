import React from 'react';
import { Field, ErrorMessage, FieldArray } from 'formik';

const TicketList = ({ name, setStudentValue }) => {
  return (
    <FieldArray name={name}>
      {({ push, remove, form }) => (
        <div className='mt-3'>
          {form.values[name]?.map((_, index) => (
            <div key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '10px' }}>
                <label htmlFor={`${name}[${index}].name`}>Ticket Type:</label>
                <Field name={`${name}[${index}].name`} placeholder="Ticket Type" />
                <ErrorMessage name={`${name}[${index}].name`} component="div" style={{ color: 'red' }} />
              </div>

              <div style={{ marginRight: '10px' }}>
                <label htmlFor={`${name}[${index}].age`}>Ticket Price:</label>
                <Field name={`${name}[${index}].age`} type="number" placeholder="Ticket Price" />
                <ErrorMessage name={`${name}[${index}].age`} component="div" style={{ color: 'red' }} />
              </div>

              <div style={{ marginRight: '10px' }}>
                <label htmlFor={`${name}[${index}].fatherName`}>Quantity Limit</label>
                <Field name={`${name}[${index}].fatherName`} placeholder="Quantity Limit" />
                <ErrorMessage name={`${name}[${index}].fatherName`} component="div" style={{ color: 'red' }} />
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
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => push({ name: '', age: '', fatherName: '' })}
            style={{
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Add
          </button>
        </div>
      )}
    </FieldArray>
  );
};

export default TicketList;
