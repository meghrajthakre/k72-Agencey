import React from 'react'
import Vedio from '../components/Home/Vedio'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'
const Home = () => {
  return (
    <div>
      <div className='w-screen h-screen fixed'>
        <Vedio/>
      </div>

      <div className="w-screen h-screen relative pb-5 overflow-hidden flex flex-col justify-between">
          <HomeHeroText/>
          <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home