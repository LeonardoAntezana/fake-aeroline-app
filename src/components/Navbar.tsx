import { useEffect, useState } from "react";
import { DropMenu, Container } from ".";
import { privateRoutes } from "../constants/routes";
// import { getDestinations } from "../services";
import { Destination } from "../models";
import '../sass/components/Navbar.scss'

const Navbar = () => {
  const [destinations, setDestinations] = useState<Destination[]>([])

  useEffect(() => {
    // getDestinations().then(response => setDestinations(response))
  }, [])

  return (
    <nav className="navbar">
      <Container className="navbar__container">
        <span>Logo</span>
        <ul className="container__links">
          <li className="navbar__links">Mis reservas</li>
          <DropMenu className="dropMenu" title='Destinos' inicialRoute={`/${privateRoutes.DESTINATIONS}`} items={destinations} />
          <li className="navbar__links">Contacto</li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar;