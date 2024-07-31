import Twitter from '../Pages/img/Twiiter.svg'
import { IoArrowForward } from "react-icons/io5";

const BoxTwitter = () => {

	return (
        <div className='w-[300px] lg:w-[140px] h-[110px] group lg:hover:w-60 overflow-hidden  duration-500' id="BoxClassDc">
        <div className='flex items-center   h-full ml-4 gap-4 lg:gap-2'>
      <img src={Twitter} width={60} className='' alt="" />
      <h4 className='text-white font-semibold lg:-translate-y-20 lg:-translate-x-10 lg:group-hover:translate-y-1 lg:group-hover:translate-x-2 all duration-500'>Twitter</h4>
      <a href=""><IoArrowForward size={30} className='absolute hover:translate-x-2 top-10 all duration-500  text-white right-10 lg:right-4 '/></a>
      </div>
    </div>
	)
}

export default BoxTwitter
