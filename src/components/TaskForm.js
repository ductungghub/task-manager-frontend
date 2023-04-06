const TaskForm = ({
  createTask,
  name,
  handleInputChange,
  isEditting,
  updateTask,
  inputRef,
}) => {
  return (
    <form className="task-form" onSubmit={isEditting ? updateTask : createTask}>
      <input
        type="text"
        placeholder="Add a Task"
        name="name"
        value={name}
        onChange={handleInputChange}
        // id="inputBox"
        ref={inputRef}
      />
      <button type="submit"> {isEditting ? 'Edit' : 'Add'} </button>
    </form>
  );
};

export default TaskForm;
