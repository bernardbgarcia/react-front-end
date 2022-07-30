import { useState, useEffect } from 'react';
import './OrderBar.css';
import React from 'react';
import { formatCurrency } from "../utilities/formatCurrency";

export default function OrderBar({user}) {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		if(user.isAdmin) {
			fetch(`${ process.env.REACT_APP_API_URL }/orders/all`, {
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
		else {
			fetch(`${ process.env.REACT_APP_API_URL }/orders/orderHistory`, {
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
				<div className="order-wrapper" key={product._id}>
					<span>Order ID: {product._id}</span><br/>
					<span>Total Amount: {formatCurrency(product.total)}</span><br/>
					<span>Purchased on: {product.purchasedOn.substring(0, 10)}</span><br/>
				</div>
				)
			}
		</div>
	)
}