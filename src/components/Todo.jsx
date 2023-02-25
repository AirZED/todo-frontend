//importing fetch all todos
import useFetchData from "../hooks/fetchData";

const Todo = (props) => {
  const { data, isPending, error } = useFetchData(
    "http://localhost:8000/api/v1/todos"
  );

  if (data) {
    console.log(data);
  }
  return (
    <div className="bg-white">
      <h1>Sleeping for 8 hours</h1>
      <p>This is because I want to really make my mum happy</p>
    </div>
  );
};

export default Todo;
