import { Checkbox } from "@mui/material";
import { Todo } from "../../models/Todo";
import "./TodoCard.scss";
interface ToDoCardProps {
  todo: Todo;
  checkedTodo: (data: Todo) => void;
  deleteTodo: (id: string) => void;
}

function ToDoCard({ todo, checkedTodo, deleteTodo }: ToDoCardProps) {
  return (
    <div className="todo-container">
      <Checkbox
        className="checkbox"
        color="secondary"
        checked={todo.is_active}
        onChange={() => checkedTodo(todo)}
      />
      <div className="todo-details">
        <span>{todo.description}</span>
        <span className="todo-timestamps">
          <span>
            <i
              className="far fa-clock"
              aria-label="Last updated at"
              title="Last updated at"
            ></i>
            {todo.updatedAt}
          </span>
          {!todo.is_active && (
            <i
              className="far fa-trash-alt delete-todo"
              onClick={() => deleteTodo(todo._id)}
            ></i>
          )}
        </span>
      </div>
    </div>
  );
}

export default ToDoCard;
