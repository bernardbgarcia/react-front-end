import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import UserContext from '../UserContext';
import ProfileSection from '../components/ProfileSection';
import AllProductsAdmin from './AllProductsAdmin';
import AllSalesAdmin from './AllSalesAdmin';
import AllUsers from './AllUsers';
import AddProduct from './AddProduct';
import OrderBar from '../components/OrderBar';
import React from 'react';

export default function Dashboard() {

	const { user } = useContext(UserContext);

	return (
		(user.id === null)
		?
		<Navigate to='/login'/>
		:
		(user.isAdmin)
		?
		
		<div className="dashboard-container">
			<Tabs defaultActiveKey="Account" id="uncontrolled-tab-example" className="mb-3">
	  			<Tab eventKey="Account" title="Account">
	  				<ProfileSection/>
	  			</Tab>
	  			
			  	<Tab eventKey="AllProductsAdmin" title=" All Products">
			  		<AllProductsAdmin/>
			  	</Tab>
			  	<Tab eventKey="AddProduct" title="Add Product">
			  		<AddProduct/>
			  	</Tab>
			  	<Tab eventKey="AllUsers" title="All Users">
			  		<AllUsers/>
			  	</Tab>
			  	<Tab eventKey="AllOrders" title="All Orders">
			  		<AllSalesAdmin/>
			  	</Tab>
			  	
			</Tabs>
		</div>
		:
		<div className="dashboard-container">
			<Tabs defaultActiveKey="orders" id="uncontrolled-tab-example" className="mb-3">
	  			<Tab eventKey="orders" title="Order history">
			  		<OrderBar user={user}/>
			  	</Tab>
	  			<Tab eventKey="Account" title="Account">
	  				<ProfileSection/>
	  			</Tab>
	  						  	
			  	<Tab eventKey="loyalty" title={user.isAdmin ? "Orders" : "Loyalty Program"}>
			  		
			  	</Tab>
			  	<Tab eventKey="badges" title={user.isAdmin ? "Orders" : "My Badges"}>
			  		
			  	</Tab>
			</Tabs>
		</div>
	)
}
