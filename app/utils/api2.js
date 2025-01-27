// api.js
import axios from 'axios';

const API_BASE_URL = 'http://sharepagebackend.test/api/v1/';  // Your API base URL

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,  // Optional: Set timeout for requests
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
// Function to set the auth token
export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};
// Generic GET Request
export const getRequest = async (endpoint, params = {}) => {
    try {
        const response = await api.get(endpoint, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Generic POST Request
export const postRequest = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;

    } catch (error) {
        return error.response.data;
    }
};

// Generic PUT Request
export const putRequest = async (endpoint, data) => {
    try {
        const response = await api.put(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Generic DELETE Request
export const deleteRequest = async (endpoint) => {
    try {
        const response = await api.delete(endpoint);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Error Handling Function
const handleError = (error) => {
    let message = 'An unexpected error occurred. Please try again later.';
    if (error.response) {
        console.error('Server responded with an error:', error.response.data);

        message = error.response.data.message || message; // Customize the message based on API response
        return error.response.data; // Return the error response instead of throwing
    } else if (error.request) {
        console.error('No response from the server:', error.request);
        message = 'No response from the server. Please check your internet connection.';
    } else {
        console.error('Error during request setup:', error.message);
        message = error.message;
    }
    return { success: false, message }; // Return an error object instead of throwing
};
