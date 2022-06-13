import React from "react";
import Amplify from "aws-amplify";

import CreateTodo from "./create";
import List from "./list";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  return (
    <div className="container">
      <h2>Amplify Todos</h2>
      <CreateTodo />
      <List />
    </div>
  );
};

export default App;
