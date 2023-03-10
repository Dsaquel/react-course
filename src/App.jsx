import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Squares from './pages/Squares'
import Formulaires from './pages/Formulaires'
import Computer from './pages/Computer'
import Background from './pages/Background'
import Arrays from './pages/Arrays'
import Movies from './pages/Movies'
import StateUp from './pages/StateUp'
import Converter from './pages/Converter'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/squares" element={<Squares />} />
        <Route path="/formulaires" element={<Formulaires />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/background" element={<Background />} />
        <Route path="/arrays" element={<Arrays />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/state-up" element={<StateUp />} />
        <Route path="/converter" element={<Converter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
