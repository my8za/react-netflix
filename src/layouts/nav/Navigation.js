import { useState } from 'react';
import { Container, Button, Form, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchMovie } from '../../redux/api';

function NavScrollExample() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ keyword, setKeyword ] = useState(null);

  const handleSearch = (e) => {
    if(e.keyCode === 13) {
      dispatch(searchMovie(keyword));
      navigate(`movies/?q=${keyword}`);
    }
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand><img onClick={() => {navigate('/')}} width={100} src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940' alt='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/movies')}}>Movies</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={e => {e.preventDefault();}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              // value={keyword}
              onChange={e => setKeyword(e.target.value) }
              onKeyDown={(e)=>{handleSearch(e)}} 
            />
            <Button variant="outline-danger" onClick={()=>{navigate(`/?q=${keyword}`);}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;