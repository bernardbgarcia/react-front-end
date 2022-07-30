import {useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./topbar.css";
import {Form, Button} from 'react-bootstrap';

export default function AppNavbar() {

	const { user } = useContext(UserContext);
	const imageStyles = { minWidth: 100, minHeight: 100 };

	console.warn('user');

	const token = localStorage.getItem('token');

	return (
		<Navbar bg="light" expand="lg">
	      <Container>
	        <Navbar.Brand as={ Link } to="/" className="navbar-brand">Best Games Hobby Store</Navbar.Brand>
	        <Navbar.Toggle aria-controls="basic-navbar-nav" />
	        <Navbar.Collapse id="basic-navbar-nav">
	          <Nav className="me-auto navbar-links">
	            <Nav.Link as={ Link } to="/" className="navbar-link">Home</Nav.Link>
	            <Nav.Link as={ Link } to="/products" className="navbar-link">Products</Nav.Link>
	            <Nav.Link as={ Link } to="/carts" className="navbar-link"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
	            
	            {

	            (user.id !== null) ? 
					
					user.isAdmin === true ?

			        	<>
			        	<Nav.Link as={NavLink} to='/dashboard' className="navbar-link">Dashboard</Nav.Link>
			        	<Nav.Link as={NavLink} to='/logout' className="navbar-link">Sign out</Nav.Link>

			        	</>

						:

						<>
						<span></span>
						<Nav.Link as={NavLink} to='/dashboard' className="navbar-link">Dashboard</Nav.Link>

						<Nav.Link as={NavLink} to='/logout' className="navbar-link">Sign out</Nav.Link>

						</>
					
      				:

	            <>

	            <Nav.Link as={ Link } to="/login" className="navbar-link">Login</Nav.Link>
	            
	            </>

	            }

	           </Nav>
	           <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <Button variant="outline-success">Search</Button>
          </Form>
	           <div className="topRight">
          <div className="topbarIconContainer">
           
          </div>
          <div className="topbarIconContainer">
            
          </div>
          <div className="topbarIconContainer">
           
          </div>
          <img src={require('../Images/h-king.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"')} alt="" className="topAvatar" />

        </div>
	        </Navbar.Collapse>
	      </Container>
	    </Navbar>

		)
}