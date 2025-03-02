import { mockRequest } from "@/lib/request";
import { plans } from "@/seeds/pricing";
import { stats } from "@/seeds/projects";
import { testimonials } from "@/seeds/testimonials";

export const fetchTestimonials = async () => {
  return mockRequest(testimonials, 500);
};

export const fetchPlans = async () => {
  return mockRequest(plans, 300);
};

export const fetchStats = async () => {
  return mockRequest(stats, 100);
};
