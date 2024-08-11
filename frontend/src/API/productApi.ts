import { toast } from "sonner";
import { errorMessage } from "../utils/helper";
import axios from "axios";
import { AppConfig } from "../config/app.config";
import { IProduct } from "../interface/product";

export const getProducts = async (url: String) => {
  try {
    const { data } = await axios.get(`${AppConfig.API_URL}/products`);
    console.log(data);
    return data as IProduct[];
  } catch (error) {
    toast.error(errorMessage(error));
  }
};

export const getProductById = async (id: string) => {
  try {
    const { data } = await axios.get(`${AppConfig.API_URL}/products/$(id)`);
    console.log(data);
    return data;
  } catch (error) {
    toast.error(errorMessage(error));
  }
};

export const getRelatedProduct = async (id: string) => {
    try {
      const { data } = await axios.get(`${AppConfig.API_URL}/related-products/$(id)`);
      console.log(data);
      return data;
    } catch (error) {
      toast.error(errorMessage(error));
    }
  };
