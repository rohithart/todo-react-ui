import React, { useState, useEffect } from "react";
import { Button, Tab, Tabs } from "@mui/material";

import { useTodo } from "../../hooks/todo";
import ToDoCard from "../../components/TodoCard/TodoCard";
import Empty from "../../components/Empty/Empty";
import TextModal from "../../components/TextModal/TextModal";
import Heading from "../../components/Heading/Heading";
import { Todo } from "../../models/Todo";
import "./TodoPage.scss";

const TodoPage = () => {
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
  const [inactiveTodos, setInactiveTodos] = useState<Todo[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const { getAllTodo, createTodo, updateTodo, deleteTodo } = useTodo();

  const modalData = {
    title: "Add new Todo",
    placeholder: "New Todo",
    value: "",
  };

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    const todos = await getAllTodo();
    const active: Todo[] = todos.filter((todo: Todo) => {
      return todo.is_active === true;
    });

    const inactive: Todo[] = todos.filter((todo: Todo) => {
      return todo.is_active === false;
    });

    setActiveTodos(active);
    setInactiveTodos(inactive);
  };

  const handleTabChange = (
    event: any,
    newValue: React.SetStateAction<number>
  ) => {
    setActiveTab(newValue);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (text: string) => {
    create(text);
    closeModal();
  };

  const markActive = async (todo: Todo) => {
    todo.is_active = true;
    await updateTodo(todo);
    updateTodoList();
  };

  const markInActive = async (todo: Todo) => {
    todo.is_active = false;
    await updateTodo(todo);
    updateTodoList();
  };

  const deleteThisTodo = async (id: string) => {
    await deleteTodo(id);
    updateTodoList();
  };

  const create = async (text: string) => {
    const data = {
      description: text,
      is_active: true,
    };
    await createTodo(data);
    updateTodoList();
  };

  const updateTodoList = async () => {
    await setData();
  };

  return (
    <div>
      <Heading message="All your todos" />
      <div className="actions">
        <Button color="secondary" variant="contained" onClick={openModal}>
          Add new ToDo
        </Button>
      </div>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Active" />
        <Tab label="Inactive" />
      </Tabs>
      {activeTab === 0 && (
        <div className="row tab-container">
          {activeTodos.map((todo) => (
            <ToDoCard
              key={todo._id}
              todo={todo}
              checkedTodo={markInActive}
              deleteTodo={deleteThisTodo}
            />
          ))}
          {activeTodos.length === 0 && (
            <Empty
              icon="fas fa-clipboard"
              iconNext="far fa-clipboard"
              message1="There are no active todos."
              message2="Start by adding new todo."
            />
          )}
        </div>
      )}
      {activeTab === 1 && (
        <div className="row  tab-container">
          {inactiveTodos.map((todo) => (
            <ToDoCard
              key={todo._id}
              todo={todo}
              checkedTodo={markActive}
              deleteTodo={deleteThisTodo}
            />
          ))}
          {inactiveTodos.length === 0 && (
            <Empty
              icon="fas fa-clipboard"
              iconNext="far fa-clipboard"
              message1="There are no inactive todos."
              message2="You can mark them inactive."
            />
          )}
        </div>
      )}

      {modalOpen && (
        <TextModal
          open={modalOpen}
          handleClose={closeModal}
          handleSubmit={handleSubmit}
          data={modalData}
        />
      )}
    </div>
  );
};

export default TodoPage;
