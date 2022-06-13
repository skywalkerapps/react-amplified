import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "../operations/mutations";

const CreateTodo = () => {
  const [item, setItem] = React.useState("");

  const addItemCall = async () => {
    const data = { item: item };
    try {
      await API.graphql(graphqlOperation(createTodo, { input: data }));
    } catch (e) {
      console.log("Error with Adding new item!");
    }
  };

  return (
    <>
      <h1>Add To Do Item</h1>
      <input onChange={(e) => setItem(e.target.value)}></input>
      <button onClick={() => addItemCall()}>ADD</button>
    </>
  );
};

export default CreateTodo;
