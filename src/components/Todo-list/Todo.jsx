import { useState } from 'react'
import './todo.css'

const Todo = ({ todoName, index, handleDeleteTodo, handleUpdateTodo }) => {
  const [isUpdateShow, setIsUpdateShow] = useState(false)
  const [todoInputNameUpdate, setTodoInputNameUpdate] = useState(todoName)

  const updateTodo = () => {
    handleUpdateTodo(index, todoInputNameUpdate)
    setIsUpdateShow(false)
  }
  return (
    <div className="todo">
      <div>{todoName}</div>
      <button onClick={() => handleDeleteTodo(index)}>delete</button>
      <button onClick={() => setIsUpdateShow(!isUpdateShow)}>
        Autre solution
      </button>

      {isUpdateShow && (
        <div>
          <input
            type="text"
            value={todoInputNameUpdate}
            onChange={(e) => setTodoInputNameUpdate(e.target.value)}
          />
          <button onClick={updateTodo}>modifier</button>
        </div>
      )}
    </div>
  )
}

export default Todo
