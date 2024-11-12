/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./App.css";
import { TodoList } from "./component";
import { Button, Container, Stack, TextField } from "@mui/material";
import { initialTodos } from "./constants";


function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoText, setNewTodoText] = useState("");
  const toggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos
        .map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        .sort((a: any, b: any) => a.completed - b.completed)
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev: any) => prev.filter((todo: any) => todo.id !== id));
  };
  const addTodo = (e: any) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };

    setTodos((prev: any) => [newTodo, ...prev]);
    setNewTodoText("");
  };

  return (
    <>
      <Container>
          <h1>To-Do List</h1>
          <Stack direction={'row'} gap={1}>
            <TextField
              variant="outlined"
              onChange={(e) => setNewTodoText(e.target.value)}
              label="Enter Task Name"
              value={newTodoText}
            />
            <Button
              size="large"
              variant={"contained"}
              color="primary"
              onClick={addTodo}
              disabled={newTodoText ? false : true}
            >
              Add Task
            </Button>
          </Stack>

          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
      </Container>
    </>
  );
}

export default App;
