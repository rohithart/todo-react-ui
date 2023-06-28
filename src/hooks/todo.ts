import axios from "axios";
import ConfigContext from "../context/ConfigContext";

import { Todo } from "../models/Todo";
import { useContext } from "react";

export const useTodo = () => {
  const config = useContext(ConfigContext);
  const baseURL = config.API_BASE_URL;

  const getAllTodo = async () => {
    try {
      const response = await axios.get(`${baseURL}/todo`);
      return response.data;
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  };

  const createTodo = async (todo: any) => {
    try {
      const response = await axios.post(`${baseURL}/todo`, todo);
      return response.data;
    } catch (error) {
      console.error("Error creating todo:", error);
      throw error;
    }
  };

  const updateTodo = async (todo: Todo) => {
    try {
      const response = await axios.put(`${baseURL}/todo/${todo._id}`, todo);
      return response.data;
    } catch (error) {
      console.error("Error updating todo", error);
      throw error;
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const response = await axios.delete(`${baseURL}/todo/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting todo", error);
      throw error;
    }
  };

  return { getAllTodo, createTodo, updateTodo, deleteTodo };
};
