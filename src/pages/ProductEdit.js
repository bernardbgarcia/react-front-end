import { useState, useEffect, useContext} from 'react';
import { Container, Card, Button, Row, Col} from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function ProductView() {

	const { user } = useContext(UserContext);
	const token = localStorage.getItem('token');

	// Allow us to gain access to method that will allow us to redirect a user to a different page after enrolling a course
	const navigate = useNavigate(); //former useHistory

	// the "useParams" 
	const {productId} = useParams()


	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [isStatus, setIsStatus] = useState("");
	const [imgUrl, setImgUrl] = useState("");

	const [quantity, setQuantity] = useState(1);

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	}

	const decreaseQuantity = () => {
		if(quantity > 1) {
			setQuantity(quantity - 1);
		}
	}


	const enroll = (productId, quantity) => {

		fetch(`${ process.env.REACT_APP_API_URL }/carts/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			},
			body: JSON.stringify({
				productId: productId,
				quantity: quantity

			})

		})

			.then(res => res.json())
			.then(data => {

				console.log(data);

				if (data === true) {
					Swal.fire({
						title: "Successfuly Enrolled",
						icon: "success",
						text: "You have successfully ordered for this product."
					})

					navigate("/products")

				} else {

					Swal.fire({
						title: "Something went wrong",
						icon: "error",
						text: "Please try again!"
					})
				}



			}



		)
	}

	useEffect(() => {
		console.log(productId)

		fetch(`${ process.env.REACT_APP_API_URL }/products/edit/${productId}`, {
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
		.then(res => res.json())
		.then(data => {

			console.log(data)

			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)
			setIsStatus(data.isStatus)
			setQuantity(data.quantity)
			setImgUrl(data.imgUrl)
			


		})

	}, [productId])

	return (

		<Container className="mt-3">
			<Row>
				<Col lg={{span:6, offset:3}}>
					<Card>
					    <Card.Body className="text-center">
					        <Card.Title>{name}</Card.Title>
					        <Card.Subtitle>Description:</Card.Subtitle>
					        <Card.Text>{description}</Card.Text>
					        <Card.Subtitle>Price:</Card.Subtitle>
					        <Card.Text>PhP {price}</Card.Text>
					        <Card.Subtitle>Quantity:</Card.Subtitle>
					        <Card.Text>{quantity}</Card.Text>
					        <Card.Subtitle>Image:</Card.Subtitle>
					        <Card.Text>{imgUrl}</Card.Text>
					        <Card.Subtitle>Status:</Card.Subtitle>
					        <Card.Text>{isStatus}</Card.Text>
					        <Card.Subtitle>Class Schedule:</Card.Subtitle>
					        <Card.Text>PRODUCT EDIT PAGE</Card.Text>
					        

					        {
					        	user.id !== null ?

					        		user.isAdmin !== true ?

							        	<span className="d-flex my-2">
											<button type="button" className="quantity-btn" onClick={increaseQuantity}>+</button>
											<p className="quantity-text">{quantity}</p>
											<button className="quantity-btn" onClick={decreaseQuantity}>-</button>
										</span>

										:

										<span></span>

					        	:

					        	<span></span>

					        }

					        {
					        	user.id !== null ?

					        		user.isAdmin !== true ?

					        			<Button variant="primary" onClick={() => enroll(productId, quantity)}>Order</Button>

					        			:

					        			<Link className="btn btn-warning" to="/allproductsadmin"> Go to All Products Admin Page </Link>

					        	:

					        	<Link className="btn btn-danger" to="/login"> Log in to Order </Link>

					        }
					        
					    </Card.Body>
					</Card>
				 </Col>
			</Row>
		</Container>


		)



}
