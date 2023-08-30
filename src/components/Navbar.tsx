import  Container  from "react-bootstrap/Container";
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="/src/assets/cornerstone.png" alt="Cornerstone" width="25%" height="25%" className="d-inline-block" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><h4>Home</h4></Nav.Link>
            <Nav.Link href="#about"><h4>About Us</h4></Nav.Link>
            <Nav.Link href="#schedule"><h4>Our Schedule</h4></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;