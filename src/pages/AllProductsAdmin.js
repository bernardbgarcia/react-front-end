import {Fragment, useEffect, useState, useContext} from 'react';
// import CourseCard from '../components/CourseCard';
// import ProductCard from '../components/ProductCard';
import ProductSectionAdmin from '../components/ProductSectionAdmin';
// import ProductCard2 from '../components/ProductCard2';
import UserContext from '../UserContext';




export default function AllProductsAdmin() {

	

	const [products, setProducts] = useState([])

	const { user } = useContext(UserContext);
	const token = localStorage.getItem('token');

	useEffect(() => {

		fetch(`${ process.env.REACT_APP_API_URL }/products/allproducts`, {
    			headers: {
    				Authorization: `Bearer ${token}`
    			}

    		})
		.then(res => res.json())
		.then( data => {

			console.log(data)

			setProducts(data.map(product => {

				return (

					<ProductSectionAdmin key={product._id} productProp={product} />

					)

			}))

		})

	}, [])




	return(

		//you can use <> instead of <Fragments>
		//<>
		<Fragment> 
			<h1>Products</h1>
			{products}
		</Fragment>
		//</>

		)
}