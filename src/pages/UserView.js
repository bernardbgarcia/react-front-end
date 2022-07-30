import { useState, useEffect, useContext} from 'react';
import { Container, Card, Button, Row, Col} from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function UserView() {

	const { user } = useContext(UserContext);

	// Allow us to gain access to method that will allow us to redirect a user to a different page after enrolling a course
	const navigate = useNavigate(); //former useHistory

	// the "useParams" 
	const {userId} = useParams()
	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setemail] = useState("");
	const [mobileNo, setmobileNo] = useState(0);

	useEffect(() => {
		console.log(userId)

		fetch(`${ process.env.REACT_APP_API_URL }/users/${userId}`)
		.then(res => res.json())
		.then(data => {

			console.log(data)

			setfirstName(data.firstName)
			setlastName(data.lastName)
			setemail(data.email)
			setmobileNo(data.mobileNo)
			
		})

	}, [userId])

	return (

		<Container className="mt-3">
			<Row>
				<Col lg={{span:6, offset:3}}>
					<Card>
					    <Card.Body className="text-center">
					        <Card.Title>Profile</Card.Title>
					        <Card.Text>{firstName}</Card.Text>
					        <Card.Text>{lastName}</Card.Text>
					        <Card.Text>{email}</Card.Text>
					        <Card.Text>{mobileNo}</Card.Text>
					        <Card.Text>PRODUCT VIEW PAGE</Card.Text>
					        
							{
					        	user.id !== null ?

					        	:

					        	<Link className="btn btn-danger" to="/login"> Log in to Order </Link>

					        }
					        
					    </Card.Body>
					</Card>
				 </Col>
			</Row>
		</Container>

	)

}
