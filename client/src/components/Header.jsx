import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <section className="navbar-section">
            {['xl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                    <Container>
                        <Navbar.Brand><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Mr._Robot_Logo.svg" alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink to='/dashboard' className="nav-link" >POSTS</NavLink>
                                    <NavLink to='/myposts' className="nav-link" >MY POSTS</NavLink>
                                    <NavLink to='/addpost' className="nav-link" >ADD POST</NavLink>
                                    <NavLink to='/profile' className="nav-link" >PROFILE</NavLink>
                                    <NavLink to='/logout' className="nav-link" >LOGOUT</NavLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </section>
    )
}

export default Header