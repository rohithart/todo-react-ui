import React from 'react';
import { Checkbox } from '@mui/material';
import styled from 'styled-components';

const TodoCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  color:#673ab7;
  border-radius: 6px;
  box-shadow: 5px 10px 8px grey;
  width: 100%;

  mat-checkbox {
    margin-right: 1rem;
  }

  .todo-details {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .delete-todo {
      color: red;
      margin-left: 1rem;
      cursor: pointer;
      float: right;
  
      @include screen('tablet-landscape') {
        float: right;
      }
    }
  
    .todo-timestamps {
      display: flex;
      flex-direction: column;
      align-items:flex-end;
    }

    @include screen('tablet-landscape') {
      flex-direction: column;
    }
  }
`;

const ToDoCard = ({ todo, checkedTodo, deleteTodo }) => {
  return (
    <TodoCardContainer className="todo-container">
      <Checkbox className='checkbox' checked={todo.is_active} onChange={() => checkedTodo(todo._id, todo.is_active)} />
      <div className="todo-details">
        <span>{todo.description}</span>
        <span className="todo-timestamps">
          <span>
            <i className="far fa-clock" aria-label="Last updated at" title="Last updated at"></i>
            {todo.updatedAt}
          </span>
          {!todo.is_active && (
            <i className="far fa-trash-alt delete-todo" onClick={() => deleteTodo(todo._id)}></i>
          )}
        </span>
      </div>
    </TodoCardContainer>
  );
};

export default ToDoCard;
