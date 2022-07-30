import { useState, useContext } from 'react';
import UserContext from '../UserContext';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductCard2.css';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function ProductCard2({description, name, price, productId, _id, onClick, cartUrl}) {

	const { user } = useContext(UserContext);
	const [quantity, setQuantity] = useState(1);
	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	}

	const decreaseQuantity = () => {
		if(quantity > 1) {
			setQuantity(quantity - 1);
		}
	}

	return (
		<div className="display-container">
			<div className="photo-container">
				</div>
			<div className="info-container">
				<h2>PRODUCT CARD 2</h2>
				<h2>{name}</h2>
				<h5>${price}</h5>
				<p>{description}</p>
				<span className="d-flex my-2">
					<button type="button" className="quantity-btn" onClick={increaseQuantity}>+</button>
					<p className="quantity-text">{quantity}</p>
					<button className="quantity-btn" onClick={decreaseQuantity}>-</button>
				</span>
				{	user.id !== null 
					?
					<button className="cart-btn" onClick={() => onClick(productId, quantity, cartUrl)}>ADD TO CART</button>
					
					:
					<Link to="/login"><button className="cart-btn">ADD TO CART</button></Link>
				}
			</div>
		</div>
	)
}

