import React, { useState, useEffect, useRef } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { Field, ErrorMessage } from 'formik';

const errorStyles = { color: 'red', fontSize: '12px' };

const AddressAutocomplete = () => {
  const [address, setAddress] = useState('');
  const autocompleteRef = useRef(null);

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.formatted_address) {
      setAddress(place.formatted_address);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="process.env.GOOGLE_MAPS_API_KEY"
      libraries={['places']}
    >
      <div className="input-group in-0-5-col">
        <label>
          Event Address<span style={{ color: "#EF1D26" }}>*</span>
        </label>
        <Autocomplete
          onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
          onPlaceChanged={handlePlaceSelect}
        >
          <Field
            type="text"
            name="address"
            placeholder="Enter Venue Name"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Autocomplete>
        <ErrorMessage name="address" component="span" style={errorStyles} />
      </div>
    </LoadScript>
  );
};

export default AddressAutocomplete;
