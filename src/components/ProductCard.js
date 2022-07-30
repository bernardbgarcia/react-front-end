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

		<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 50 }}>

    		<div>
    		<h3 className="item-price"> {name}</h3>
    		<h3 className="item-price"> {imgUrl}</h3>
            	<h3 className="item-price"> Description:<br/> {description}</h3>
            	<hr/>
            	</div>
            	<div className="center">
    					<img src={imgUrl} className="prod-img" styles={imageStyles}/>
	            </div>
    		<div>
    		<Badge className="badge-stock" bg = "light" text = "dark" > {isActive ? 'In Stock' : 'Out of Stock'} </Badge>
            <h3 className="item-price"> Price:<br/> {formatCurrency(price)}</h3>
            	<Button variant="primary" as={Link} to={`/api/products/${_id}`}>Details</Button></div>

  		</div>
		)
}