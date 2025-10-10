import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className=" bg-gray-200 flex justify-around w-screen ">
      <Link to="/" className="text-black-500">Home</Link>
      <Link to="/about" className="text-yellow-600">About</Link>
    </nav>
  )
}

export default Navbar;
