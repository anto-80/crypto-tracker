import React from 'react'
import Carousel from './Carousel'
import './Banner.css'


const Banner = () => {
  return (
    <div className='banner'>

      <div className='bannerContent' >
        <h2
          style={{
            fontSize: 40,
            fontWeight: "bold",
            marginBottom: 15,
            fontFamily: "Rubik", paddingTop: 40,
            textAlign: "center"
          }}>Cryptosphere</h2>

        <h2 style={{ fontFamily: "Rubik", fontSize: 15, textAlign: "center", marginBottom: 40, }}>Get all the Info regarding your favorite Crypto Currency</h2>

        <Carousel />
      </div>

    </div>

  )
}

export default Banner
