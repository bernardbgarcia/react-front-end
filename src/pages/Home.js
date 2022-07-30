import Banner from '../components/Banner';
import Highlights from '../components/Highlights';

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
				

			</>



		)


}