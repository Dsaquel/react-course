import { useState } from 'react'

const Formulaires = () => {
  const [inputName, setInputName] = useState('')
  const [inputStacks, setInputStacks] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    setInputName('')
    setInputStacks('')
  }
  function handleInputChange(e) {
    setInputName(e.target.value)
  }
  function handleStacksChange(e) {
    setInputStacks(e.target.value)
  }
  return (
    <div>
      <h1>formulaire</h1>
      <form onSubmit={handleSubmit}>
        <input value={inputName} type="text" onChange={handleInputChange} />
        <input value={inputStacks} type="text" onChange={handleStacksChange} />
        <button type="submit">Valider</button>
      </form>
    </div>
  )
}

export default Formulaires
