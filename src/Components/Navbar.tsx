import { Button, Container, Nav, Navbar as Nbx } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <Nbx className='bg-white shadow-sm mb-3' sticky='top'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>

          <Nav.Link to='/store' as={NavLink}>
            Store
          </Nav.Link>

          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{
            width: '4rem',
            fontSize: '2rem',
            height: '4rem',
            position: 'relative',
          }}
          className='rounded-circle'
        >
          +
          <div
            className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
            style={{
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              fontSize: '1rem',
              position: 'absolute',
              bottom: 0,
              right: 0,
              transform: 'translate(25%,25%)',
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </Nbx>
  )
}

export default Navbar
