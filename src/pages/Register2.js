//hooks
import { useState, useEffect, useContext } from 'react';
import {Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
//ACTIVITY CODE s54 start
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
//import { useContext } from 'react';
//ACTIVITY CODE s54 end

export default function Register2() {

	// state hooks to store the values of the input fields
	const [email, setEmail] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	
	const [name, setName] = useState("");

	//activity start

	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [mobileNo, setmobileNo] = useState("");

	//activity end


	// State to determine whether the submit button is enabled or not
	const [isActive, setIsActive] = useState(false);

	/* console.log(email);
	console.log(password1);
	console.log(password2); */

	function registerUser(e) {

		e.preventDefault();

		setEmail("");
		setPassword1("");
		setPassword2("");
		
		setName("");

		//activity start

		setfirstName("");
		setlastName("");
		setmobileNo("");

		
			
			fetch('http://localhost:4000/users/checkEmail', {
        	method: 'POST',
        	headers: {
        		'Content-Type': 'application/json'
        	},
        	body: JSON.stringify({
        		email: email
        	})
        })
        .then(res => res.json())
        .then(data => {
				
					console.warn('data');
					console.warn(data);

					if(data === true ) {

						//console.warn('Email already used');
						Swal.fire({
        			title: "Registration Failed!",
        			icon: "error",
        			text: "Email already in used!"
        		})

					} else {

						fetch('http://localhost:4000/users/register', {
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

								//console.warn('Register');
								//alert(`You are now registered ${name}!`);

								Swal.fire({
		        			title: `You are now registered ${name}!`,
		        			icon: "success",
		        			text: "Welcome to Zuitt!"
		        		})


							})

		      	}

		      })


		//activity end


		//alert(`You are now registered ${name}!`);

	}


	/* 

	if (password1.length < 8 || password1.length >25){
    alert(`Your password must be between 8 to 25 chacters. The one you entered had ${password1.length} characters`);
    return false;
	}

	Logic flow

	validate email, > (password1 = password2), password1.length if ok > button active
	validate email, > (password1 = password2) if ok > button active > validate password1.length if false focus on password1 text.
	validate email, > (password1 = password2) > validate password1.length if false focus on password1 text.

	

 	*/



	useEffect(() => {

		if((email !== "" && password1 !== "" && password2 !== "" && firstName !== "" && lastName !== "" && mobileNo !== "" ) && (password1 === password2)) {

			setIsActive(true)
		} else {
			setIsActive(false)
		}
		
		// second dependency array below is needed so that changes for email password1,2 changes will load the function. not using the dependency array will keep running the function even there no changes on email, password1,2 
	}, [email, password1, password2, firstName, lastName, mobileNo])


	/* 
	//Orig useEffect code above
	useEffect(() => {

		if((email !== "" && password1 !== "" && password2 !== "" && name !== "") && (password1 === password2)) {

			setIsActive(true)
		} else {
			setIsActive(false)
		}
		
		// second dependency array below is needed so that changes for email password1,2 changes will load the function. not using the dependency array will keep running the function even there no changes on email, password1,2 
	}, [email, password1, password2, name])

	 */

	//ACTIVITY CODE s54 start
	const { user } = useContext(UserContext)
	//ACTIVITY CODE s54 end

	return (

		//redirects the user to courses if the user is currently login instead of rendering the register page.
		//ACTIVITY CODE s54 start
		(user.id !== null) ?
    <Navigate to="/courses" />
    	
    	:

    //ACTIVITY CODE s54 end

		<Form className="mt-3" onSubmit={(e) => registerUser(e)}>
			<h1 className="text-center">Register</h1>
	      	
			{/* <Form.Group className="mb-3" controlId="name">
		        <Form.Label>Name</Form.Label>
		        <Form.Control 
		        type="text" 
		        placeholder="Name"
		        value={name}
		        onChange={e => {
			        		setName(e.target.value)
			        	}}
		        required />
	      </Form.Group> */}







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
		        placeholder="firstName"
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
	        		// console.log(e.target.value)

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