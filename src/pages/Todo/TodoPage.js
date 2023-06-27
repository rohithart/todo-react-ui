import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Tab, Tabs } from '@mui/material';

import { fetchTodos, updateTodo,  deleteTodo, createTodo} from '../../services/todoService';
import ToDoCard from './TodoCard';
import Empty from '../../components/Empty';
import TextModal from '../../components/TextModal';
import Heading from '../../components/Heading';

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

  .tab-container {
    display: flex;
    justify-content: center;
  }
`;

const TodoPage = () => {
  const [activeTodos, setActiveTodos] = useState([]);
  const [inactiveTodos, setInactiveTodos] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const modalData = {
    title: 'Add new Todo',
    placeholder: 'New Todo',
    value: ''
  };

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    const todos = await fetchTodos();

    const active = todos.filter(todo => {
      return todo.is_active === true;
    });

    const inactive = todos.filter(todo => {
      return todo.is_active === false;
    });

    setActiveTodos(active);
    setInactiveTodos(inactive);
    
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (text) => {
    create(text);
    closeModal();
  };

  const markActive = async (todo) => {
    todo.is_active = true;
    await updateTodo(todo);
    updateTodoList();
  }

  const markInActive = async (todo) => {
    todo.is_active = false;
    await updateTodo(todo);
    updateTodoList();
  }

  const deleteThisTodo = async (todo) => {
    await deleteTodo(todo);
    updateTodoList();
  }

  const create = async (text) => {
    const data = {
      description: text
    };
    debugger;
    await createTodo(data);
    updateTodoList();
  } 

  const updateTodoList = async () => {
    await setData();
  };

  return (
    <TodoPageContainer>
      <Heading message="All your todos" />
      <div className='actions'>
        <Button color="secondary" variant="contained" onClick={openModal}>Add new ToDo</Button>
      </div>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Active" />
        <Tab label="Inactive" />
      </Tabs>
      {activeTab === 0 && (
        <div className="row tab-container">
          {activeTodos.map(todo => (
            <ToDoCard key={todo._id} todo={todo} checkedTodo={markInActive} deleteTodo={deleteThisTodo}/>
          ))}
          {activeTodos.length === 0 && <Empty icon="fas fa-clipboard" iconNext="far fa-clipboard" message1="There are no active todos." message2="Start by adding new todo." />}
        </div>
      )}
      {activeTab === 1 && (
        <div className="row  tab-container">
          {inactiveTodos.map(todo => (
            <ToDoCard key={todo._id} todo={todo} checkedTodo={markActive} deleteTodo={deleteThisTodo}/>
          ))}
          {inactiveTodos.length === 0 && <Empty icon="fas fa-clipboard" iconNext="far fa-clipboard" message1="There are no inactive todos." message2="You can mark them inactive." />}
        </div>
      )}

      {modalOpen && (
        <TextModal open={modalOpen} handleClose={closeModal} handleSubmit={handleSubmit} data={modalData}/>
      )}
    </TodoPageContainer>
  );
};

export default TodoPage;
