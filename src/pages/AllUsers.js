/* 
	token

	postfix query

	display
	
	update

	configure AllUsers.js first so you can pass the data

	prep Usercard using productsectionadmin as template

 */

import {Fragment, useEffect, useState, useContext} from 'react';
import UserCard from '../components/UserCard';
import UserContext from '../UserContext';

export default function AllUsers() {

	const [users, setUsers] = useState([])

	const { user } = useContext(UserContext);
	const token = localStorage.getItem('token');

	useEffect(() => {

		fetch(`${ process.env.REACT_APP_API_URL }/users/admin-all`, {
    			headers: {
    				Authorization: `Bearer ${token}`
    			}

    		})
		.then(res => res.json())
		.then( data => {

			console.log(data)

			setUsers(data.map(user => {

				return (

					<UserCard key={user._id} userProp={user} />

					)

			}))

		})

	}, [])

	return(

		//you can use <> instead of <Fragments>
		//<>
		<Fragment> 
			<h1>Users</h1>
			{users}
		</Fragment>
		//</>

		)
}