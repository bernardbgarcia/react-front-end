import { useEffect, useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
//import DeleteIcon from '@material-ui/icons/DeleteOutlineSharp';
import { Button, Badge } from 'react-bootstrap';
import { formatCurrency } from "../utilities/formatCurrency";
import imgUrl2 from '../Images/default.jpg';

export default function Carts() {

	const { user } = useContext(UserContext);
	const [products, setProducts] = useState([]);
	const [subTotal, setsubTotal] = useState(0);
	const [cartId, setCartId] = useState('');
	const [cartUrl, setCartUrl] = useState('');
	const token = localStorage.getItem('token');
	const checkoutBtnStyle = {padding: '8px 20px', borderRadius: '2px', 
							border: '1px solid', backgroundColor: '#fff' 
							};
	const imgStyle = {width: 'auto', height: '100px', margin: '0 30px 0 0'}


	const [quantity, setQuantity] = useState(1);

	const navigate = useNavigate();

	// let subTotalView = 0;


	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	}

	const decreaseQuantity = () => {
		if(quantity > 1) {
			setQuantity(quantity - 1);
		}
	}

	const placeOrder = (cartId) => {
		fetch(`${ process.env.REACT_APP_API_URL }/orders/`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`
			}
			})
			.then(res => res.json())
			.then(data => {
				if(data !== false) {
					setProducts([]);
					setsubTotal(0);




					Swal.fire({
						title: 'Perfect!',
						icon: 'success',
						text: 'Thank you for the purchase.'
					})
					
					
					navigate("/Dashboard");
				}
				else {
					Swal.fire({
						title: 'Something went wrong',
						icon: 'error',
						text: 'Please try again.'
					})
				}
		})
	}

	const removeCartItem = (productId) => {

		fetch(`${ process.env.REACT_APP_API_URL }/carts/${productId}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setProducts(data.products);
		})

	}

	useEffect(() => {
		fetch(`${ process.env.REACT_APP_API_URL }/carts/`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data.length > 0) {
				setProducts(data[0].products);
				setsubTotal(data[0].subTotal);
				setCartId(data[0]._id);
				setCartUrl(data[0].cartUrl);
				console.log(data[0].cartUrl);
			}
		})
	}, [token, removeCartItem ])

	console.log("cartUrl");
	console.log(cartUrl);

	return (
		(user.id === null)
		?
		<Navigate to="/login"/>
		:
		<div className="my-5">
			{products.map((product) => 
				<div className="col-md-6 mx-auto" key={product.productId}>
					<div className="d-flex justify-content-between px-3">
						<div className="d-flex">
							{/* <img src={product.imgUrl} alt="product" style={imgStyle}/> */}
							<img src={imgUrl2} alt="product" style={imgStyle}/>
							{/* <div>
								<div>{product.name}</div>
								<p className="gray">PRICE</p>
								<Badge>QUANTITY</Badge>
							</div> */}
						</div>
						<div className="me-auto center" class="center">
					        <div>
					          {product.name}{" "}
					          {product.quantity > 1 && (
					            <span className="text-muted" style={{ fontSize: ".65rem" }}>
					              x{product.quantity}
					            </span>
					          )}
					        </div>
					        <div className="text-muted" style={{ fontSize: ".75rem" }}>
					          {formatCurrency(product.price)}
					        </div>
					      </div>
					      <div> {formatCurrency(product.price * product.quantity)}</div>
						<div>
							
							<span>{" "}</span>
							
							<Button
						        variant="danger"
						        size="sm"
						        onClick={() => removeCartItem(product.productId)}
						      >
						        &times;
						      </Button>
						</div>
					</div>
					<hr/>
				</div>
				)
			}
			<div className="col-md-6 mx-auto mt-3 px-3">
				<div className="d-flex">
					<strong className="me-auto px-3">Total: </strong>
					
					{/* <h3 className="px-3">{formatCurrency( subTotalView )}</h3> */}
					<h3 className="px-3">{formatCurrency(subTotal)} </h3>
					
				</div>
			</div>
			<div className="col-md-6 mx-auto px-3">
				
				<button type="button" style={checkoutBtnStyle} onClick={() => placeOrder(cartId)}>Checkout</button>
			</div>
		</div>
	)
}
