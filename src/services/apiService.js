import axios from "axios";
import { toast } from "sonner";

const BASEURL = import.meta.env.VITE_BASEURL;

const HEADERS = {
  "Content-Type": "application/json",
};

const service = axios.create({
  baseURL: BASEURL,
  headers: HEADERS,
  withCredentials: true,
});

service.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const responseData = error.response.data      
      if (responseData?.message) {
          toast.error(`${responseData?.message}`, { duration: 3000 })
      } else {
        const errorMessage = responseData?.message ?? "Something went wrong";
        toast.error(errorMessage, { duration: 2000 });
      }
    }
    console.error("API Error:", error);
    throw new Error("An error occurred while making the request.");
  }
);


export default service;
