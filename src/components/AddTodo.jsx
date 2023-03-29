// importing from react
import { useReducer } from "react";

// importing useFetch Hook
import useFetch, { url } from "../hooks/fetchData";

// importing from react-icons
import { AiOutlineClose } from "react-icons/ai";

// Input field Reducer
const inputReducer = (state, action) => {
  if (action.type === "EDIT") {
    return { value: action.val };
  }
  if (action.type === "BLUR") {
    return { value: state.value, blur: true };
  }
  return { value: "", blur: false };
};

const AddTodo = (props) => {
  const [inputState, dispatchFn] = useReducer(inputReducer, {
    value: "",
    blur: false,
  });
  const { data, isPending, error, postData } = useFetch(url, "POST");

  const addTodoSubmitHandler = () => {
    postData("MFONISO");
  };

  const inputClassName =
    "hover:bg-slate-200 hover:border-2 active:border-2 border-2 border-black focus:outline-none";
  return (
    <form
      className="relative top-1 right-0 left-0 m-auto bg-white p-4 text-black [&>*]:flex [&>*]:flex-col [&>*]:my-3 [&>*>input]:p-2 [&>*>input]:bg-white"
      onSubmit={addTodoSubmitHandler}
    >
      <AiOutlineClose
        className=" absolute top-4 right-4 text-xl cursor-pointer "
        onClick={props.onClose}
      />

      <h1 className="text-center">Add Todo Form</h1>
      <div>
        <label htmlFor="todo">Todo</label>
        <input
          className={inputClassName}
          type="text"
          onChange={(event) =>
            dispatchFn({ type: "EDIT", val: event.target.value })
          }
          value={inputState.value}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          className={inputClassName}
          type="text"
          id="description"
          onChange={(event) =>
            dispatchFn({ type: "EDIT", val: event.target.value })
          }
          value={inputState.value}
        />
      </div>
      <button
        type="submit"
        className="m-auto bg-black text-white px-2 py-1 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default AddTodo;
