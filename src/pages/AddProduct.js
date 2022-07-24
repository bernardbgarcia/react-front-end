// try in postman

// pass the token 

// call the url

// display the form

//hooks
import { useState, useEffect, useContext } from 'react';
import {Form, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
//ACTIVITY CODE s54 start
import UserContext from '../UserContext';
import Swal from 'sweetalert2';

//import { useContext } from 'react';
//ACTIVITY CODE s54 end

export default function Register() {

    // state hooks to store the values of the input fields
    
    console.log('add product');

    const { user } = useContext(UserContext)
    const token = localStorage.getItem('token');

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    
    //const [setName] = useState("");

/* 

 "name": "Volantex 757-7 Green",
    "description": "Volantex 757-7 Ranger (PNF) 1600mm FPV Glider (63)",
    "price": 5000,
    "quantity": 10,
    "imgUrl": ""

 */


    //activity start

    /* const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [mobileNo, setmobileNo] = useState(""); */

    const navigate = useNavigate();

    //activity end


    // State to determine whether the submit button is enabled or not
    const [isActive, setIsActive] = useState(false);

    /* console.log(email);
    console.log(password1);
    console.log(password2); */

    function addProduct(e) {

        e.preventDefault();

        fetch(`${ process.env.REACT_APP_API_URL }/products/`, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                        name: name,
                        description: description,
                        price: price,
                        quantity: quantity,
                        imgUrl: imgUrl
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



                        setName("");
                        setDescription("");
                        setPrice("");
                        setQuantity("");
                        setImgUrl("");
                        

                        // navigate("/login");

                    } else {

                        Swal.fire({
                            title: `Seomthing went wrong`,
                            icon: "error",
                            text: "Please try again"
                        })
                    }
                })
       

    }


    useEffect(() => {

        if(name !== "" && description !== "" && price !== "" && quantity !== "" && imgUrl !== "") {

            setIsActive(true)
        } else {
            setIsActive(false)
        }
        
        // second dependency array below is needed so that changes for email password1,2 changes will load the function. not using the dependency array will keep running the function even there no changes on email, password1,2 
    }, [name, description, price, quantity, imgUrl])


    
    console.log('user.id');
    console.log(user.id);

    return (

        //redirects the user to courses if the user is currently login instead of rendering the register page.
        //ACTIVITY CODE s54 start
        (user.id === null) ?
    <Navigate to="/products" />
        
        :

    //ACTIVITY CODE s54 end

        <Form className="mt-3" onSubmit={(e) => addProduct(e)}>
            <h1 className="text-center">Add Product</h1>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Name"
                value={name}
                onChange={e => {
                            setName(e.target.value)
                        }}
                required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
                <Form.Label>description</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="description"
                value={description}
                onChange={e => {
                            setDescription(e.target.value)
                        }}
                required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
                <Form.Label>price</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="price"
                value={price}
                onChange={e => {
                            setPrice(e.target.value)
                        }}
                required />
          </Form.Group>


            <Form.Group className="mb-3" controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="quantity"
                value={quantity}
                onChange={e => {
                            setQuantity(e.target.value)
                        }}
                required />
          </Form.Group>



            <Form.Group className="mb-3" controlId="imgUrl">
            <Form.Label>imgUrl</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="../Images/default.jpg"
                value={imgUrl}
                onChange={e => {
                    setImgUrl(e.target.value)
                    // console.log(e.target.value)
                }}
                required

                 />
            <Form.Text className="text-muted">
              ../Images/default.jpg
        </Form.Text>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="password1">
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
      </Form.Group> */}

      
      
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