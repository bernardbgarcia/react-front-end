import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import UserContext from '../UserContext';

export default function Logout() {

	//Consume the UserContext object and destructure it to access the user state and unsetUser function from the context provider
	const { unsetUser, setUser } = useContext(UserContext);

	//clear the localStorage of the user's information
	unsetUser();

	//without useEffect - setuser will be set to null while rendering that will cause issues
	// change user state back to its original null value
	useEffect(() => {

		setUser({id:null})

	//optional array, empty will only run once. if it has dependencies & changes value - the function will be called	
	}, [])


	//localStorage.clear()

	return(

		


			<>
			<Navigate to="/" />
			</>
			
		)

}