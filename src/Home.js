import React from 'react'
import UncontrolledExample from './components/carousel'
import Fwrapper from './components/F-wrapper/Fwrapper'
import Footer from './components/footer/Footer'
import Header from './components/header/header'
import SimplifyOperation from './components/simplify-operations'
import StickyBox from './components/Sticky'
import UpperBody from './components/uppercontent'
import VideoBox from './components/Video'
import Whyinf from './components/Whyinf/Whyinf'
const Home = () => {
  return (
    <div>
      <Header />
      <UpperBody />
      <SimplifyOperation />
      <Whyinf />
      <UncontrolledExample />
      <VideoBox/>
      <Fwrapper />
      <Footer />
      <StickyBox />
    </div>
  )
}

export default Home
