import {Fragment, useEffect, useState} from 'react';
import CourseCard from '../components/CourseCard';
//mockdata
//import coursesData from '../data/coursesData';


export default function Courses() {

	

	const [courses, setCourses] = useState([])

	useEffect(() => {

		fetch(`${ process.env.REACT_APP_API_URL }/courses/`)
		.then(res => res.json())
		.then( data => {

			console.log(data)

			setCourses(data.map(course => {

				return (

					<CourseCard key={course._id} courseProp={course} />

					)

			}))

		})

	}, [])




	return(

		//you can use <> instead of <Fragments>
		//<>
		<Fragment> 
			
			<h1>Courses</h1>
			{courses}
		</Fragment>
		//</>

		)
}