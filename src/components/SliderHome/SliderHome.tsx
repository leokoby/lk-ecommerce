import {Swiper, SwiperSlide} from 'swiper/react'
import { A11y, Autoplay } from 'swiper/modules';
import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderComponent = styled.div`

`

const SliderImage = styled.div`
  width: 100%;
  height: 500px;
  background: var(--bg-wire-5);
`

export default function SliderHome() {
  return (
    <SliderComponent>
      <Swiper
        slidesPerView={1}
        modules={[A11y, Autoplay]}
        spaceBetween={20}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{delay: 10000 }}
       >
        <SwiperSlide>
          <SliderImage />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage />
        </SwiperSlide>
      </Swiper>
    </SliderComponent>
  )
}
