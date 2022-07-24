import { useState, useEffect, useContext } from 'react';
// import './OrderBar.css';
import React from 'react';
import { formatCurrency } from "../utilities/formatCurrency";
import UserContext from '../UserContext';
import { TextField } from '@mui/material';

export default function AllSalesAdmin({user}) {

	const [products, setProducts] = useState([]);
	const [orders, setOrders] = useState([]);

	
	// const token = localStorage.getItem('token');

	useEffect(() => {
		// if(user.isAdmin) 
			{
			fetch(`${ process.env.REACT_APP_API_URL }/orders/admin-all`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			})
			.then(res => res.json())
			.then(data => {
				setProducts(data);
			})
		}
		/* else {
			fetch('http://localhost:4008/api/orders/orderHistory', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			})
			.then(res => res.json())
			.then(data => {
				setProducts(data);
			})

		} */
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div>
			{products.map((product) =>
				/* <div className="order-wrapper" key={product._id}>
					
					<span>Order ID: {product._id}</span><br/>
					<span>Total Amount: {formatCurrency(product.total)}</span><br/>
					<span>Purchased on: {product.purchasedOn.substring(0, 10)}</span><br/>
				</div> */
				
		<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 50 }}>

    		<div>
    		<h3 class="item-price"> Order ID:</h3>
    		<h3 class="item-price"> {product._id}</h3>
    		<h3 class="item-price"> User ID:</h3>
    		<h3 class="item-price"> {product.userId}</h3>
    		<h3 class="item-price"> Products:</h3>
    		<h3 class="item-price"> {product.name}</h3>
    		
    		
            	{/* <h3 class="item-price"> Description:<br/> {product.description}</h3> */}
            	<hr/>
            	</div>
            	<div>
    			

	            
	            {/* <img src={imgUrl} class="card-img" />
	            <img src = {`../Images/${imgUrl}`} class="card-img" /> */}
	            </div>
	    		<div>
		    		<h3 class="item-price"> Amount:</h3>
		    		<h3 class="item-price"> {formatCurrency(product.total)}</h3>
		    		<h3 class="item-price"> purchasedOn:</h3>
		    		<h3 class="item-price"> {product.purchasedOn.substring(0, 10)}</h3>
            	</div>

  		</div>

		/* <div className="row mt-2">
					<div className="col-md-12">
						<p>Order ID:</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={product._id}
				        />
				    </div>
				    <div className="col-md-12">
						<p>Total Amount:</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={formatCurrency(product.total)}
				        />
				    </div>
				    <div className="col-md-12">
						<p>Purchased on:</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={product.purchasedOn.substring(0, 10)}
				        />
				    </div>
				    <div className="col-md-12">
						<p>Name:</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={product.name}
				        />
				    </div>	
				    
			    </div> */
			    
				)
			}
		</div>
		
	)
}