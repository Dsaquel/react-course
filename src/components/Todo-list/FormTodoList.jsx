import { useState } from 'react'

const FormTodoList = ({ todos, setTodos }) => {
  const [todoName, setTodoName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!todoName.length) return
    const todosTemp = [...todos]
    todosTemp.push(todoName)
    setTodos(todosTemp)
    setTodoName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        type="text"
      />
      <button type="submit">Enregistrer le todo</button>
    </form>
  )
}

export default FormTodoList
