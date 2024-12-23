"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='py-3 fixed-top'>
      <Container>
        <Navbar.Brand href="#home">SKILLHILL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action0">Worker</Nav.Link>
            <Nav.Link href="#action1">About us</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="#action2">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;