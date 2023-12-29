import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Imag1 from '../assets/1.png';
import imag2 from '../assets/3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Services = () => {
  return (

<div className='services'>
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false}
    interval={1000} showThumbs={false}>

<div>
    <img src={Imag1} alt='item1'/>
    <p>Full Stack</p>
</div>
<div>
    <img src={imag2} alt='item2'/>
    <p>Peer to Peer Support</p>
</div>




    </Carousel>
</div>

    )
}

export default Services