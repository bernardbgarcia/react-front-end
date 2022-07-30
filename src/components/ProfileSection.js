import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import React from 'react';

export default function ProfileSection() {

		const [firstName, setFirstName] = useState('');
		const [lastName, setLastName] = useState('');
		const [email, setEmail] = useState('');
		const [mobileNo, setMobileNo] = useState('');
		const [address, setAddress] = useState("");
		const [userImageUrl, setUserImageUrl] = useState("");
		const [isAdmin, setIsAdmin] = useState(false);
		const token = localStorage.getItem("token");

		const imageStyles = { minWidth: 100, minHeight: 100 };


		useEffect(() => {
			fetch(`${ process.env.REACT_APP_API_URL }/users/`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(res => res.json())
			.then(data => {
				setFirstName(data.firstName);
				setLastName(data.lastName);
				setEmail(data.email);
				setMobileNo(data.mobileNo);
				setAddress(data.address)
				setUserImageUrl(data.userImageUrl)
				setIsAdmin(data.isAdmin)
				
			})
		}, [token]);

		

		const updateUserDetails = () => {
			fetch(`${ process.env.REACT_APP_API_URL }/users/`, {
				method: "PUT",
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					mobileNo: mobileNo,
					address: address,
					userImageUrl: userImageUrl
					

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


		const [isActive, setIsActive] = useState(false);

	/* const handleFilterChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        if (this.state.title || this.state.subtitle) {
            this.setState({ setIsActive: true });
        } else {
            this.setState({ setIsActive: false });
        }


    }; */

	return (
		<div>
			<div className="profile-wrapper">
				<span className="header">Greetings </span>
				{/* <span className="user-auth-style">{isAdmin ? "SuperUser" : "Customer"}</span>{' '} */}
				<span className="email-display">{firstName}</span> {' '}
				<span className="header">with email address </span>
				
				<span className="email-display">{email}</span> {'  '}
				<hr/>
				<div className="row mt-3">
					<div className="col-md-6">
						<p>First name</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
							// onChange={this.handleFilterChange}
				        />
				    </div>					
				    <div className="col-md-6">
						<p>Last name</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
							value={lastName}
							onChange={e => setLastName(e.target.value)}
				          	fullWidth
				        />
				    </div>
				</div>
				<div className="row mt-2">
					<div className="col-md-6">
						<p>Mobile Number</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={mobileNo}
							onChange={e => setMobileNo(e.target.value)}
				        />
				    </div>	
				    {/* <div className="col-md-6">
						<p>Street Address</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
							value={streeAddress}
							onChange={e => setStreetAddress(e.target.value)}
				          	fullWidth
				        />
				    </div> */}				
				</div>
				<div className="row mt-2">


					<div>
				    	<img src={userImageUrl} className="prod-img" styles={imageStyles}/>
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
				<div>
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

				</div>

				<button className="btn btn-success mt-3 custom-size" onClick={() => updateUserDetails()}>Save Changes</button>

				
					
			</div>
		</div>



		
		

		 


	)


}

