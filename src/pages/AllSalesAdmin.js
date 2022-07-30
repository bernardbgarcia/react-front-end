import { useState, useEffect, useContext } from 'react';
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
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div>
			{products.map((product) =>
		<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 50 }}>

    		<div>
    		<h3 className="item-price"> Order ID:</h3>
    		<h3 className="item-price"> {product._id}</h3>
    		<h3 className="item-price"> User ID:</h3>
    		<h3 className="item-price"> {product.userId}</h3>
    		<h3 className="item-price"> Products:</h3>
    		<h3 className="item-price"> {product.name}</h3>
    		
    		<hr/>
            	</div>
            	<div>
    			
    			</div>
	    		<div>
		    		<h3 className="item-price"> Amount:</h3>
		    		<h3 className="item-price"> {formatCurrency(product.total)}</h3>
		    		<h3 className="item-price"> purchasedOn:</h3>
		    		<h3 className="item-price"> {product.purchasedOn.substring(0, 10)}</h3>
            	</div>

  		</div>

				)
			}
		</div>
		
	)
}