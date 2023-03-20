import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function MyNavBar() {
  return (
  <>
  <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#2f3a60"}}>
  <Navbar.Brand className="p-0" href="#home">TADS</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav ">
    <Nav className="m-auto">
      <Nav.Link href="#home">Apresentação</Nav.Link>
      <Nav.Link href="#link">Projeto pedagógico do curso</Nav.Link>
      <Nav.Link href="#link">Notícias</Nav.Link>

      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
  );
}

export default MyNavBar;
