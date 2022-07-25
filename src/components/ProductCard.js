//import { useState, useEffect } from 'react';
// import {Row, Col, Card, Button} from 'react-bootstrap';
import {Card, Button, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgUrl2 from '../Images/default.jpg';
import './ProductCard.css';
import { formatCurrency } from "../utilities/formatCurrency";


export default function ProductCard({productProp}) {

	const imageStyles = { minWidth: 100, minHeight: 100 };	



	// Deconstruct the course properties into their own variables
	const { name, description, price, _id, imgUrl, isActive } = productProp;
	console.warn(productProp);
	console.warn('isActive');
	console.warn(isActive);





	return (

			// 
			// <Row className="mt-3 mb-3">
			// 	<Col xs={12} md={12}>
			// 		<Card className="cardCourseCard p-3">

		
		<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 50 }}>

    		<div>
    		<h3 className="item-price"> {name}</h3>
    		<h3 className="item-price"> {imgUrl}</h3>
            	<h3 className="item-price"> Description:<br/> {description}</h3>
            	<hr/>
            	</div>
            	<div className="center">
    			

	            
	            <img src={imgUrl} className="prod-img" styles={imageStyles}/>
	            {/* <img src = {`../Images/${imgUrl}`} className="card-img" /> */}
	            </div>
    		<div>
    		<Badge className="badge-stock" bg = "light" text = "dark" > {isActive ? 'In Stock' : 'Out of Stock'} </Badge>
            <h3 className="item-price"> Price:<br/> {formatCurrency(price)}</h3>
            	<Button variant="primary" as={Link} to={`/api/products/${_id}`}>Details</Button></div>

  		</div>



		/* <div className="wrapper">
      <section className="section-2 target" id="popular-cars">
        <h1 className="section-heading"> </h1>
        <div className="cards-wrapper center">
          <div className="cardc">
            <h2 className="section-name">{name} </h2>
            
            <img src={require('../Images/category-1.jpg')} className="card-img" />
            
          </div>
          <div className="cardc">
            <h2 className="section-name">  </h2>
            <h3 className="item-price"> Description:<br/> {description}</h3>
          </div>
          <div className="cardc">
            <h2 className="section-name"> </h2>
            
            <h3 className="item-price"> Price:<br/>
				          {formatCurrency(price)}</h3>
            <Button variant="primary" as={Link} to={`/api/products/${_id}`}>Details</Button>
          </div>
        </div>
      </section>
    </div> */
				/* <Card>
				      <Card.Body>

				      	<img className='item-image' src={`${ imgUrl2
                        ? imgUrl2
                        : '../Images/default.jpg' }`} />

				      	<Card.Title>{name}</Card.Title>
				      
				        <Card.Text>
				          PRODUCT CARD<br/> 
				         <br/><br/>
				         Description:<br/> {description}
				         <br/><br/>

				          Price:<br/>
				          {formatCurrency(price)}
				        </Card.Text>
				        <Button variant="primary" as={Link} to={`/api/products/${_id}`}>Details</Button>
				      
				      </Card.Body>
				</Card> */

			// 	</Col>
			// 	
			// </Row>



		)



}