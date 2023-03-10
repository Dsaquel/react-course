import { useState } from 'react'

const Computer = () => {
  const [isSubmited, setIsSubmited] = useState(false)
  const [computerInput, setcomputerInput] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmited(true)
  }
  function handleInputChange(e) {
    setcomputerInput(e.target.value)
  }

  function clearAll() {
    setIsSubmited(false)
    setcomputerInput('')
  }

  return (
    <div>
      <h1>{isSubmited ? computerInput : 'Wait submit'}</h1>
      <form onSubmit={handleSubmit}>
        <input value={computerInput} type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
        <button onClick={clearAll}>clear</button>
      </form>
    </div>
  )
}

export default Computer
