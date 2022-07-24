import {Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function Banner () {

	
	return(

			<Row>
			{/* props stands for properties, Props are arguments passed into React components. Props are passed to components via HTML attributes. */}
				<Col className="p-5"> 
					<h1>Page Not Found</h1>
					<p>Go back to the </p>
					<>
					<Nav.Link as={ Link } to="/">Home Page</Nav.Link>
					</>
				</Col>
			</Row>
		)
}