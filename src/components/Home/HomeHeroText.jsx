import React from 'react'
import Vedio from './Vedio'

const BottomRight = () => {
  return (
    <div className='text-white font-[font1] pt-1 text-center'>
      <div className='text-[7.5vw] justify-center flex items-center  text-center leading-[8vw]  uppercase'>The spark for</div>
      <div className='text-[7.5vw] justify-center flex items-start  text-center leading-[8vw]  uppercase'>all

        <div className='vedio1 h-[7vw] w-[16vw] object-fill  overflow-hidden ml-2 mr-2 rounded-full  '>
          <Vedio />
        </div>
        things



      </div>
      <div className='text-[9.5vw] justify-center flex items-center  text-center leading-[8vw]  uppercase'>creative</div>

    </div>
  )
}

export default BottomRight