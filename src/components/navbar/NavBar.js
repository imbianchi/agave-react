import {Link} from 'react-router-dom'

function NavBar() {
  return(
    <ul>
      <li>
      <Link to="/"> Home </Link>
      </li>
      <li>
      <Link to="/product"> Products </Link>
      </li>
      <li>
      <Link to="/register"> Register </Link>
      </li>
      <li>
      <Link to="/rule"> Rules </Link>
      </li>
      <li>
      <Link to="/single-product/:id"> Product </Link>
      </li>
      <li>
      <Link to="/premioagave"> Agave Award </Link>
      </li>
      
    </ul>
  )
}

export default NavBar