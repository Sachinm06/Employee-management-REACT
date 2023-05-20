import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>

            <Navbar bg="black" expand="lg">
                <Container >
                    <Link to={'./'} style={{textDecoration:'none'}}>
                        <Navbar.Brand href="#" className='text-light'> <i class="fa-solid fa-id-card text-info"></i> &nbsp;Employee Management System</Navbar.Brand>

                    </Link>                      <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll >
                            <Nav.Link href="#action1" className='text-light '>Home</Nav.Link>
                            <Nav.Link href="#action2" className='text-light'>Link</Nav.Link>
                            <Nav.Link href="#action3" className='text-light'>Link</Nav.Link>
                            <Link to={'/Add'}>
                                <button className='btn btn-info'>Add New Employee</button>

                            </Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header