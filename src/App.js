import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar expand="lg" className="custom-navbar" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home" className="logo">
              <span className="bb-logo">BB</span> Branded Buys
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto nav-links">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#login" className="login-btn">Login</Nav.Link>
                <Nav.Link href="#signup" className="signup-btn">Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
        </header>
          <h1 id='buy'>BUY CUPS AT A CHEAP RATE!!</h1>
        <main className='d-flex justify-content-between p-4'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.forlifedesignusa.com/cdn/shop/products/550-CAR.jpg?v=1581640656" />
            <Card.Body>
              <Card.Title>A Cup</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Buy Cup</Button>
            </Card.Body>
          </Card> 
                  <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.forlifedesignusa.com/cdn/shop/products/550-CAR.jpg?v=1581640656" />
            <Card.Body>
              <Card.Title>A Cup</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Buy Cup</Button>
            </Card.Body>
          </Card> 
                  <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.forlifedesignusa.com/cdn/shop/products/550-CAR.jpg?v=1581640656" />
            <Card.Body>
              <Card.Title>A Cup</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Buy Cup</Button>
            </Card.Body>
          </Card> 
        </main>
        <footer></footer>
    
      </div>
    </>
  );
}

export default App;
