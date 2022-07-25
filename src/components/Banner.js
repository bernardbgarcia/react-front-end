import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Container, Carousel } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
// import Button from './Button';
import Button from './Button';

export default function Banner(){

	const [style, setStyle] = useState({
		width: "100%",
		height: "12rem"
		
	})

	return (
		<Row className="banner row align-items-center justify-content-center">
		<Col  lg={12}  xs={12}>
			<Container className="p-3 my-3">
				<Carousel fade>
				  <Carousel.Item interval={3000}>
				    <img
				      className="d-block mx-auto text-center"
				      src={require('../Images/carouselImage1.jpg')}
				      alt="First slide"
				      style={style}
				      targetURL= "/products"
				    />
				    
                
				    <Carousel.Caption>
				      
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item  interval={3000}>
				    <img
				      className="d-block mx-auto text-center "
				      src={require('../Images/carouselImage2.jpg')}
				      alt="Second slide"
				      style={style}
				    />

				    <Carousel.Caption>
				      
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item  interval={3000}>
				    <img
				      className="d-block mx-auto text-center"
				      src={require('../Images/carouselImage3.jpg')}
				      alt="Third slide"
				      style={style}
				    />

				    <Carousel.Caption>
				      
				    </Carousel.Caption>
				  </Carousel.Item>
				   <Carousel.Item  interval={3000}>
				    <img
				      className="d-block mx-auto text-center"
				      src={require('../Images/carouselImage4.jpg')}
				      alt="First slide"
				      style={style}
				    />
				    <Carousel.Caption>
				      
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>
			</Container>
		</Col>
		</Row>

		)
}
