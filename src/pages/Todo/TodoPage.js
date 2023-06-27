import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Tab, Tabs } from '@mui/material';

import Heading from '../../components/Heading';

import { fetchTodos, checkedTodo,  deleteTodo} from '../../services/todoService';
import ToDoCard from './TodoCard';

const TodoPageContainer = styled.div`
  .message {
    color: #673ab7;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const TodoPage = () => {
  const [activeTodos, setActiveTodos] = useState([]);
  const [inactiveTodos, setInactiveTodos] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await fetchTodos();

        const active = todos.filter(todo => {
          return todo.is_active === true;
        });

        const inactive = todos.filter(todo => {
          return todo.is_active === false;
        });
      
        setActiveTodos(active);
        setInactiveTodos(inactive);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <TodoPageContainer>
      <Heading message="All your todos" />
      <div className='actions'>
        <Button color="secondary" variant="contained">Add new ToDo</Button>
      </div>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Active" />
        <Tab label="Inactive" />
      </Tabs>
      {activeTab === 0 && (
        <div className="row">
          {activeTodos.map(todo => (
            <ToDoCard key={todo._id} todo={todo} />
          ))}
        </div>
      )}
      {activeTab === 1 && (
        <div className="row">
          {inactiveTodos.map(todo => (
            <ToDoCard key={todo._id} todo={todo} />
          ))}
        </div>
      )}
    </TodoPageContainer>
  );
};

export default TodoPage;
