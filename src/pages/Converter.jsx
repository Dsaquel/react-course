import { useState } from 'react'
import FormConverter from '../components/converter/FormConverter'
import Result from '../components/converter/Result'

const Converter = () => {
  const [result, setResult] = useState('')

  return (
    <div>
      <h1>Converter</h1>
      <FormConverter setResult={setResult} />
      <Result result={result} />
    </div>
  )
}

export default Converter
