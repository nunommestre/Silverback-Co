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
      <div className="gorilla-sign">
    <img
      src="https://static.vecteezy.com/system/resources/previews/000/296/674/original/cute-gorilla-on-white-background-vector.jpg"
      alt="Silverback Gorilla"
      className="gorilla-image-above-silver"
    />
  </div>
      <h1 className="centered">Silverback Co.</h1>
      <p className='who-we'>Who We Are?</p>
      <p className='who-we-arrow'>v</p>
      <div className="d-flex justify-content-center flex-wrap about-us text-center">
  <p className="pb-3">
    Welcome to Silverback Co, a carpentry, tile, framing, and cleaning company founded by Claud Dos Santos in 2019.
  </p>
  <p className="">
    When we realized that this was a common problem for many renters, seeing that crucial data was hidden behind paywalls or not easily accessible, we knew we could start something to fix it.
  </p>
  <p className="">
    We believe that access to a community-driven data set is key to making informed renting and listing decisions. By building and sharing this data set with everyone, we can bring clarity to the renting process and ease the headaches around negotiating rent.
  </p>
  <p className="">
    If you share our frustration and believe in our mission of rent transparency, we invite you to contribute and help spread our message to the renting world.
  </p>
</div>
<div className="d-flex justify-content-center flex-wrap text-center">
<img
      src="https://wallpapercave.com/wp/wp3604678.jpg"
      alt="Silverback Gorilla"
      className="image-in-list"
    />
</div>
<div className="d-flex justify-content-center flex-wrap text-center mt-2 wt-50">
<img
      src="https://wallpapercave.com/wp/wp3604678.jpg"
      alt="Silverback Gorilla"
      className="image-in-list"
    />
</div>
<div className="d-flex justify-content-center flex-wrap text-center mt-2 wt-50">
<div class="image-container">
  <img src="https://wallpapercave.com/wp/wp3604678.jpg" alt="Original Image" class="original-image" />
  <img src="https://wallpapercave.com/wp/wp7113919.jpg" alt="Hover Image" class="hover-image" />
  <div class="image-overlay">
    <p>This is the overlay text</p>
  </div>
</div>

</div>
<div className="d-flex justify-content-center flex-wrap closer text-center">
  <p className="pb-3">
    Welcome to Silverback Co, a carpentry, tile, framing, and cleaning company founded by Claud Dos Santos in 2019.
  </p>
  <p className="">
    When we realized that this was a common problem for many renters, seeing that crucial data was hidden behind paywalls or not easily accessible, we knew we could start something to fix it.
  </p>
  <p className="">
    We believe that access to a community-driven data set is key to making informed renting and listing decisions. By building and sharing this data set with everyone, we can bring clarity to the renting process and ease the headaches around negotiating rent.
  </p>
  <p className="">
    If you share our frustration and believe in our mission of rent transparency, we invite you to contribute and help spread our message to the renting world.
  </p>
</div>
<div className="d-flex justify-content-center flex-wrap footing-book text-center book-now">
  <p>
   Book Today!
  </p>
</div>
<div className="d-flex justify-content-center flex-wrap footing-book text-center book-now">
  <div className="col-md-6 d-flex justify-content-center align-items-center">
    <h3 className='contact-us'>Contact Us</h3>
  </div>
  <div className="col-md-6 d-flex justify-content-center align-items-center contact-us-form">
  <form className='text-center'>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
</div>
<div className="d-flex justify-content-center flex-wrap footing-book text-center footer">
 
</div>
<div className="d-flex justify-content-center flex-wrap closer text-center">
  <p className="pb-3">
    @ 2023 SILVERBACK CO.
  </p>
</div>

    </div>
  );
}

export default App;