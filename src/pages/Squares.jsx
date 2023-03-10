import { useState } from 'react'
import Square from '../components/Squares/Square'

const Squares = () => {
  const [backgroundColor, setBackgroundColor] = useState('blue')

  function handleClick() {
    setBackgroundColor('green')
  }
  return (
    <div>
      <Square backgroundColor={backgroundColor} />
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Squares
