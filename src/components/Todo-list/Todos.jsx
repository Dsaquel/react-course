import Todo from './Todo'

const Todos = ({ todos, setTodos }) => {
  const handleDeleteTodo = (key) => {
    const todosTemp = [...todos]
    todosTemp.splice(key, 1)
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
            handleDeleteTodo={handleDeleteTodo}
          />
        )
      })}
    </div>
  )
}

export default Todos
