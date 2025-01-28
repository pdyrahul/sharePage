import axios from 'axios';

const API_BASE_URL = 'http://sharepagebackend.test/api/v1/';  // Your API base URL

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || API_BASE_URL,
    timeout: 10000,
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

//  GET function Request

export const getRequest = (endpoint, params = {}) => {
    return api.get(endpoint, { params })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

// POST Request function

export const postRequest = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;

    } catch (error) {
        return error.response?.data;
    }
};

// PUT Request function
