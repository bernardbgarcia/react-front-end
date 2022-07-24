import { useState, useEffect } from 'react'
import {Row, Col, Card} from 'react-bootstrap';
 import "./Highlights.css";

export default function Highlights() {

	/* const [style, setStyle] = useState({
		width: "50%",
		height: "12rem"
		
	}) */

	return (

		

			<div class="wrapper">
      <section class="section-2 target" id="product-items">
        <h1 class="section-heading">Categories</h1>
        <div class="cards-wrapper center">
          <div class="card">
            <h2 class="section-name"> </h2>
            
            <img src={require('../Images/category-1.jpg')} class="card-img" />
            <h3 class="item-price"> </h3>
            <button type="button" class="card-btn">RC Planes</button>
          </div>
          <div class="card">
            <h2 class="section-name"> </h2>
            <img src={require('../Images/category-2.jpg')} class="card-img" />
            <h3 class="item-price"> </h3>
            <button type="button" class="card-btn">Airsoft</button>
          </div>
          <div class="card">
            <h2 class="section-name"> </h2>
            <img src={require('../Images/category-3.jpg')} class="card-img" />
            <h3 class="item-price"> </h3>
            <button type="button" class="card-btn">Board Games</button>
          </div>
        </div>
      </section>
    </div>
		


			



		)



}