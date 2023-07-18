import { styled } from 'styled-components'
import SliderBenefits from '../../components/SliderHome/SliderBenefits'
import SliderHome from '../../components/SliderHome/SliderHome'
import Shelf from '../../components/Shelf/Shelf'


const HomeGridWrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
`
export default function Home() {
  return (
    <div>
      <SliderHome />
      <HomeGridWrapper>
        <SliderBenefits />
        <Shelf />        
      </HomeGridWrapper>
    </div>
  )
}
