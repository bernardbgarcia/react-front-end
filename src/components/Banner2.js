import {Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Banner ({data}) {

console.log(data);
const {title, content, destination, label} = data;
	
	return(

			<Row>
			{/* props stands for properties, Props are arguments passed into React components. Props are passed to components via HTML attributes. */}
				<Col className="p-5">
					<h1>{title}</h1>
					<p>{content}</p> 				
					<Button variant="primary" as={ Link } to={destination}>{label}</Button>
					{/* 
					<h1>Zuitt Coding Bootcamp</h1>
					<p>Opportunity for everyone, everywhere.</p>
					<Button variant="primary">Enroll Now!</Button> */}
					{/* <Button variant="primary" onClick={enroll}>Enroll Now!</Button> */}
					{/* <Link to="/register">
					  <Button variant="primary" size="lg">
					    Enroll Now!
					  </Button>
					</Link> */}
				</Col>
			</Row>
		)
}