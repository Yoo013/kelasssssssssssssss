
import BoxClassIg from './BoxClassIg'
import BoxTwitter from './BoxTwittetr'
import BoxClassDiscord from './BoxClassDiscord'
import BoxClaasSpotify from './BoxClaasSpotify'

import React, { useEffect } from "react"


const SosialMedia = () => {


  return (
    <div className='max-w-[1250px] mb-8 w-[90%] mx-auto'>
      <div className='flex flex-wrap gap-4   w-[60%] justify-center mx-auto'>
        <div>
          <BoxClassIg/>
        </div>
        <div>
        <BoxTwitter/>
        </div>
        <div >
          <BoxClassDiscord/>
        </div>
        <div>
        <BoxClaasSpotify/>
        </div>
       
      </div>
    </div>
  )
}

export default SosialMedia