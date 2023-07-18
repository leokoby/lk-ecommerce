import { styled } from "styled-components"
import { BiUserCircle, BiShoppingBag } from 'react-icons/bi'


const IconsMenuComponent = styled.div`
  display:flex;
  align-items:center;
  gap: 1rem;
  position: absolute;
  right: 0;
`

const IconWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: inherit;
  border: none;
  cursor: pointer;
`

export default function IconsMenu() {
  return (
    <IconsMenuComponent>
      <IconWrapper>
        <BiUserCircle size={25}/>
      </IconWrapper>
      <IconWrapper>
        <BiShoppingBag size={25} />
      </IconWrapper>
    </IconsMenuComponent>
  )
}
