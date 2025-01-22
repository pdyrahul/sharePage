import axios from "axios";
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    "Content-Type": "multipart/form-data", 
  },
});
// export const userLogin = axios.post("/login");
export const saveEvent= (submitData)=>api.post("/event", submitData);
export const getEventCategories = () => api.get("/event/ethnicity-category");
export const getSponsors = () => api.get("/event/sponsored");
export const createSponsor = (data) => api.post("/event/sponsored", data);
export const deleteSponsor = (userId) => api.delete(`/event/sponsored/${userId}`);
export const updateSponsor = (userId, data) => api.post(`/event/sponsored/${userId}`, data);
export const userProfiles = () => api.get("/event/user/profiles");
export const setProfile = (userId) => api.get(`/event/user/set-profile/${userId}`);
export const getEventList = () => api.get("/event");
export const getDraftList = () => api.get("/event?status=1");
export const getEventBySlug = (slug) => {
  if (!slug) {
      throw new Error("Slug is required to fetch the event.");
  }
  return api.get(`/event/${slug}`);
};

export const updateEvent = (slug, data) => {
    if (!slug) {
        throw new Error("Slug is required to update the event.");
    }
    return api.post(`/event/${slug}`, data);
}

export default api;
