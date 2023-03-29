import { useState } from "react";

import "./App.css";

//importing components
import Todo from "./components/Todo";
import Portal from "./components/UI/Portal";

const App = () => {
  const [addTodo, setAddTodo] = useState(false);

  const openBackdropHandler = () => {
    setAddTodo((prev) => !prev);
  };
  return (
    <div className="App ">
      <div className="flex justify-between align-center">
        <h1>React Node Todo List</h1>
        <button onClick={openBackdropHandler}>Add Todo</button>
      </div>
      <Todo />
      {addTodo && <Portal onClose={openBackdropHandler} />}
    </div>
  );
};

export default App;
