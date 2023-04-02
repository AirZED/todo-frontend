// importing from react
import { memo } from "react";

const Todo = (props) => {
  return (
    <div className="bg-white text-[black] border-1 border-x-yellow-800 rounded-md my-3 p-4 ">
      <h1>{props.todo}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default memo(Todo);
