import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import UserContext from '../UserContext';
import ProfileSection from '../components/ProfileSection';
import OrderBar from '../components/OrderBar';
import React from 'react';

export default function Dashboard() {

	const { user } = useContext(UserContext);

	return (
		(user.id === null)
		?
		<Navigate to='/login'/>
		:
		<div className="dashboard-container">
			<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
	  			<Tab eventKey="profile" title="Account">
	  				<ProfileSection/>
	  			</Tab>
	  			<Tab eventKey="dash" title="Dash">
	  				Dashboard
	  			</Tab>
			  	<Tab eventKey="Admin-User" title="Admin-User">
			  		{
			  		(user.isAdmin)
					?
					Dashboard
					:
			  		ProfileSection
			  		}
			  	</Tab>
			  	<Tab eventKey="loyalty" title={user.isAdmin ? "Orders" : "Loyalty Program"}>
			  		<ProfileSection/>
			  	</Tab>
			  	<Tab eventKey="badges" title={user.isAdmin ? "Orders" : "My Badges"}>
			  		
			  	</Tab>
			</Tabs>
		</div>
	)
}
