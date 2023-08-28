import { useEffect, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import "./toDo.css";

export default function ToDo() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("DATA");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(todos));
  }, [todos]);

  const addTodoItem = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const toggleCheckBox = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const handleDelete = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <NewTodoForm addTodoItem={addTodoItem} />
      <h3>Todo List:</h3>
      <TodoList
        todos={todos}
        toggleCheckBox={toggleCheckBox}
        handleDelete={handleDelete}
      />
    </div>
  );
}
