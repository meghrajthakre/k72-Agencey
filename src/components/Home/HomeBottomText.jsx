import React from 'react'
import { Link } from 'react-router-dom'

const BottomLeft = () => {
  return (
    <div className='font-[font1] flex items-center justify-center gap-5'>

      <div className='border-2 hover:border-[#d3fd50]  h-24 flex items-center px-8 border-white rounded-full uppercase' >
        <Link className='text-[6vw] hover:text-[#d3fd50] mt-6' to="project">Project</Link>
      </div>

      <div className='border-2 hover:border-[#d3fd50] hover:text h-24 flex items-center px-8 border-white rounded-full uppercase' >
        <Link className='text-[6vw]  mt-6' to="agemce">Agence</Link>
      </div>


    </div>
  )
}

export default BottomLeft