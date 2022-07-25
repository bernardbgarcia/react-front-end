import { useState, useEffect } from 'react'
import {Row, Col, Card} from 'react-bootstrap';
 import "./Highlights.css";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { fastar, faregular } from '@fortawesome/free-solid-svg-icons';
 // import { fa-star, fa-regular } from '@fortawesome/fontawesome';
 import Button from './Button';

export default function Highlights() {

  // const element = <FontAwesomeIcon icon={fa-star} />

	/* const [style, setStyle] = useState({
		width: "50%",
		height: "12rem"
		
	}) */

	return (

		

			<div class="wrapper">
      <section class="section-2 target" id="product-items">
        <h1 class="section-heading title">Categories</h1>
        <div class="cards-wrapper center">
          <div class="card">
            <h2 class="section-name"> </h2>
            
            <img src={require('../Images/cat-plane1.jpg')} class="card-img" />
            <h3 class="item-price"> </h3>
            <button type="button" class="card-btn">RC Planes</button>
          </div>
          <div class="card">
            <h2 class="section-name"> </h2>
            <img src={require('../Images/airsoft2.jpg')} class="card-img" />
            <h3 class="item-price"> </h3>
            <button type="button" class="card-btn">Airsoft</button>
          </div>
          <div class="card">
            <h2 class="section-name"> </h2>
            <img src={require('../Images/cat-chess-1.jpg')} class="card-img" />
            <h3 class="item-price"> </h3>
            <button type="button" class="card-btn">Board Games</button>
          </div>
        </div>
      </section>

      <section class="section-2 target" id="product-items">
        <h1 class="section-heading title">Featured Products</h1>
        <div class="cards-wrapper center">
          <div class="card">
            <h2 class="section-name"> </h2>
            
            <img src={require('../Images/plane-1.jpg')} class="card-img" />
            <h4>H-King (PNF) Reno Acest</h4>
                <div class="rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                </div>
                <Button
                        id='62ddd08a0dc1dc3f08536710'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                <p> </p>
          </div>
          <div class="card">
            <h2 class="section-name"> </h2>
            <img src={require('../Images/gun-1.jpg')} class="card-img" />
            <h4>Carbine Airsoft AEG Rifle</h4>
                <div class="rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                </div>
                <Button
                        id='62ddd0ec0dc1dc3f08536716'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                <p> </p>
          </div>
          <div class="card">
            <h2 class="section-name"> </h2>
            <img src={require('../Images/chess-1.jpg')} class="card-img" />
            <h4>Deluxe Old Club Staunton Chess Set</h4>
                <div class="rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                </div>
                <Button
                        id='62ddd1590dc1dc3f0853671c'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                <p> </p>
          </div>
        </div>
      </section>
      <section class="section-2 target" id="product-items">
        <h1 class="section-heading title">Latest Products</h1>
        <div class="cards-wrapper center">
          <div class="card">
            <h2 class="section-name"> </h2>
            
            <img src={require('../Images/plane-2.jpg')} class="card-img" />
            <h4>Tundra PT1200 (RTF)</h4>
                <div class="rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                </div>
                <Button
                        id='62ddd0b10dc1dc3f08536712'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                <p> </p>
          </div>
          <div class="card">
            <h2 class="section-name"> </h2>
            <img src={require('../Images/gun-2.jpg')} class="card-img" />
            <h4>Airsoft Scout Sniper Rifle</h4>
                <div class="rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                </div>
                <Button
                        id='62ddd10b0dc1dc3f08536718'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                <p> </p>
          </div>
          <div class="card">
            <h2 class="section-name"> </h2>
            <img src={require('../Images/chess-3.jpg')} class="card-img" />
            <h4>Chess Set with Ebony & Boxwood Pieces</h4>
                <div class="rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                </div>
                <Button
                        id='62ddd1590dc1dc3f0853671c'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                <p> </p>
          </div>
        </div>
      </section>
      <section class="section-2 target" id="product-items">
        <h1 class="section-heading"> </h1>
        <div class="cards-wrapper center">
          <div class="card">
            <h2 class="section-name"> </h2>
            
            <img src={require('../Images/plane-3.jpg')} class="card-img" />
            <h4>Reno Aces P-51 "Galloping Ghost"</h4>
                <div class="rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                </div>
                <Button
                        id='62ddd0310dc1dc3f085366e8'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                <p> </p>
          </div>
          <div class="card">
            <h2 class="section-name"> </h2>
            <img src={require('../Images/gun-3.jpg')} class="card-img" />
            <h4>Head Coverage Helmet / Mask / Goggle</h4>
                <div class="rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                </div>
                <Button
                        id='62ddd12f0dc1dc3f0853671a'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                <p> </p>
          </div>
          <div class="card">
            <h2 class="section-name"> </h2>
            <img src={require('../Images/chess-2.jpg')} class="card-img" />
            <h4>Staunton Chess Set</h4>
                <div class="rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                </div>
                <Button
                        id='62ddd1760dc1dc3f0853671e'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'>
                        Learn More
                        </Button>
                <p> </p>
          </div>
        </div>
      </section>
    </div>


		


			



		)



}