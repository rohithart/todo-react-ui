import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Tab, Tabs } from '@mui/material';

import {
  useFetchTodos,
  useCreateTodo,
  useUpdateTodo,
  useDeleteTodo
} from '../../hooks/todo';
import ToDoCard from './TodoCard';
import Empty from '../../components/Empty';
import TextModal from '../../components/TextModal';
import Heading from '../../components/Heading';
import { Todo } from '../../models/Todo';

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
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
  const [inactiveTodos, setInactiveTodos] = useState<Todo[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchTodos = useFetchTodos();
  const createTodo = useCreateTodo();
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();

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
    const active: Todo[] = todos.filter((todo: Todo) => {
      return todo.is_active === true;
    });

    const inactive: Todo[] = todos.filter((todo: Todo) => {
      return todo.is_active === false;
    });

    setActiveTodos(active);
    setInactiveTodos(inactive);
  };

  const handleTabChange = (event: any, newValue: React.SetStateAction<number>) => {
    setActiveTab(newValue);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (text: any) => {
    create(text);
    closeModal();
  };

  const markActive = async (todo: Todo) => {
    todo.is_active = true;
    await updateTodo(todo);
    updateTodoList();
  }

  const markInActive = async (todo: Todo) => {
    todo.is_active = false;
    await updateTodo(todo);
    updateTodoList();
  }

  const deleteThisTodo = async (todo: any) => {
    await deleteTodo(todo);
    updateTodoList();
  }

  const create = async (text: any) => {
    const data = {
      description: text,
      is_active: true,
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
