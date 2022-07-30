import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CourseCard({courseProp}) {

	// Deconstruct the course properties into their own variables
	const { name, description, price, _id } = courseProp;
	console.log(courseProp);

	return (

				<Card>
				      <Card.Body>
				      	<Card.Title>{name}</Card.Title>
				        <Card.Text>
				          Description:<br/> {description}
				         <br/><br/>

				          Price:<br/>
				          PhP {price}
				        </Card.Text>
				        <Button variant="primary" as={Link} to={`/courses/${_id}`}>Details</Button>
				      </Card.Body>
				</Card>

		)

}