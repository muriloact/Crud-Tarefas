import 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Criar from './pages/Criar'
import Editar from './pages/Editar'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/criar' element={<Criar />} />
        <Route path='/editar' element={<Editar />} />
      </Routes>
    </>  
  )
}

export default App

