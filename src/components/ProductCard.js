//import { useState, useEffect } from 'react';
// import {Row, Col, Card, Button} from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgUrl2 from '../Images/default.jpg';
import './ProductCard.css';
import { formatCurrency } from "../utilities/formatCurrency";
const imageStyles = { minWidth: 100, minHeight: 100 };
// import Images from '../Images';
//app.use('/uploads',express.static('uploads'))

// export default function CourseCard(props) {
//export default function CourseCard({courseProp}) {
export default function ProductCard({productProp}) {

	



	// Deconstruct the course properties into their own variables
	const { name, description, price, _id, imgUrl } = productProp;
	console.log(productProp);
	console.log('imgUrl');
	console.log(imgUrl);





	return (

			// 
			// <Row className="mt-3 mb-3">
			// 	<Col xs={12} md={12}>
			// 		<Card className="cardCourseCard p-3">

		
		<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 50 }}>

    		<div>
    		<h3 class="item-price"> {name}</h3>
    		<h3 class="item-price"> {imgUrl}</h3>
            	<h3 class="item-price"> Description:<br/> {description}</h3>
            	<hr/>
            	</div>
            	<div className="center">
    			

	            
	            <img src={imgUrl} className="prod-img" styles={imageStyles}/>
	            {/* <img src = {`../Images/${imgUrl}`} class="card-img" /> */}
	            </div>
    		<div><h3 class="item-price"> Price:<br/> {formatCurrency(price)}</h3>
            	<Button variant="primary" as={Link} to={`/api/products/${_id}`}>Details</Button></div>

  		</div>

		/* <div class="wrapper">
      <section class="section-2 target" id="popular-cars">
        <h1 class="section-heading"> </h1>
        <div class="cards-wrapper center">
          <div class="cardc">
            <h2 class="section-name">{name} </h2>
            
            <img src={require('../Images/category-1.jpg')} class="card-img" />
            
          </div>
          <div class="cardc">
            <h2 class="section-name">  </h2>
            <h3 class="item-price"> Description:<br/> {description}</h3>
          </div>
          <div class="cardc">
            <h2 class="section-name"> </h2>
            
            <h3 class="item-price"> Price:<br/>
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