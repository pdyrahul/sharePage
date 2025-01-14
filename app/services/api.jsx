import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
});

// API endpoint functions
export const saveEvent= (submitData)=>api.post("/event", submitData);
export const getEventCategories = () => api.get("/event/ethnicity-category");
export const getSponsors = () => api.get("/event/sponsored");
export const createSponsor = (data) => api.post("/event/sponsored", data);
export const deleteSponsor = (userId) => api.delete(`/event/sponsored/${userId}`);
export const updateSponsor = (userId) => api.put(`/event/sponsored/${userId}`);
export const userProfiles = () => api.get("/event/user/profiles");
export const setProfile = (userId) => api.get(`/event/user/set-profile/${userId}`);

export default api;
