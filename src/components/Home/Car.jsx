import CarMenu from './CarMenu'

const Car = ({ name, year, km }) => {
  return (
    <div
      style={{
        background: km > 100000 ? 'red' : 'green',
      }}
    >
      <h2>{name}</h2>
      <h3>
        {year} - {km}km
      </h3>
      <CarMenu />
    </div>
  )
}

export default Car
