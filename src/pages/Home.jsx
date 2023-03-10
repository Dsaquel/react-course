import Car from '../components/Home/Car'

const Home = () => {
  return (
    <div>
      <Car name="208" year={2010} km={15000} />
      <Car name="Focus" year={2010} km={150000} />
      <Car name="Scenic" year={2010} km={90000} />
      <Car name="Picasso" year={2010} km={220000} />
    </div>
  )
}

export default Home
