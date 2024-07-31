import React, { useState,useEffect } from "react"
import Logo from "../Pages/img/logo.png"
import { TypeAnimation } from "react-type-animation"
import { useNavigate } from 'react-router-dom';
import Logo2 from "../Pages/img/logo.jpg"

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [openProfile, setOpenProfile] = useState(false)


	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const [image, setImage] = useState(null);
	const navigate = useNavigate();
  


	return (
		<>
			{/* Mobile */}
			<div className="flex justify-between relative top-3 lg:hidden">
				<div className="w-10 h-10 rounded-full flex justify-center items-center" id="UserButton">
					<img src="/NavIcon.png" alt="" className="w-6 h-6" onClick={toggleMenu} />
				</div>
				<div className={`text-center text-white  ${isMenuOpen ? "hidden" : ""}`}>
					<h1 className="font-bold text-xs mt-4">
					<TypeAnimation
					sequence={[
					  // Same substring at the start will only be typed out once, initially
					  'Hi,Everyone',
					  1000, // wait 1s before replacing "Mice" with "Hamsters"
					  'Welcome',
						
					  1000
					]}
					wrapper="span"
					speed={20}
					style={{ fontSize: '2em', display: 'inline-block' }}
					repeat={Infinity}
				  />
					</h1>
				</div>
					
				<div
					className={`w-11 h-11 flex justify-center items-center rounded-full `}
					id="UserButton2">
				<img src={Logo2} className='rounded-full' alt="" />
				</div>
					

				{isMenuOpen && (
					<div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu}></div>
				)}

				<div
					className={`fixed top-0 left-0 h-full w-64  shadow-lg transform transition-transform duration-300 ease-in-out ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
					id="IsiNavbar">
					<ul className="mt-8">
					<div className="flex items-center justify-between ">
						<h2 className="font-bold  ">XI RPL 4</h2>
						<img src={Logo} className="w-12 h-12" alt="" />
						</div>
					<div className="border-b-2 " id="user">
		
				</div>
				
						<li className="mb-2 item-enter" id="navbar1">
							<a href="#" className="text-white opacity-80 text-lg font-bold">
								Home
							</a>
						</li>
						<li className="mb-2" id="navbar1">
							<a href="#Gallery" className="text-white opacity-80 text-lg font-bold">
								Gallery
							</a>
						</li>
						<li id="navbar1">
							<a href="#Tabs" className="text-white opacity-80 text-lg font-bold">
								Structure&Schedule
							</a>
						</li>
					</ul>
				</div>
			</div>
			{/* Dekstop */}
			<div className="flex justify-between relative top-4 hidden lg:flex h-24 item-center">
				<div>
					<img src={Logo}  className="w-14 h-14 rounded-full color" alt="" />
				</div>
				<ul className="mt-2 flex gap-6">
					<li className="mt-4 item-center" id="navbar">
						<a href="#" className="text-white opacity-80 text-[1rem] font-semibold">
							Home
						</a>
					</li>
					<li className="mt-4"id="navbar">
						<a href="#Gallery" className="text-white opacity-80 text-[1rem] font-semibold">
							Gallery
						</a>
					</li>
					<li className="mt-4" id="navbar">
						<a href="#Tabs" className="text-white opacity-80 text-[1rem] font-semibold">
							Structure & Schedule
						</a>
					</li>
				</ul>
				
			</div>
			
		</>
	)
}

export default Navbar