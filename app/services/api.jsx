import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

// API endpoint functions
export const getEventCategories = () => api.get('/event/ethnicity-category');
export const getSponsors = () => api.get('/event/sponsored');

// More API calls can be added as needed
export default api;
