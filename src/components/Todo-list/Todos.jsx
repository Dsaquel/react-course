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

  const handleUpdatePositionTodo = (pos, index) => {
    const newTodos = [...todos]
    const newIndex = pos === 'up' ? index - 1 : index + 1
    if (newIndex >= 0 && newIndex < newTodos.length) {
      ;[newTodos[index], newTodos[newIndex]] = [
        newTodos[newIndex],
        newTodos[index],
      ]
      setTodos(newTodos)
    }
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
            handleUpdatePositionTodo={handleUpdatePositionTodo}
          />
        )
      })}
    </div>
  )
}

export default Todos
