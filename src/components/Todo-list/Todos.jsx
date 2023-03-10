import Todo from './Todo'

const Todos = ({ todos, setTodos }) => {
  const handleUpdateTodo = (key, value = undefined) => {
    const todosTemp = [...todos]
    if (value) {
      todosTemp.splice(key, 1, value) // update
    } else {
      todosTemp.splice(key, 1) // delete
    }
    setTodos(todosTemp)
  }

  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <Todo
            todoName={todo}
            key={i}
            index={i}
            handleDeleteTodo={handleUpdateTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
        )
      })}
    </div>
  )
}

export default Todos
