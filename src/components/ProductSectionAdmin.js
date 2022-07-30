import { useState, useEffect, useContext } from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductEdit from '../pages/ProductEdit';
import UserContext from '../UserContext';
import { TextField } from '@mui/material';
import Swal from 'sweetalert2';

export default function ProductSectionAdmin({productProp}) {

	const { _id } = productProp;
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [isActive, setIsActive] = useState(true);
	const [quantity, setQuantity] = useState('');
	const [imgUrl, setImgUrl] = useState('');
	const imageStyles = { minWidth: 100, minHeight: 100 };
	const { user } = useContext(UserContext);
	const token = localStorage.getItem('token');

	useEffect(() => {
		console.log(_id)

		fetch(`${ process.env.REACT_APP_API_URL }/products/${_id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
		.then(res => res.json())
		.then(data => {

			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)
			setIsActive(data.isActive)
			setQuantity(data.quantity)
			setImgUrl(data.imgUrl)

		})

	}, [])

	const updateProduct = () => {
			fetch(`${ process.env.REACT_APP_API_URL }/products/edit/${_id}`, {
				method: "PUT",
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify({
					name: name,
					description: description,
					price: price,
					isActive: isActive,
					quantity: quantity,
					imgUrl: imgUrl
					// address: [{"streetAddress": streeAddress, "city": city}]
				})
			})
			.then(res => res.json())
			.then(data => {
				if(data === false) {

					Swal.fire({
						title: 'Something went wrong',
						icon: 'error',
						text: 'Please try again.'
					})
				}
				else {
					Swal.fire({
						title: 'Product updated',
						icon: 'success',
						text: 'Changes saved successfully'
				})

				}
			})
		}

	return (

				<>
			
        <div>
			<div className="profile-wrapper2">
				<span className="header1">Product Details </span>
				
				<span className="email-display">{name}</span> {' '}
				<div className="row mt-3">
					<div className="col-md-12">
						<p>Name</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={name}
							onChange={e => setName(e.target.value)}
				        />
				    </div>					
				    <div className="col-md-12">
						<p>Description</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
							value={description}
							onChange={e => setDescription(e.target.value)}
				          	fullWidth
				        />
				    </div>
				</div>
				<div className="row mt-2">
					<div className="col-md-12">
						<p>Price</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={price}
							onChange={e => setPrice(e.target.value)}
				        />
				    </div>	
				    <div className="col-md-12">
						<p>Quantity</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={quantity}
							onChange={e => setQuantity(e.target.value)}
				        />
				    </div></div>
				<div className="row mt-2">
					<div className="col-md-12">
						<p>Status</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={isActive}
							onChange={e => setIsActive(e.target.value)}
				        />
				    </div>
				    <div className="col-md-12">
						<p>Image Url</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={imgUrl}
							onChange={e => setImgUrl(e.target.value)}
				        />
				        <img src={imgUrl} className="prod-img" styles={imageStyles}/>
				    </div>
			    </div>
				<div className="row mt-2">
					
				</div> 

				<button className="btn btn-success mt-3 custom-size" onClick={() => updateProduct()}>Save Changes</button>
				<hr/>
			</div>
		</div>

				      </>
		)

}