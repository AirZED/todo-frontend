const AddTodo = (props) => {
  return (
    <form>
      <div>
        <label htmlFor="todo">Todo</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
      </div>
    </form>
  );
};

export default AddTodo;
