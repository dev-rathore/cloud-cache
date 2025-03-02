import api from "./axios-instance";

export const fetchTestimonials = async () => {
  const response = await api.get("testimonials");
  return response.data;
};

export const fetchPlans = async () => {
  const response = await api.get("plans");
  return response.data;
};

export const fetchStats = async () => {
  const response = await api.get("stats");
  return response.data;
};
