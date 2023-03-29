// importing from react
import { useReducer } from "react";

// importing useFetch Hook
import useFetch, { url } from "../hooks/fetchData";

// importing from react-icons
import { GrClose } from "react-icons/gr";

// Input field Reducer
const inputReducer = (state, action) => {
  if (action.type === "EDIT-TODO") {
    return {
      value: { ...state.value, todo: action.payload },
      blur: state.blur,
    };
  }

  if (action.type === "EDIT-DESCRIPTION") {
    return {
      value: { ...state.value, description: action.payload },
      blur: state.blur,
    };
  }
  if (action.type === "BLUR") {
    return { value: state.value, blur: true };
  }
  return { value: { todo: "", description: "" }, blur: false };
};

const AddTodo = (props) => {
  const [inputState, dispatchFn] = useReducer(inputReducer, {
    value: { todo: "", description: "" },
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
      className="relative bg-white right-0 left-0 m-auto p-4 text-black [&>*]:flex [&>*]:flex-col [&>*]:my-3 [&>*>input]:p-2 [&>*>input]:bg-white tablet:w-[50%] w-full"
      onSubmit={addTodoSubmitHandler}
    >
      <GrClose
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
            dispatchFn({ type: "EDIT-TODO", payload: event.target.value })
          }
          value={inputState.value.todo}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          className={inputClassName}
          type="text"
          id="description"
          onChange={(event) =>
            dispatchFn({
              type: "EDIT-DESCRIPTION",
              payload: event.target.value,
            })
          }
          value={inputState.value.description}
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
