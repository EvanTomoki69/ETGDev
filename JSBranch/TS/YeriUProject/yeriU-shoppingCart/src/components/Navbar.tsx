import { Container, Nav, Navbar as NavbarTsume } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

export function Navbar () {
     return (
          <NavbarTsume className="bg-white shadow-sm mb-3">
               <Container>
                    <Nav className="me-auto">
                         <Nav.Link to="/" as={NavLink}>
                         Inicio
                         </Nav.Link>
                         <Nav.Link to="/services" as={NavLink}>
                         Diseños
                         </Nav.Link>
                         <Nav.Link to="/designs" as={NavLink}>
                         Servicios
                         </Nav.Link>
                    </Nav>
               </Container>
          </NavbarTsume>
     )
}