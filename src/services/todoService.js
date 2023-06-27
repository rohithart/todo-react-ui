import axios from 'axios';

const baseURL = `${process.env.REACT_APP_API_BASE_URL}/todo`;

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${baseURL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await axios.post(`${baseURL}`, todo);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
}

export const updateTodo = async (todo) => {
  try {
    const response = await axios.put(`${baseURL}/${todo._id}`, todo);
    return response.data;
  } catch (error) {
    console.error('Error updating todo', error);
    throw error;
  }
}

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo', error);
    throw error;
  }
}
