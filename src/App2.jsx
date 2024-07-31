import React, { useEffect } from "react"
import Carousel from "./Pages/Gallery"
import FullWidthTabs from "./Pages/Tabs"
import Footer from "./Pages/Footer"

import AOS from "aos"
import "aos/dist/aos.css"
import Home from "./Pages/Home"
import SosialMedia from "./components/SosialMedia"


function App2() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	return (
		<div >
		
			<Home />
			<Carousel />
			<FullWidthTabs />
			

			<div id="Mesh1"></div>
			<div className="lg:mt-[20rem] lg:block ">
				<SosialMedia/>
				</div>
	
			<Footer />
			
		</div>
	)
}

export default App2
