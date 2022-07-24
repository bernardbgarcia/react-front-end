import Banner from '../components/Banner';
// import LandingPage from '../components/LandingPage';
import Highlights from '../components/Highlights';
/* import CourseCard from '../components/CourseCard'; */

export default function Home() {

	const data = {
	    title: "Best Games Hobby Store",
	    content: "Hobby Store",
	    destination: "/products",
	    label: "Enroll now!"
	}

	return(
			<>
				<Banner data={data}/>
				<Highlights/>
				{/* <CourseCard/> */}

			</>



		)


}