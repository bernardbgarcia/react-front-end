//Hook useContext to pass usestate
import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom'; //use for re-direction
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
// import { Grid, Paper, Avatar, TextField, Typography } from '@material-ui/core';
import { Grid, Paper, Avatar, TextField, Typography  } from '@mui/material';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function Login() {

	//Allows us to consume the usercontext object and its properties to use for use validation
	const { user, setUser } = useContext(UserContext)

    // state hooks to store the values of the input fields
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    // const [password2, setPassword2] = useState("");

    //const [name, setName] = useState("");
    const [name] = useState("");

    // State to determine whether the submit button is enabled or not
    const [isActive, setIsActive] = useState(false);

    /* console.log(email);
    console.log(password1);
    console.log(password2); */

    //authenticate
    function loginUser(e) {

        e.preventDefault();

        /* 
		Syntax:
			fetch('url', {options})
			.then(res => res.json())
			.then( data => {})

         */

        fetch(`${ process.env.REACT_APP_API_URL }/users/login`, {
        	method: 'POST',
        	headers: {
        		'Content-Type': 'application/json'
        	},
        	body: JSON.stringify({
        		email: email,
        		password: password1
        	})
        })
        .then(res => res.json())
        .then(data => {

        	console.log('register1 data')
            console.log(data)

        	//checking the data type of our access token, when its false it will return undefined. if not undefined it means token is has value and will be save to the local storage
        	if(typeof data.access !== "undefined") {

        		localStorage.setItem('token', data.access)
        		retrieveUserDetails(data.access)

        		Swal.fire({
        			title: "Login Succesful",
        			icon: "success",
        			text: `Welcome Back!`

                    // text: `Welcome to Zuitt! ${data.name}`
        		})

                /* Swal.fire({
                  title: 'Welcome Back',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  } }) */


        	}else {

        		Swal.fire({
        			title: "Authentication Failed",
        			icon: "error",
        			text: "Check your login details and try again!"
        		})

        	}

        })





        // Set the email of the authenticated user in the local storage

        /* 
			Syntax:
				localStorage.setItem("propertyName", value)

         */


     //   localStorage.setItem("email", email)

        //Set the global user state to have properties obtained from local storage
        /* setUser({
        	email: localStorage.getItem('email')
        }) */

        setEmail("");
        setPassword1("");
        // setPassword2("");

        //stretch task - additional feature
        // setName("");

        //alert(`You are now Login ${email}!`);
        //console.warn(`You are now Login ${email}!`);

    }
    	//accepts token parameter, 
    	const retrieveUserDetails = (token) => {

    		fetch(`${ process.env.REACT_APP_API_URL }/users/details`, {
    			headers: {
    				Authorization: `Bearer ${token}`
    			}

    		})
    		.then(res => res.json())
    		.then(data => {

    			console.log(data)

    			setUser({
    				id: data._id,
    				isAdmin: data.isAdmin
    			})

    		})

    	}


    useEffect(() => {

        // Validation to enable submit button when all fields are populated and both passwords match
        if ((email !== "" && password1 !== "")) {

            setIsActive(true)
        } else {
            setIsActive(false)
        }

        // second dependency array below is needed so that changes for email password1,2 changes will load the function. not using the dependency array will keep running the function even there's no changes on email, password1,2 
        // changes from email and password will call the function, when we remove the array ,empty array will only run the function once 
    }, [email, password1, name])




    return (

    (user.id !== null) ?
    <Navigate to="/" />
    	
    	:


        <Grid>
            <Paper elevation={4} className="paperStyle">
                <Grid align='center'>
                    
                    <h2 className="mt-3 mb-4">Sign in</h2>
                </Grid>
        <Form className="mt-3" onSubmit={(e) => loginUser(e)}>
			{/* <h1 className="text-center">Login</h1> */}
	      	
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

	      	<Form.Group className="mb-3" controlId="userEmail">
	        {/* <Form.Label>Email address</Form.Label> */}
	        <Form.Control
                /* label='Email' 
                variant="outlined" */ 
	        	type="email" 
	        	placeholder="Enter email"
	        	value={email}
	        	onChange={e => {
	        		setEmail(e.target.value)
	        		// console.log(e.target.value)
	        	}}
                /* fullWidth */
	        	required

	        	 />
	        {/* <Form.Text className="text-muted">
	          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="password1">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control 
	        type="password" 
	        placeholder="Password"
	        value={password1}
	        onChange={e => {
		        		setPassword1(e.target.value)
		        	}}
        	required />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="password2">
        <Form.Label>Verify Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password"
        value={password2}
        onChange={e => {
	        		setPassword2(e.target.value)
	        	}}
        required />
      </Form.Group> */}

      
      
      {
      	isActive ?
	      	<Button variant="primary" type="submit" id="submitBtn">
	        Submit
	      	</Button>
      	:
	      
        <Grid align='center'>
                    
            <Button className="btn-1" variant="danger" type="submit" id="submitBtn" disabled>
            Submit
          </Button>
        </Grid>
            
         

      }

        </Form>
        </Paper>
        </Grid>


    )
}