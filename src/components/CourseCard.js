//import { useState, useEffect } from 'react';
// import {Row, Col, Card, Button} from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// export default function CourseCard(props) {
export default function CourseCard({courseProp}) {

	// console.log(props)
	// console.log(typeof props)
	// console.log(props.courseProp.name)
	// console.log(courseProp.name)

	/* 
	Use the state hook for this component to be able to store States are used to keep track of information related to individual components

	Syntax:
		const [getter, setter] = useState(initialGetterValue)

	 */

	/* const [count, setCount] = useState(0)
	// 
	const [seats, setSeat] = useState(30)

	function enroll1() {
		setCount(count + 1); //setCount is asyncronous, console.log display while setCount is not done counting
		//console.log('Enrollees: ' + count)
		console.log('Enrollees: ' + (count + 1))
		if (count === 29) alert("no more seats");
	}

	function enroll() {
		//setCount is asyncronous, console.log display while setCount is not done counting
		//console.log('Enrollees: ' + count)
		
		// if (count === 30) alert("no more seats");
		// else {
			console.log('Enrollees: ' + (count + 1))
			setCount(count + 1);
			setSeat(seats - 1);
		// }
	} */

	// function enroll() {
       // if (seats > 0) {
            // setCount(count + 1);
            // console.log('Enrollees: ' + count);
            // setSeats(seat - 1);
            // console.log('Seats: ' + seat);
       //   } else {
       //      alert("No more seats available");
       // }; 

    // }


    /* useEffect(() => {
    	if (seats === 0) {
    		alert('No more seats available')
    	}
    }, [seats])//side effect only called when seat value changes
    	// empty state */ 





	// Deconstruct the course properties into their own variables
	const { name, description, price, _id } = courseProp;
	console.log(courseProp);



	return (

			// 
			// <Row className="mt-3 mb-3">
			// 	<Col xs={12} md={12}>
			// 		<Card className="cardCourseCard p-3">
				<Card>
				      <Card.Body>
				      	<Card.Title>{name}</Card.Title>
				      	{/* <Card.Title>{props.courseProp.name}</Card.Title> */}
				        {/* <Card.Title>Sample Course</Card.Title> */}
				        <Card.Text>
				          Description:<br/> {description}
				         <br/><br/>

				          Price:<br/>
				          PhP {price}
				        </Card.Text>
				        <Button variant="primary" as={Link} to={`/courses/${_id}`}>Details</Button>
				        {/* 
				        <Link className="btn btn-primary" to="/courseView">Details</Link>
				         */}
				      </Card.Body>
				</Card>
			// 	</Col>
			// 	
			// </Row>



		)



}