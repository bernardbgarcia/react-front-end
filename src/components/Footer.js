import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.css'

export default function Footer() {
	return  (
		<div className="footer-container">
			<section className="footer-app">
				<p className="footer-app-heading">
				Download Our App
				</p>
				<div className="input-areas">
					<div className="app-logo">
						<img src={require('../Images/play-store.png')} className="footer-img" />
						<img src={require('../Images/app-store.png')} className="footer-img" />
                       
                    </div>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-items">
					<h2>Follow Us</h2>
					<Link to='/'>Facebook</Link>
					<Link to='/'>Twitter</Link>
					
				</div>					
				<div className="footer-link-items">
					<h2>About</h2>
					
					<Link to='/'>Blog Post</Link>
					<Link to='/'>News</Link>
				</div>
				<div className="footer-link-items">
					<h2>Useful Links</h2>
					<Link to='/'>Support</Link>
					<Link to='/'>Return Policy</Link>
					
				</div>										
			</div>
			<div className="social-media">
				<small className="website-rights social-media-items">Copyright 2022 - Best Games</small>
				<div className="social-icon social-media-items">
					<Link className="social-icon-link facebook" to="/" target="_blank" arial-label="Facebook">
						<i className="fab fa-facebook-f"></i>
					</Link>						
					<Link className="social-icon-link instagram" to="/" target="_blank" arial-label="Instagram">
						<i className="fab fa-instagram"></i>
					</Link>						
					<Link className="social-icon-link twitter" to="/" target="_blank" arial-label="Twitter">
						<i className="fab fa-twitter"></i>
					</Link>
				</div>
			</div>
		</div>
	)
}