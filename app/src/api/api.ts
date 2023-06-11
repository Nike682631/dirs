//Here we'll define the axios endpoints we'll be using to interact with our given mock backend
import axios from 'axios'
import { Dish } from '../models/dishes'

const BACKEND_URL="http://localhost:9000"

export const getDishes = async () => {
    try {
        const response = await axios.get(BACKEND_URL+"/dishes");
        return response
      } catch (error) {
        // Handle error
        console.error(error);
      }
}

export const clearAllDishes = async () => {
    try {
        const response = await axios.get(BACKEND_URL+"/dishes/clear");
        return "Menu cleared successfully!"
      } catch (error) {
        // Handle error
        console.error(error);
      }
}

export const getDishById = async (id: Number) => {
    try {
        const response = await axios.get(BACKEND_URL+"/dishes/:"+id.toString());
        return response
      } catch (error) {
        // Handle error
        console.error(error);
      }
}

export const createOrUpdateDish = async (dish: Dish) => {
    try {
        const response = await axios.put(BACKEND_URL+"/dishes", dish);
        return response
    } catch (error) {
        // Handle error
        console.error(error);
    }
}

export const deleteDishById = async (id: string) => {
    try {
        const response = await axios.delete(BACKEND_URL+"/dishes/"+id);
        return response
      } catch (error) {
        // Handle error
        console.error(error);
      }
}