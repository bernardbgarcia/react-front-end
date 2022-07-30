import {Fragment, useEffect, useState} from 'react';
import CourseCard from '../components/CourseCard';
import ProductCard from '../components/ProductCard';
// import ProductCard2 from '../components/ProductCard2';
import ProductCard3 from '../components/ProductCard3';
// import ProductCard4 from '../components/ProductCard4';

export default function Products() {

	const [products, setProducts] = useState([])

	useEffect(() => {

		fetch(`${process.env.REACT_APP_API_URL}/products/allactiveproducts`)
		.then(res => res.json())
		.then( data => {

			console.log(data)

			setProducts(data.map(product => {

				return (

					<ProductCard3 key={product._id} productProp={product} />

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