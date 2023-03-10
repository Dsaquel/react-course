import { useState } from 'react'
import Form from '../components/StateUp/Form'
import Screen from '../components/StateUp/Screen'

const StateUp = () => {
  const [inputName, setInputName] = useState('')

  return (
    <div>
      <h1>remonté de l'état</h1>
      <Form inputName={inputName} setInputName={setInputName} />
      <Screen inputName={inputName} />
    </div>
  )
}

export default StateUp
