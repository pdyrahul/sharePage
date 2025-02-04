import axios from "axios";
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    "Content-Type": "multipart/form-data",
    // 'Content-Type': 'application/json',
  },
});
// export const userLogin = axios.post("/login");
export const saveEvent = (submitData) => api.post("/event", submitData);
export const getEventCategories = () => api.get("/event/ethnicity-category");
export const getSponsors = () => api.get("/event/sponsored");
export const createSponsor = (data) => api.post("/event/sponsored", data);
export const deleteSponsor = (userId) => api.delete(`/event/sponsored/${userId}`);
export const updateSponsor = (userId, data) => api.post(`/event/sponsored/${userId}`, data);
export const userProfiles = () => api.get("/event/user/profiles");
export const setProfile = (userId) => api.get(`/event/user/set-profile/${userId}`);
export const getEventList = () => api.get("/event");
export const getDraftList = () => api.get("/event?status=1");
export const getActiveList = () => api.get("/event?status=2");
export const postAction = (payload) => api.post("/event/favorite", payload);
export const getEventBySlug = (slug) => api.get(`/event/${slug}`);
export const updateEvent = (slug, data) => api.put(`/event/${slug}`, data);
export const deletegalleryImage = (galleryId) => api.delete(`/event/delete-gallery-image/${galleryId}`);
export const getCategory = () => api.get("/event/category");
export const getCategoryWise = (id, pageNumber) => 
api.get(`/event/event-category-wise/${id}?page=${pageNumber}&perPage=4`);
export const getSmilarEvent = (id) => api.get(`/event/event-category-wise/${id}`);
export const publicEvent = (filter) => {
  const url = filter ? `/event/latest-events?${filter}=true` : `/event/latest-events`;
  return api.get(url);
};
export default api;
