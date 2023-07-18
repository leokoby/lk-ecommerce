import styled  from 'styled-components'
import Logo from './Logo'
import IconsMenu from './IconsMenu'
import Menu from './Menu'

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: var(--bg-wire-2);
`

const NavBarComponent = styled.nav`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
`

export function NavBar() {  
  return (
    <NavBarContainer>
      <NavBarComponent>
        <Logo />
        <Menu />
        <IconsMenu />
      </NavBarComponent>
    </NavBarContainer>
  )
}
