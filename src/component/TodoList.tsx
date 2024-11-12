/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, List, ListItem, Typography } from "@mui/material";

const TodoList = ({ todos, toggleComplete, deleteTodo }: any) => {
  return (
    <>
      <List>
        {todos.map((todo: any) => {
          return (
            <>
              <ListItem
                divider
                sx={{
                  width: "80%",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-around",
                  border: "1px solid light-gray",
                }}
              >
                <Checkbox
                  onClick={() => toggleComplete(todo.id)}
                  checked={todo.completed}
                />
                <Typography
                  style={{ color: todo.isDone ? "green" : "" }}
                  key={todo.id}
                  sx={{
                    width: "70%",
                  }}
                >
                  {todo.text}
                </Typography>
                <Button
                  onClick={() => deleteTodo(todo.id)}
                  color="primary"
                  variant="contained"
                  sx={{
                    marginLeft: 1,
                  }}
                >
                  delete
                </Button>
              </ListItem>
            </>
          );
        })}
      </List>
    </>
  );
};

export default TodoList;
