import axios from 'axios';

export const fetchTodos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/todo');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const checkedTodo = async () => {}
export const deleteTodo = async () => {}
