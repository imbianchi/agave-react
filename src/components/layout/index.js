import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/products"> Products </Link>
      <Link to="/register"> Register </Link>
      <Link to="/rule"> Rules </Link>
      <Link to="/product/:id"> Product </Link>
    </div>
  )
}

export default Navbar