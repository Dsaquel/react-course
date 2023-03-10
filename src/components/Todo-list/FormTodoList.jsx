import { useState } from 'react'

const FormTodoList = ({ setTodos }) => {
  const [todoInputName, setTodoInputName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!todoInputName.length) return
    setTodos((todos) => [...todos, todoInputName])
    setTodoInputName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todoInputName}
        onChange={(e) => setTodoInputName(e.target.value)}
        type="text"
      />
      <button type="submit">Enregistrer le todo</button>
    </form>
  )
}

export default FormTodoList
