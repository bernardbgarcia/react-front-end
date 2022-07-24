import { useState, useEffect, useContext} from 'react';
import { Container, Card, Button, Row, Col} from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function CourseView() {

	const { user } = useContext(UserContext);

	// Allow us to gain access to method that will allow us to redirect a user to a different page after enrolling a course
	const navigate = useNavigate(); //former useHistory

	// the "useParams" 
	const {courseId} = useParams()


	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);

	const enroll = (courseId) => {

		fetch(`${ process.env.REACT_APP_API_URL }/users/enroll`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			},
			body: JSON.stringify({
				courseId: courseId
			})

		})

			.then(res => res.json())
			.then(data => {

				console.log(data);

				if (data === true) {
					Swal.fire({
						title: "Added to Cart",
						icon: "success",
						text: "Added to Cart."
					})

					navigate("/courses")

				} else {

					Swal.fire({
						title: "Something went wrong",
						icon: "error",
						text: "Please try again!"
					})
				}



			}



		)
	}

	useEffect(() => {
		console.log(courseId)

		fetch(`${ process.env.REACT_APP_API_URL }/courses/${courseId}`)
		.then(res => res.json())
		.then(data => {

			console.log(data)

			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)


		})

	}, [courseId])

	return (

		<Container className="mt-3">
			<Row>
				<Col lg={{span:6, offset:3}}>
					<Card>
					    <Card.Body className="text-center">
					        <Card.Title>{name}</Card.Title>
					        <Card.Subtitle>Description:</Card.Subtitle>
					        <Card.Text>{description}</Card.Text>
					        <Card.Subtitle>Price:</Card.Subtitle>
					        <Card.Text>PhP {price}</Card.Text>
					        <Card.Subtitle>Class Schedule:</Card.Subtitle>
					        <Card.Text>8AM - 5PM</Card.Text>

					        {
					        	user.id !== null ?

					        	<Button variant="primary" onClick={() => enroll(courseId)}>Enroll</Button>

					        	:

					        	<Link className="btn btn-danger" to="/login"> Log in to Enroll </Link>

					        }
					        
					    </Card.Body>
					</Card>
				 </Col>
			</Row>
		</Container>


		)



}
