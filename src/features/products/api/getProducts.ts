import { apiClient } from "@/lib/apiClient";
import { Product } from "../types";

export const getProducts = async (): Promise<Product[]> => {
  
  return apiClient.get("https://fakestoreapi.com/products");
};
