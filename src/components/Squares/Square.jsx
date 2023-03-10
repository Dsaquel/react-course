const Square = ({ background }) => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        background: background ? background : 'green',
      }}
    />
  )
}

export default Square
