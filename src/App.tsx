import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css'
import Home from './Pages/Home'
import Store from './Pages/Store'
import About from './Pages/About'
import Navbar from './Components/Navbar'
function App() {
  return (
    <>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Store' element={<Store />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
