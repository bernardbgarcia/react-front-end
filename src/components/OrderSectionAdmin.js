import { useState, useEffect, useContext } from 'react';
// import {Row, Col, Card, Button} from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductEdit from '../pages/ProductEdit';
import UserContext from '../UserContext';
// import { TextField } from '@material-ui/core';
import { TextField } from '@mui/material';
import Swal from 'sweetalert2';

// export default function CourseCard(props) {
//export default function CourseCard({courseProp}) {
export default function OrderSectionAdmin({orderProp}) {

	// const { name, description, price, _id } = productProp;
	const { _id } = orderProp;

	 const [userid, setUserid] = useState('');
	const [description, setDescription] = useState('');
	const [total, setTotal] = useState('');
	const [purchasedOn, setPurchasedOn] = useState('');
	
	// const [isActive, setIsActive] = useState(true);
	// const [quantity, setQuantity] = useState('');
	// const [imgUrl, setImgUrl] = useState('');
	


	const { user } = useContext(UserContext);
	const token = localStorage.getItem('token');

	useEffect(() => {
		console.log(_id)

		fetch(`${ process.env.REACT_APP_API_URL }/orders/admin-all`, {
    			headers: {
					Authorization: `Bearer ${token}`
				}
			})
		.then(res => res.json())
		.then(data => {

			 setUserid(data.userid)
			// setDescription(data.description)
			setTotal(data.total)
			setPurchasedOn(data.purchasedOn)
			// setQuantity(data.quantity)
			// setImgUrl(data.imgUrl)


		})

	}, [])

	const updateOrder = () => {
			fetch(`${ process.env.REACT_APP_API_URL }/orders/admin-all`, {
    			headers: {
    				Authorization: `Bearer ${token}`
    			},
				body: JSON.stringify({
					 userid: userid,
					// description: description,
					total: total,
					purchasedOn: purchasedOn
					// quantity: quantity,
					// imgUrl: imgUrl
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
						title: 'Profile update',
						icon: 'success',
						text: 'Changes saved successfully'
				})

				}
			})
		}


		

	return (

			// 
			// <Row className="mt-3 mb-3">
			// 	<Col xs={12} md={12}>
			// 		<Card className="cardCourseCard p-3">
				<>
				      {/* <Card.Body> */}

        <div>
			<div className="profile-wrapper2">
				<span className="header1">Order Details</span>
				{/* <span className="email-display">{name}</span> */} {' '}
				<div className="row mt-3">
					{<div className="col-md-12">
						<p>userid</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={userid}
							onChange={e => setUserid(e.target.value)}
				        />
				    </div>}					
				    {/* <div className="col-md-12">
						<p>Description</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
							value={description}
							onChange={e => setDescription(e.target.value)}
				          	fullWidth
				        />
				    </div> */}
				</div>
				<div className="row mt-2">
					<div className="col-md-12">
						<p>Total</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={total}
							onChange={e => setTotal(e.target.value)}
				        />
				    </div>	
				    <div className="col-md-12">
						<p>purchasedOn</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={purchasedOn}
							onChange={e => setPurchasedOn(e.target.value)}
				        />
				    </div></div>
				{/* <div className="row mt-2">
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
				    </div>
			    </div> */}
				<div className="row mt-2">
					
				</div> 

				{/* <button className="btn btn-success mt-3 custom-size" onClick={() => updateProduct()}>Save Changes</button> */}
			</div>
		</div>

				      {/* </Card.Body> */}
				</>

			// 	</Col>
			// 	
			// </Row>



		)



}