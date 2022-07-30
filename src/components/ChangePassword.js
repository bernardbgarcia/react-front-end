import { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import Swal from 'sweetalert2';
import React from 'react';

export default function ProfileSection() {

		const [firstName, setFirstName] = useState('');
		const [lastName, setLastName] = useState('');
		const [email, setEmail] = useState('');
		const [mobileNo, setMobileNo] = useState('');
		const [isAdmin, setIsAdmin] = useState(false);
		const token = localStorage.getItem("token");

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
				setIsAdmin(data.isAdmin);
			})
		}, [token]);

		const updateUserDetails = () => {
			fetch('http://localhost:4008/api/users/', {
				method: "PUT",
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					mobileNo: mobileNo
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
		<div>
			<div className="profile-wrapper">
				<span className="header">Account Details</span>
				<hr/>
				<span className="email-display">{email}</span> {' '}
				<span className="user-auth-style">{isAdmin ? "SuperUser" : "Customer"}</span>
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
				    <div className="col-md-6">
						<p>Password</p>
						<TextField
	          				id="filled-multiline-flexible"
	          				variant="outlined"
	          				size="small"
	          				fullWidth
							value={password}
							onChange={e => password(e.target.value)}
				        />
				    </div>	
				</div>
				<div className="row mt-2">
				</div>
				<button className="btn btn-success mt-3 custom-size" onClick={() => updateUserDetails()}>Save Changes</button>
			</div>
		</div>
	)
}

