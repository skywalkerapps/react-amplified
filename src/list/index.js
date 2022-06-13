import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "./operations/queries";
import { updateTodo } from "../operations/mutations";

const List = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("Error fetching todos");
    }
  }

  const updateToDoItem = async (id, completed) => {
    const data = { id: id, completed: completed };
    try {
      await API.graphql(graphqlOperation(updateTodo, { input: data }));
    } catch (e) {
      console.log("Error updating item!");
    }
  };

  return (
    <div className="container">
      {todos.map((todo, index) => (
        <div key={todo.id ? todo.id : index} className="todo">
          <p className={todo.completed ? "todoItemCompleted" : "todoItem"}>
            {todo.item}
          </p>
          <input
            type="checkbox"
            name="completed"
            value={todo.completed}
            onChange={(e) => updateToDoItem(todo.id, !todo.completed)}
          ></input>
        </div>
      ))}
    </div>
  );
};

export default List;
