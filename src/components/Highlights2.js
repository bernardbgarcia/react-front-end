import { useState, useEffect } from 'react'
import {Row, Col, Card, Button} from 'react-bootstrap';
import "./Highlights.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fastar, faregular } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

export default function Highlights({courseProp}) {

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/products/allactiveproducts`)
			 .then(res => {
			 	console.log(res.data);
			 	setData(res.data);
			 })
			 .catch(error => {
			 	console.error(error);
			 })
	},[])

	return (

		<Row className="mt-3 mb-3 pt-3 pd-3">

			{data.map((product, i) => {
				return (
					<Col xs={12} md={4} >
						<Card>
							<Card.Img variant="top" className="image" src={product.imgUrl} alt={product._id}/>
							<Card.Body>
								<Card.Title data-id={product._id} >{product.name}</Card.Title>
								<Card.Text>{product.description}</Card.Text>
								<Card.Text>P {product.price}.00</Card.Text>
								<Button variant="dark" as={Link} to={"/products"}>Buy Now!</Button>
							</Card.Body>
						</Card>
					</Col>
				)
			}
			)
		}

		)

}