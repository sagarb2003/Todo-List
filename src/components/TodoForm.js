import React from 'react'

const TodoForm = ({handleSubmit,todo,setTodo,editId}) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        placeholder="Enter Todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">{editId ? "Edit" : "Add"}</button>
    </form>
  );
}

export default TodoForm