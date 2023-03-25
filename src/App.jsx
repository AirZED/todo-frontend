import "./App.css";

//importing components
import Todo from "./components/Todo";
import Portal from "./components/UI/Portal";

const App = () => {
  return (
    <div className="App ">
      <Todo />
      <Portal />
    </div>
  );
};

export default App;
