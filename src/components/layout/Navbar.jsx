import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/squares">Squares</Link>
      <Link to="/formulaires">Formulaires</Link>
      <Link to="/computer">Computer</Link>
      <Link to="/background">background</Link>
      <Link to="/arrays">arrays</Link>
      <Link to="/movies">movies</Link>
      <Link to="/state-up">state up</Link>
      <Link to="/converter">convertisseur</Link>
      <Link to="/todo-list">Todo list</Link>
    </div>
  )
}

export default Navbar
