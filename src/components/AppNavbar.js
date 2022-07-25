// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import {useState} from 'react';
import {useContext} from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./topbar.css";
import {Form, Button} from 'react-bootstrap';
// import { Language, Settings } from "@material-ui/icons";


// 2 ways to render via function or class
export default function AppNavbar() {

	const { user } = useContext(UserContext);


	// State to store the user information stored in the login page
	//const [user, setUser] = useState(localStorage.getItem("email"));
	/* 
		Syntax:
			localStorage.getItem("propertyName")
		getItem() method that returns the value of a specified object item
	
	 */

	console.log(user);

	return (
		<Navbar bg="light" expand="lg">
	      <Container>
	      	{/* as - serves as anchor tag */}
	        <Navbar.Brand as={ Link } to="/" className="navbar-brand">Best Games Hobby Store</Navbar.Brand>
	        <Navbar.Toggle aria-controls="basic-navbar-nav" />
	        <Navbar.Collapse id="basic-navbar-nav">
	          <Nav className="me-auto navbar-links">
	            {/* <Nav.Link href="#home">Home</Nav.Link> */}
	            <Nav.Link as={ Link } to="/" className="navbar-link">Home</Nav.Link>
	            {/* <Nav.Link href="#courses">Courses</Nav.Link> */}
	            {/* <Nav.Link as={ Link } to="/courses">Courses</Nav.Link> */}
	            <Nav.Link as={ Link } to="/products" className="navbar-link">Products</Nav.Link>
	            
	            <Nav.Link as={ Link } to="/carts" className="navbar-link"><FontAwesomeIcon icon={faShoppingCart} />Cart</Nav.Link>
	            
	            

	            {

	            (user.id !== null) ? 
	            	/* <NavDropdown className="dropdown" title={<div style={{display: "inline-block"}}></div>} id="collasible-nav-dropdown">
					        <Nav.Link as={NavLink} to='/dashboard'>Dashboard</Nav.Link>
					       <Nav.Link as={NavLink} to='/logout'>Sign out</Nav.Link>
      				</NavDropdown> */
	            	
	            	

					
					user.isAdmin === true ?

			        	<>
			        	{/* <Nav.Link as={ Link } to="/allproductsadmin">AllProductsAdmin</Nav.Link> */}
			        	{/* <Nav.Link as={ Link } to="/allusers">AllUsers</Nav.Link> */}
			        	{/* <Nav.Link as={NavLink} to='/adminpanel'>AdminPanel</Nav.Link> */}
			        	<Nav.Link as={NavLink} to='/dashboard' className="navbar-link">Dashboard</Nav.Link>
			        	{/* <Nav.Link as={NavLink} to='/addproduct'>Add Product</Nav.Link> */}
			        	<Nav.Link as={NavLink} to='/logout' className="navbar-link">Sign out</Nav.Link>
			        	{/* <Nav.Link as={NavLink} to='/profilesection'>Account</Nav.Link> */}
			        	</>
						:
						<>
						<span></span>
						<Nav.Link as={NavLink} to='/dashboard' className="navbar-link">Dashboard</Nav.Link>
						{/* <Nav.Link as={NavLink} to='/adminpanel'>Admin Panel</Nav.Link> */}
		            	{/* <Nav.Link as={NavLink} to='/profilesection'>Account</Nav.Link> */}
						<Nav.Link as={NavLink} to='/logout' className="navbar-link">Sign out</Nav.Link>
						</>
					

      				:

	            <>
	        	{/* parsing error when no parent,  */}
	            <Nav.Link as={ Link } to="/login" className="navbar-link">Login</Nav.Link>
	            
	            
	            <Nav.Link as={ Link } to="/register" className="navbar-link">Register</Nav.Link>
	            {/* <Nav.Link as={ Link } to="/register2">Register2</Nav.Link> */}
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
           
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
            
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
           
          </div>
          <img src={require('../Images/h-king.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"')} alt="" className="topAvatar" />
          {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
        </div>
	        </Navbar.Collapse>
	      </Container>
	    </Navbar>

		)
}