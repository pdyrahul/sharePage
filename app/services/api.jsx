import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
});

// API endpoint functions
export const getEventCategories = () => api.get('/event/ethnicity-category');
export const getSponsors = () => api.get('/event/sponsored');
export const createSponsor = (data) => api.post('/event/sponsored', data);
export const userProfiles = () => api.get('/event/user/profiles');
console.log(userProfiles)

// More API calls can be added as needed
export default api;
