import axios from "axios";


export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


apiClient.interceptors.request.use(
  (config) => {
    
    
    
    
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);


apiClient.interceptors.response.use(
  (response) => {
    return response.data; 
  },
  (error) => {
    
    if (error.response?.status === 401) {
      console.error("Unauthorized access - redirecting to login");
      
    }
    return Promise.reject(error);
  },
);
