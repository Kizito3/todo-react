import React, { useEffect, useState } from "react";
import styles from "./todoitem.module.css";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

function Todo() {
  const storedItems = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(storedItems);
  // this filter method returns all the todos that are done or completed
  const completedTodos = todos.filter((todo) => todo.done).length;
  const allTodos = todos.filter((todo) => todo).length;

  // store your todos on the browser's localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      {todos.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontWeight: "bolder",
            fontSize: "30px",
          }}
        >
          No todo found
        </p>
      ) : (
        <>
          <TodoList todos={todos} setTodos={setTodos} />
          <Footer completedTodos={completedTodos} allTodos={allTodos} />
        </>
      )}
    </div>
  );
}

export default Todo;
