import { useState, useEffect } from "react";
import "./App.css";

//importing utls
import { url } from "./hooks/fetchData";
import useFetch from "./hooks/fetchData";

//importing components
import Todo from "./components/Todo";
import Portal from "./components/UI/Portal";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [addTodo, setAddTodo] = useState(false);

  const { data, isPending, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      const { todos: todoArr } = data.data;
      setTodos((prev) => [...prev, ...todoArr]);
    }
  }, [data]);

  const openBackdropHandler = () => {
    setAddTodo((prev) => !prev);
  };

  const addTodoHandler = (each) => {
    setTodos((prev) => [...prev, each]);
  };

  const Todos = () => {
    return (
      <div className="w-[60%] m-auto">
        {todos.map((each, id) => (
          <Todo todo={each.todo} description={each.description} key={id} />
        ))}
      </div>
    );
  };
  return (
    <div className="App ">
      <div className="flex justify-between align-center">
        <h1>React Node Todo List</h1>
        <button onClick={openBackdropHandler}>Add Todo</button>
      </div>
      {isPending && <p>Loading Todos...</p>}
      {!isPending && !error && <Todos />}
      {!isPending && error && <p>An error occured!!!</p>}

      {addTodo && (
        <Portal onClose={openBackdropHandler} onAdd={addTodoHandler} />
      )}
    </div>
  );
};

export default App;
