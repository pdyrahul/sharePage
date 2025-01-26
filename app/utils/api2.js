

import axios from 'axios';

const API_BASE_URL = "http://sharepagebackend.test/api/v1"; // Your API base URL

const token = process.env.NEXT_PUBLIC_API_TOKEN

// console.log(token);

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,  // Optional: Set timeout for requests
    headers: {
        'Content-Type': 'application/json',
        // Add other headers like Authorization if needed
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

// Function to make a GET request

function getRequest(endpoint, params) {

    return api.get(endpoint, { params })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}



// Function to make a POST request
function postRequest(endpoint, data) {
    return api.post(endpoint, data)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}



export { getRequest, postRequest };