import axios from 'axios';
import { Todo } from '../models/Todo';

const useFetchTodos = () => {
  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/todo`);
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  };

  return fetchTodos;
};

const useCreateTodo = () => {
  const createTodo = async (todo: any) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/todo`, todo);
      return response.data;
    } catch (error) {
      console.error('Error creating todo:', error);
      throw error;
    }
  };

  return createTodo;
};

const useUpdateTodo = () => {
  const updateTodo = async (todo: Todo) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/todo/${todo._id}`, todo);
      return response.data;
    } catch (error) {
      console.error('Error updating todo', error);
      throw error;
    }
  };

  return updateTodo;
};

const useDeleteTodo = () => {
  const deleteTodo = async (id: string) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/todo/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting todo', error);
      throw error;
    }
  };

  return deleteTodo;
};

export { useFetchTodos, useCreateTodo, useUpdateTodo, useDeleteTodo };
