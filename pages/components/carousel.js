import { useState } from 'react'
import { React } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function testComponent() {
  return (
    <Carousel>
      <div>
        <img src="https://source.unsplash.com/random/800x600" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://source.unsplash.com/random/800x600" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://source.unsplash.com/random/800x600" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )
}


