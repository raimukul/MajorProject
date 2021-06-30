import React from 'react'
import '../Css/Header.css'
import logo2 from '../Img/logo2.svg'
import {Navbar ,Nav } from 'react-bootstrap'
import { Link  } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const Header = ()=>{
  
    return( 
             <Navbar collapseOnSelect  expand="md"  variant='light' style={{backgroundColor:'white',font:'caption'}} className="headerbg">
                <Navbar.Brand  href="/" ><img src={logo2} style={{width:215,height:60,backgroundColor:'white'}} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='collapsess font-head'>
                    <Nav >
                    <Nav.Link as={Link} to='/' className="text-black"> Home </Nav.Link>
                    <Nav.Link as={Link} to='/about'> About us</Nav.Link>
                    <Nav.Link as={Link} to='/features'> Feature</Nav.Link>
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
                    <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
             </Navbar> 
    )
}
export default withRouter(Header);