import { useState } from 'react'

const FormConverter = ({ setResult }) => {
  const [converterInput, setConverterInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setResult(`${converterInput} BTC`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={converterInput}
        onChange={(e) => setConverterInput(e.target.value)}
        type="number"
      />
      <button type="submit">Convertir</button>
    </form>
  )
}

export default FormConverter
