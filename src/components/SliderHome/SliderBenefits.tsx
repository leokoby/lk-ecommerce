import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { styled } from 'styled-components';

const BenefitComponent = styled.div`
    width: 100%;
    margin: 2rem;

    h2{
      text-align: center;
      margin-bottom: 1rem;
    }

    .swiper-pagination{
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      position: relative;
      bottom: -5px;
    }

    .swiper-pagination-bullet{
      width:10px;
      height: 4px;
      border-radius: 0;
    }
    .swiper-pagination-bullet-active{
      width: 20px;
    }
`
const CardBenefitComponent = styled.div`
    width: 100%;
    max-width: 400px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-wire-2);
    border-radius: 5px;
`

export default function SliderBenefits() {
  return (
    <BenefitComponent>
      <h2>BENEFITS</h2>
      <Swiper
       slidesPerView={3}
       modules={[Pagination]}
       spaceBetween={20}
       pagination={{ clickable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <CardBenefitComponent>
            <p>Lorem ipsum</p>
          </CardBenefitComponent>
        </SwiperSlide>
        <SwiperSlide>
          <CardBenefitComponent>
            <p>Lorem ipsum</p>
          </CardBenefitComponent>
        </SwiperSlide>
        <SwiperSlide>
          <CardBenefitComponent>
            <p>Lorem ipsum</p>
          </CardBenefitComponent>
        </SwiperSlide>
        <SwiperSlide>
          <CardBenefitComponent>
            <p>Lorem ipsum</p>
          </CardBenefitComponent>
        </SwiperSlide>
        <SwiperSlide>
          <CardBenefitComponent>
            <p>Lorem ipsum</p>
          </CardBenefitComponent>
        </SwiperSlide>
      </Swiper>
    </BenefitComponent>
  )
}
