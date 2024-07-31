
import Rating from "../components/Rating"
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (

		<footer className="" id="Footer">

			<div class="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8">
				<div class="md:flex md:justify-between border-t mt-5">
					<div className="flex gap-4 justify-center">
					<div class="flex  relative items-center justify-center  ">
						<div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
							<div class="text-gray-500 group-hover:scale-105 transition-all">
								<svg class="w-16 h-16" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linejoin="round" stroke-linecap="round"></path>
								</svg>
							</div>
							<div class="group-hover:pb-10 transition-all duration-500 delay-200 ">
								<h1 class="font-semibold text-gray-700">Muhammad Raka Afathan</h1>
								<p class="text-gray-500 text-sm">@web_developer</p>
							</div>
							<div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
								<div class="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
								<a class="hover:scale-110 transition-all duration-500 delay-200 hover:text-gray-400" href="https://www.instagram.com/rakalfthan_?igsh=NGozejh3dGNnOTlh"><FaInstagram/></a>
									<a href="mailto:alfraka3@gmail.com" class="hover:scale-110 transition-all duration-500 delay-200 hover:text-gray-400">
										<svg width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" fill="none">
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
											<path d="M22 6l-10 7L2 6"></path>
										</svg>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					<div class="flex  relative items-center justify-center flex lg:hidden ">
						<div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
							<div class="text-gray-500 group-hover:scale-105 transition-all">
								<svg class="w-16 h-16" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linejoin="round" stroke-linecap="round"></path>
								</svg>
							</div>
							<div class="group-hover:pb-10 transition-all duration-500 delay-200 ">
								<h1 class="font-semibold text-gray-700">Khalid Luhur Pambudi</h1>
								<p class="text-gray-500 text-sm">@web_developer</p>
							</div>
							<div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
								<div class="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
								<a class="hover:scale-110 transition-all duration-500 delay-200 hover:text-gray-400" href="https://www.instagram.com/oceannn.19?igsh=MTFjMmNqbnAwdzFwYQ=="><FaInstagram/></a>
									<a href="mailto:khalidluhurp@gmail.com" class="hover:scale-110 transition-all duration-500 delay-200 hover:text-gray-400">
										<svg width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" fill="none">
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
											<path d="M22 6l-10 7L2 6"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					</div>
					<div class="flex  mt-4  lg:mr-10">
					
						<div className="hidden md:block">
							<Rating />
						</div>
					</div>

					<div className="flex items-center justify-center mt-8  md:hidden">
						{/* RATING */}
						<Rating />
					</div>
					<div class="flex  relative items-center justify-center hidden lg:flex ">
						<div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
							<div class="text-gray-500 group-hover:scale-105 transition-all">
								<svg class="w-16 h-16" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linejoin="round" stroke-linecap="round"></path>
								</svg>
							</div>
							<div class="group-hover:pb-10 transition-all duration-500 delay-200">
								<h1 class="font-semibold text-gray-700">Khalid Luhur Pambudi</h1>
								<p class="text-gray-500 text-sm">@web_developer</p>
							</div>
							<div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
								<div class="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
								<a class="hover:scale-110 transition-all duration-500 delay-200 hover:text-gray-400" href="https://www.instagram.com/oceannn.19?igsh=MTFjMmNqbnAwdzFwYQ=="><FaInstagram/></a>
									<a href="mailto:khalidluhurp@gmail.com" class="hover:scale-110 transition-all duration-500 delay-200 hover:text-gray-400">
										<svg width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" fill="none">
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
											<path d="M22 6l-10 7L2 6"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div class="sm:flex sm:items-center sm:justify-between">
					<div class="flex mt-4 justify-center sm:mt-0">
					</div>
				</div>

			</div>

		</footer>

	)
}

export default Footer
