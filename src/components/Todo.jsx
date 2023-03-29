//importing fetch all todos
import useFetchData from "../hooks/fetchData";

// importing url
import { url } from "../hooks/fetchData";

const Todo = (props) => {
  const { data, isPending, error } = useFetchData(url);

  if (data) {
    console.log(data);
  }
  return (
    <div className="bg-white color-black">
      <h1>Sleeping for 8 hours</h1>
      <p>This is because I want to really make my mum happy</p>
    </div>
  );
};

export default Todo;
