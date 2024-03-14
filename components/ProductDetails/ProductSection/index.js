import Styles from './ProductSection.module.css'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Mousewheel, FreeMode, Scrollbar } from 'swiper/modules';
import { useWindowSize } from "@uidotdev/usehooks";
import { RiShieldFlashFill } from "react-icons/ri";



const ProductSection = (props) => {

  const [count, setCount] = useState(72000)


      useEffect(()=>{
          setTimeout(() => {
              count === 0 ? setCount(count) : setCount( count - 1)
          }, .1)

          
      })  

      let minutes =  Math.floor((count / 60) % 60) 
      let seconds = count % 60
      seconds = seconds < 10 ? '0' + seconds : seconds
      let hours = Math.floor(count / 3600)

  const [cardData, setCardData] = useState(props.data)
    const size = useWindowSize()
  const render2 = cardData.map((card,idx) => {
      return (
          <SwiperSlide key={idx} className={Styles.content}>
               
          <div className={`tol px-2${Styles.content}`}>
              <div><img src={card.imageUrl} /></div>
              <div className={Styles.products}>
              <div style={{width:'100%'}}><p className={Styles.p1}>{card.name}</p></div>
              <p className={Styles.p2}>{card.newPrice} <br /><span className={Styles.p3}>{card.oldPrice}</span></p>
              </div>
              <div class={`progress ${props.display} my-2`} role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class={`progress-bar ${card.progressLength > 0 && card.progressLength < 20  ? 'bg-danger' :  'bg-warning'}`} style={{width: `${card.progressLength}%`}}></div>
              </div>
              
              </div>    
          </SwiperSlide>
      )
  })
  return (
    <div className="my-3">
      <div className="">
      
        <div className={Styles.cover}>
        <div className= {` d-flex justify-content-between px-3 align-items-center ${Styles.ardtext}`} style={{backgroundColor: `${props.bgcolor}`}}>
        <div className='d-flex align-items-center'><div className={`${Styles.flash} ${props.flash}`}><RiShieldFlashFill /></div><h4 className={`${props.color} ${Styles.flashtext}`}>{props.left}</h4></div>
                <h3 className={`${props.time} ${props.color}`}> Time Left: {hours}h : {minutes}m : {seconds}s</h3> 
                <h4 className={`${props.color} see-all`}>{props.Right}</h4>
            </div>
          <Swiper
        slidesPerView={size.width < 1034 ? 3 : 6}
        spaceBetween={10}
        mousewheel={{
          enabled: true,
          forceToAxis: true
        }}
        freeMode={true}
        scrollbar={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay, Mousewheel, FreeMode, Scrollbar]}
        className="mySwiper"
        
      >
        {render2}
      </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ProductSection