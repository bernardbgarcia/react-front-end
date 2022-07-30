import { useState, useEffect, useContext} from 'react';
import { Container, Card, Button, Row, Col} from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import { formatCurrency } from "../utilities/formatCurrency";



export default function ProductView() {

	const { user } = useContext(UserContext);


	// Allow us to gain access to method that will allow us to redirect a user to a different page after enrolling a course
	const navigate = useNavigate(); //former useHistory

	// the "useParams" 
	const {productId} = useParams()
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [subTotal, setSubTotal] = useState(0);
	const [imgUrl, setImgUrl] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	}

	const decreaseQuantity = () => {
		if(quantity > 1) {
			setQuantity(quantity - 1);
		}
	}

	const enroll = (productId, quantity, subTotal) => {

		fetch(`${ process.env.REACT_APP_API_URL }/carts/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			},
			body: JSON.stringify({
				productId: productId,
				quantity: quantity,
				subTotal: subTotal

			})

		})

			.then(res => res.json())
			.then(data => {

				console.log(data);

				if (data === true) {
					Swal.fire({
						title: "Added to Cart",
						icon: "success"
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
		console.log("productId - productview")
		console.log(productId)

		fetch(`${ process.env.REACT_APP_API_URL }/products/${productId}`)
		.then(res => res.json())
		.then(data => {

			console.log(data)
			console.warn(imgUrl)
			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)
			setImgUrl(data.imgUrl)
		})

	}, [productId])

	return (

		<div className="wrapper">
		      <section className="section-2 target" id="product-items">
		        
		        <div className="cart-head-view-wrapper center">
		          <div className="card cart-view-wrapper">
		            <h2 className="section-name"> </h2>
		            <h3 className="item-price"> </h3>
		            
					        <Card.Title className="center" >{name}</Card.Title><br/>
					        <Card.Text className="center">{description}</Card.Text>
					        <Card.Subtitle className="center">Price:</Card.Subtitle>
					        <Card.Text className="center"> { formatCurrency(price) }</Card.Text>
					        
					        {
					        	user.id !== null ?

					        		user.isAdmin !== true ?

							        	<Card.Text className="center">
							        	<span className="d-flex my-2">
											<button type="button" className="quantity-btn" onClick={increaseQuantity}>+</button>
											<p className="quantity-text">{quantity}</p>
											<button className="quantity-btn" onClick={decreaseQuantity}>-</button>
										</span>
										</Card.Text>

										:

										<span></span>

					        	:

					        	<span></span>

					        }

					      	{
					        	user.id !== null ?

					        		user.isAdmin !== true ?

					        			<Button variant="primary" onClick={() => enroll(productId, quantity)}>Add to Cart</Button>

					        			:

					        			<Link className="btn btn-danger card-btn" to="/"> Home </Link>

					        	:

					        	<Link className="btn btn-danger card-btn" to="/login"> Log in to Shop </Link>

					        }
					        
					</div>
			</div>
		     </section>
		</div>

		)
}
