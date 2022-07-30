//Hook useContext to pass usestate
import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate, Link } from 'react-router-dom'; //use for re-direction
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

import { Grid, Paper, Avatar, TextField, Typography } from '@mui/material';


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

    //authenticate
    function loginUser(e) {

        // prevent the page from reloading-reset
        e.preventDefault();

        //netlify deployed version is getting // error on heroku is using the env link.
        fetch(`https://shielded-ravine-89204.herokuapp.com/api/users/login`, {
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
                if (typeof data.access !== "undefined") {

                    localStorage.setItem('token', data.access)
                    retrieveUserDetails(data.access)

                    Swal.fire({
                        title: "Login Succesful",
                        icon: "success",
                        text: `Welcome Back!`

                    })

                } else {

                    Swal.fire({
                        title: "Authentication Failed",
                        icon: "error",
                        text: "Check your login details and try again!"
                    })

                }

            })

        // Set the email of the authenticated user in the local storage

        setEmail("");
        setPassword1("");

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

            <Form.Group className="mb-3" controlId="userEmail">
            <Form.Control
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
  
      {
        isActive ?
        <Grid align='center'>
            <Button className="btn-1 center" variant="primary" type="submit" id="submitBtn">
            Submit
            </Button>
         </Grid>
        :
          
        <Grid align='center'>                    
            <Button className="btn-1 center" variant="danger" type="submit" id="submitBtn" disabled>
                Submit
            </Button>
        </Grid>

      }

      <br/>
        <Typography> Not registered? {' '}
                    <Link className="text-link" to={'/register'}>Create an account</Link>
                </Typography>
        </Form>
        </Paper>
        </Grid>


    )
}