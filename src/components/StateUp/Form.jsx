const Form = ({ inputName, setInputName }) => {
  function handleSubmit(e) {
    e.preventDefault()
    setInputName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        type="text"
      />
      <button type="submit">Enregistrer</button>
    </form>
  )
}

export default Form
