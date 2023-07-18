import { styled } from 'styled-components'
import FooterMenuGroup from './FooterMenuGroup'

const FooterComponent = styled.footer`
  width: 100%;
  height: 300px;
  background-color: var(--bg-wire-2);
  position: absolute;
  bottom: 0;
`

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export default function Footer() {
  return (
    <FooterComponent>
      <FooterWrapper>
        <FooterMenuGroup /> 
      </FooterWrapper>
    </FooterComponent>
  )
}
