import { useState } from 'react'
import FormConverter from '../components/converter/FormConverter'
import Result from '../components/converter/Result'

const Converter = () => {
  const [result, setResult] = useState('')
  const [istitleShow, setIsTitleShow] = useState(true)

  return (
    <div>
      <h1>Converter</h1>
      <FormConverter setResult={setResult} />
      <Result result={result} />

      <div
        style={{
          margin: '20px',
        }}
      >
        {istitleShow ? <h2>Titre</h2> : null}

        {istitleShow && <h2>Titre sans else</h2>}

        <button onClick={() => setIsTitleShow(!istitleShow)}>
          Cacher le titre
        </button>
      </div>
    </div>
  )
}

export default Converter
