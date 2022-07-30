import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import UserContext from '../UserContext';
import ProfileSection from '../components/ProfileSection';
import OrderBar from '../components/OrderBar';
import React from 'react';

export default function AdminPanel() {

	const { user } = useContext(UserContext);
	
	const token = localStorage.getItem('token');

	return (
		
		<div className="adminpanel-container">
			<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
	  			<Tab eventKey="profile" title="Account">
	  				<ProfileSection/>
	  			</Tab>
	  			<Tab eventKey="panel" title="Panel">
	  				Adminpanel
	  			</Tab>
	  			<Tab eventKey="orders" title={"Orders"}>
			  		<OrderBar user={user}/>
			  	</Tab>
			  	<Tab eventKey="loyalty" title={"Loyalty Program"}>
			  	<OrderBar user={user}/>
			  	</Tab>
			  	<Tab eventKey="badges" title={"My Badges"}>
			  		<OrderBar user={user}/>
			  	</Tab>
			</Tabs>
		</div>
	)
}
