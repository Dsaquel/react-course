import { useState } from 'react'
import Rect from '../components/rect/Rect'

const Background = () => {
  const [input, setInput] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)

  function handleInputChange(e) {
    setInput(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmited(true)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} type="text" onChange={handleInputChange} />
        <button type="submit">Valider</button>
        <Rect background={input} isSubmited={isSubmited} />
      </form>
    </div>
  )
}

export default Background
