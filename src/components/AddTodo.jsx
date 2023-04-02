// importing from react
import { useReducer, useEffect } from "react";

// importing utils
import useFetch, { url } from "../hooks/fetchData";
import { initialState, inputReducer } from "../utils/inputReducer";

// importing from react-icons
import { GrClose } from "react-icons/gr";

const AddTodo = (props) => {
  const [inputState, dispatchFn] = useReducer(inputReducer, initialState);
  const { data, isPending, error, postData } = useFetch(url, "POST");

  const submitTodoHandler = async (event) => {
    event.preventDefault();
    props.onAdd(inputState.value);
    postData(inputState.value);
    props.onClose();

    dispatchFn("CLEAR");
  };

  const { description, dueAt, todo } = inputState.value;
  useEffect(() => {
    dispatchFn({ type: "ENABLE_BTN" });
  }, [description, dueAt, todo]);

  const inputClassName =
    "hover:bg-slate-200 hover:border-2 active:border-2 border-2 border-black focus:outline-none text-blue";
  return (
    <form
      className="relative bg-white right-0 left-0 m-auto p-4 text-black [&>*]:flex [&>*]:flex-col [&>*]:my-3 [&>*>input]:p-2 [&>*>input]:bg-white tablet:w-[50%] w-full"
      onSubmit={submitTodoHandler}
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
      <div>
        <label htmlFor="due_date"> Due Date</label>
        <input
          type="date"
          id="due_date"
          className={inputClassName}
          onChange={(event) =>
            dispatchFn({
              type: "EDIT-DATE",
              payload: event.target.value,
            })
          }
          value={inputState.value.dueAt}
        />
      </div>
      <button
        disabled={!inputState.btnEnable}
        type="submit"
        className={`m-auto bg-black text-white px-3 py-2 rounded ${
          !inputState.btnEnable && "cursor-not-allowed bg-slate-300"
        }`}
      >
        Submit
      </button>
      {isPending && <p>Submitting...</p>}
      {!isPending && data && <p>Todo submitted successfully</p>}
      {!isPending && error && <p>{error.error}</p>}
    </form>
  );
};

export default AddTodo;
