//hooks
import { useState, useEffect, useContext } from 'react';
import {Form, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
//import { useContext } from 'react';


export default function Register() {

	// state hooks to store the values of the input fields
	
	const [email, setEmail] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [mobileNo, setmobileNo] = useState("");
	const navigate = useNavigate();
	// State to determine whether the submit button is enabled or not
	const [isActive, setIsActive] = useState(false);

	function registerUser(e) {

		e.preventDefault();

		fetch(`${ process.env.REACT_APP_API_URL }/users/checkEmail`, {
			method:"POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email
			})
		})
		.then(res => res.json())
		.then(data => {

			console.log(data)

			if(data === true ) {

						Swal.fire({
        			title: "Duplicate Email Found",
        			icon: "error",
        			text: "Kindly provide another email to complete the registration."
        		})

					} else {


						fetch(`${ process.env.REACT_APP_API_URL }/users/register`, {
		        	method: 'POST',
		        	headers: {
		        		'Content-Type': 'application/json'
		        	},
		        	body: JSON.stringify({
		        		firstName: firstName,
								lastName: lastName,
								email: email,
								password: password1,
								mobileNo: mobileNo
		        	})
        		})
						.then(res => res.json())
		        .then(data => {

		        	console.log(data)

		        	if (data === true) {

		        		Swal.fire({
		        			title: `Registration Successful!`,
		        			icon: "success",
		        			text: "You may now log in."
		        		})

								setEmail("");
								setPassword1("");
								setPassword2("");
								setfirstName("");
								setlastName("");
								setmobileNo("");

								navigate("/login");

		        	} else {

		        		Swal.fire({
		        			title: `Seomthing went wrong`,
		        			icon: "error",
		        			text: "Please try again"
		        		})
		        	}
		        })



					}


		})
}

	useEffect(() => {

		if((email !== "" && password1 !== "" && password2 !== "" && firstName !== "" && lastName !== "" && mobileNo.length === 11) && (password1 === password2)) {

			setIsActive(true)
		} else {
			setIsActive(false)
		}
		
		// second dependency array below is needed so that changes for email password1,2 changes will load the function. not using the dependency array will keep running the function even there no changes on email, password1,2 
	}, [firstName, lastName, mobileNo, email, password1, password2])

	const { user } = useContext(UserContext)
	
	return (

		//redirects the user to courses if the user is currently login instead of rendering the register page.
		(user.id !== null) ?
    <Navigate to="/products" />
    	
    	:

    <Form className="mt-3" onSubmit={(e) => registerUser(e)}>
			<h1 className="text-center">Register</h1>
	      	
			<Form.Group className="mb-3" controlId="firstName">
		        <Form.Label>First Name</Form.Label>
		        <Form.Control 
		        type="text" 
		        placeholder="firstName"
		        value={firstName}
		        onChange={e => {
			        		setfirstName(e.target.value)
			        	}}
		        required />
	      </Form.Group>

	      <Form.Group className="mb-3" controlId="lastName">
		        <Form.Label>Last Name</Form.Label>
		        <Form.Control 
		        type="text" 
		        placeholder="lastName"
		        value={lastName}
		        onChange={e => {
			        		setlastName(e.target.value)
			        	}}
		        required />
	      </Form.Group>

	      <Form.Group className="mb-3" controlId="mobileNo">
		        <Form.Label>mobileNo</Form.Label>
		        <Form.Control 
		        type="text" 
		        placeholder="mobileNo"
		        value={mobileNo}
		        onChange={e => {
			        		setmobileNo(e.target.value)
			        	}}
		        required />
	      </Form.Group>

	      	<Form.Group className="mb-3" controlId="userEmail">
	        <Form.Label>Email address</Form.Label>
	        <Form.Control 
	        	type="email" 
	        	placeholder="Enter email"
	        	value={email}
	        	onChange={e => {
	        		setEmail(e.target.value)
	        	}}
	        	required

	        	 />
	        <Form.Text className="text-muted">
	          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
			<Form.Group className="mb-3" controlId="password1">
        <Form.Label>Password</Form.Label>
        <Form.Control 
	        type="password" 
	        placeholder="Password"
	        value={password1}
	        onChange={e => {
		        		setPassword1(e.target.value)
		        	}}
        	required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password2">
        <Form.Label>Verify Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password"
        value={password2}
        onChange={e => {
	        		setPassword2(e.target.value)
	        	}}
        required />
      </Form.Group>
			{
      	isActive ?
	      	<Button variant="primary" type="submit" id="submitBtn">
	        Submit
	      	</Button>
      	:
	      <Button variant="danger" type="submit" id="submitBtn" disabled>
	        Submit
	      </Button>

      }

    </Form>
	)
}