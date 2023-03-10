import './todo.css'

const Todo = ({ todoName, index, handleDeleteTodo }) => {
  return (
    <div className="todo">
      <div>{todoName}</div>
      <button onClick={() => handleDeleteTodo(index)}>delete</button>
    </div>
  )
}

export default Todo
