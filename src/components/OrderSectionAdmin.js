import { useState, useEffect, useContext } from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductEdit from '../pages/ProductEdit';
import UserContext from '../UserContext';
import { TextField } from '@mui/material';
import Swal from 'sweetalert2';

export default function OrderSectionAdmin({orderProp}) {

	const { _id } = orderProp;
	const [userid, setUserid] = useState('');
	const [description, setDescription] = useState('');
	const [total, setTotal] = useState('');
	const [purchasedOn, setPurchasedOn] = useState('');
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
			setTotal(data.total)
			setPurchasedOn(data.purchasedOn)
			})

	}, [])

	const updateOrder = () => {
			fetch(`${ process.env.REACT_APP_API_URL }/orders/admin-all`, {
    			headers: {
    				Authorization: `Bearer ${token}`
    			},
				body: JSON.stringify({
					userid: userid,
					total: total,
					purchasedOn: purchasedOn
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

				<>
			
        <div>
			<div className="profile-wrapper2">
				<span className="header1">Order Details</span>
				 {' '}
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
				<div className="row mt-2">
					
				</div> 

			</div>
		</div>

		</>

		)
		
}