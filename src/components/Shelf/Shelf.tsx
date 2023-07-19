import { styled } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import ShelfProduct from './ShelfProduct'

const ShelfComponent = styled.div`
  width: 100%;

`

export default function Shelf() {
  return (
    <ShelfComponent>
      <h2>Title Shelf</h2>
      <Swiper>
        <SwiperSlide>
          <ShelfProduct/>
        </SwiperSlide>
      </Swiper>
    </ShelfComponent>
  )
}
