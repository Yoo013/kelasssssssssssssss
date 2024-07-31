import React from 'react'
import Spotify from '../Pages/img/spotify.svg'
import { IoArrowForward } from "react-icons/io5";
const BoxClaasSpotify = () => {
  return (
    <div id='BoxClassSpotify' className='lg:w-[450px] w-[300px] h-[110px]'>
			  <div className='flex items-center lg:ml-8 ml-5 gap-8  h-full'>
				<div className='flex  items-center gap-4 text-white font-semibold'>
            <img src={Spotify} width={50} alt="" />
			<h4>Spotify</h4>
			</div>
      <a href="https://open.spotify.com/playlist/4ouTXhN7IZvH8o8Pn5Cx2g?si=a46e7200d2ba4b3a&utm_medium=share&utm_source=linktree&nd=1&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F4ouTXhN7IZvH8o8Pn5Cx2g%3Fsi%3Da46e7200d2ba4b3a%26utm_medium%3Dshare%26utm_source%3Dlinktree&%24android_redirect_timeout=3000&~feature=share&~channel=linktree&feature=organic&_branch_match_id=1346664550022867494&_branch_referrer=H4sIAAAAAAAAA82PwU7DMAyGnyY7tiEp64RUTQiY4II4cEBcKjdx12hpEiUOYm9PMjGeAckH%2B%2Fv9W78XopDu2jYFT2Y%2BNxBCY407tfsQvc6KBh%2FQbZjo5mztmKMdlmph8p6JQ6kqN1e38mtBwcLZmkSl7Xx%2B%2F1he%2B5fPr%2Bed372524dvcWTykAyTj9BtsRecazFBN0lgYptpHVfUJq9FTwtE%2FIXJ56iwwJqOIuIlE1g7gTr9p1yFO13mmxoQnI7e6DEWa0RFI5kVfaZBcs43rH%2BaEShHHC4nK1ALOId2%2BHvzuuHjEZxRP6sDKm6xAQAA"><IoArrowForward size={30} className='absolute hover:translate-x-2 top-10 all duration-500  text-white right-10 lg:right-4 '/></a>
      </div>

    </div>
  )
}

export default BoxClaasSpotify