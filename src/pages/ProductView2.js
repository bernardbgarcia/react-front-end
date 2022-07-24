import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard2 from '../components/ProductCard2';
import Swal from 'sweetalert2';


export default function ProductView2() {

	const history = useNavigate();
	const { productId } = useParams();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [url, setUrl] = useState('');

	const addToCart = (productId, quantity) => {
		fetch('http://localhost:4008/api/carts/', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				productId: productId,
				quantity: quantity,
				url: url
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data === true) {
				Swal.fire({
					  title: 'Sweet!',
					  text: `(${quantity}) ${name} added to cart`,
					  imageUrl: `${url}`,
					  imageWidth: 200,
					  imageHeight: 200,
					  imageAlt: 'Custom image',
					})

				history(`/products/category/${category}`);
			}
			else {
				Swal.fire({
					title: "Something went wrong",
					icon: "error",
					text: ""
				})
			}
		})
	}

	useEffect(() => {

		fetch(`http://localhost:4008/api/products/${productId}`)
		.then(res => res.json())
		.then(data => {

			setName(data.name);
			setDescription(data.description);
			setPrice(data.price);
			setUrl(data.url);
			setCategory(data.category);
		})
	}, [productId]);

	return (
		<div>
			<ProductCard2 
			description={description}
			price={price}
			productId={productId}
			name={name}
			category={category}
			url={url}
			onClick={addToCart}
			/>
		</div>
		)
}