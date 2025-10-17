import { Link } from 'react-router-dom';

function Navbar() {

  
  return (
    <nav className='bg-gray-200 flex justify-around w-screen p-1.5'>
      <Link to="/" className="text-black hover:border-b-1 border-b-black">Home</Link>
      <Link to="/criar" className="text-black hover:border-b-1 border-b-black">Criar</Link>
      <Link to="/editar" className="text-black hover:border-b-1 border-b-black">Editar</Link>
    </nav>
  )
}

export default Navbar;
