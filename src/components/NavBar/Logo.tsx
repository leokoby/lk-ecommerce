import { styled } from 'styled-components'

const LogoComponent = styled.span`
  font-size: 1.5rem;
  font-weight: 400px;
`

export default function Logo() {
  return (
    <>
      <LogoComponent>
        LOGO
      </LogoComponent>
    </>
  )
}
