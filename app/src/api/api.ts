//Here we'll define the axios endpoints we'll be using to interact with our given mock backend
import axios from 'axios'
import { Dish } from '../models/dishes'

const BACKEND_URL="http://localhost:9000"

export const getDishes = async () => {
    try {
        const response = await axios.get(BACKEND_URL+"/dishes");
        // Handle the response data
        console.log(response.data);
        return response
      } catch (error) {
        // Handle error
        console.error(error);
      }
}

export const clearDishes = async () => {
    try {
        const response = await axios.get(BACKEND_URL+"/dishes/clear");
        // Handle the response data
        console.log(response.data);
        return "Menu cleared successfully!"
      } catch (error) {
        // Handle error
        console.error(error);
      }
}

export const getDishById = async (id: Number) => {
    try {
        const response = await axios.get(BACKEND_URL+"/dishes/:"+id.toString());
        // Handle the response data
        console.log(response.data);
        return response
      } catch (error) {
        // Handle error
        console.error(error);
      }
}

export const createOrUpdateDish = async (dish: Dish) => {
    try {
        const response = await axios.put(BACKEND_URL+"/dishes", dish);
        // Handle the response data
        console.log(response.data);
        return response
    } catch (error) {
        // Handle error
        console.error(error);
    }
}

export const deleteDish = async (id: Number) => {
    try {
        const response = await axios.delete(BACKEND_URL+"/dishes/:"+id.toString());
        // Handle the response data
        console.log(response.data);
        return response
      } catch (error) {
        // Handle error
        console.error(error);
      }
}