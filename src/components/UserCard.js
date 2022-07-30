import { useState, useEffect, useContext } from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import { TextField } from '@mui/material';
import Swal from 'sweetalert2';

export default function UserCard({userProp}) {

	const { _id } = userProp;

	const imageStyles = { minWidth: 100, minHeight: 100 };
	

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [mobileNo, setmobileNo] = useState("");
	const [address, setAddress] = useState("");
	const [userImageUrl, setUserImageUrl] = useState("");
	const [loyalty, setLoyalty] = useState("");
	const [isAdmin, setIsAdmin] = useState("");
	const { user } = useContext(UserContext);
	const token = localStorage.getItem('token');

	useEffect(() => {
		console.log(_id)

		fetch(`${ process.env.REACT_APP_API_URL }/users/${_id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
		.then(res => res.json())
		.then(data => {

			setfirstName(data.firstName)
			setlastName(data.lastName)
			setEmail(data.email)
			setmobileNo(data.mobileNo)
			setAddress(data.address)
			setUserImageUrl(data.userImageUrl)
			setLoyalty(data.loyalty)
			setIsAdmin(data.isAdmin)
			
			})

	}, [])

	const updateUser = () => {
			fetch(`${ process.env.REACT_APP_API_URL }/users/edit/${_id}`, {
				method: "PUT",
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					email: email,
					// password: password1,
					mobileNo: mobileNo,
					address: address,
					userImageUrl: userImageUrl,
					loyalty: loyalty,
					isAdmin: isAdmin
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
		      <Card.Body>
				      				        
				<div>
			<div className="profile-wrapper">
				<span className="header">User Details</span>
				<hr/>
				<span className="email-display">{email}</span> {' '}
				
				<div className="row mt-3">
					<div className="col-md-6">
						<p>First Name</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={firstName}
							onChange={e => setfirstName(e.target.value)}
				        />
				    </div>					
				    <div className="col-md-6">
						<p>Last Name</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
							value={lastName}
							onChange={e => setlastName(e.target.value)}
				          	fullWidth
				        />
				    </div>
				</div>
				<div className="row mt-2">
					<div className="col-md-6">
						<p>Email address</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={email}
							onChange={e => setEmail(e.target.value)}
				        />
				    </div>
					<div className="col-md-6">
						<p>mobileNo</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={mobileNo}
							onChange={e => setmobileNo(e.target.value)}
				        />
				    </div>
				    
				</div>
				<div className="row mt-2">
				
						
				</div>
				<div className="row mt-2">
				
					<div className="col-md-6">
						<p>Address</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={address}
							onChange={e => setAddress(e.target.value)}
				        />
				    </div>
				    <div className="col-md-6">
						<p>userImageUrl</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={userImageUrl}
							onChange={e => setUserImageUrl(e.target.value)}
				        />
				    </div>	
				</div>
				<div className="row mt-2">
				
				</div>
				<div className="row mt-2">
				
					<div className="col-md-6">
						<p>Loyalty</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={loyalty}
							onChange={e => setLoyalty(e.target.value)}
				        />
				    </div>
				    <div className="col-md-6">
						<p>isAdmin</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={isAdmin}
							onChange={e => setIsAdmin(e.target.value)}
				        />
				    </div>		
				</div>
				<div>
					<div>
				    	<img src={userImageUrl} className="prod-img" styles={imageStyles}/>
				    	{/* <img src={userImageUrl} className="prod-img" styles={imageStyles}/> */}
				    </div>	
				</div>

				<div className="row mt-2">
									
				</div> 

				<button className="btn btn-success mt-3 custom-size" onClick={() => updateUser()}>Save Changes</button>

			</div>
		</div>

				      </Card.Body>
				</>

	)



}