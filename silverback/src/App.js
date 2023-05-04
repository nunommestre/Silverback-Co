import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="transparent" variant="dark" expand="lg">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link className="mx-3">
        one
      </Nav.Link>
      <Nav.Link className="mx-3">
        two
      </Nav.Link>
    </Nav>
    <Nav className="mx-auto">
    <div className="gorilla-image-wrapper">
    <img
      src="https://static.vecteezy.com/system/resources/previews/000/296/674/original/cute-gorilla-on-white-background-vector.jpg"
      alt="Silverback Gorilla"
      className="gorilla-image"
    />
  </div>
    </Nav>
    <Nav className="mx-auto">
      <Nav.Link className="mx-3">
        three
      </Nav.Link>
      <Nav.Link className="mx-3">
        four
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


      <div className="background-image"></div>
      <h1 className="centered">Silverback Co.</h1>
      <p className='who-we'>Who We Are?</p>
      <p className='who-we-arrow'>v</p>
    </div>
  );
}

export default App;
