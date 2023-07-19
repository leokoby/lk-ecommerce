import { Link } from "react-router-dom"
import { styled } from "styled-components"

const FooterMenuGroupComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const FooterMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  
  h2{
    margin-bottom: 10px;
  }

  ul{
    list-style:none;
    a{
      display: block;
      padding: 5px 0;
      text-decoration: none;
      color: var(--bg-wire-5);
    }
  }
`

export default function FooterMenuGroup() {

  return (
    <FooterMenuGroupComponent>
      <FooterMenuItems>
        <h2>Title 1</h2>
        <ul>
          <Link to={''}>Menu item</Link>
          <Link to={''}>Menu item</Link>
          <Link to={''}>Menu item</Link>
        </ul>
      </FooterMenuItems>
      <FooterMenuItems>
        <h2>Title 2</h2>
        <ul>
          <Link to={''}>Menu item</Link>
          <Link to={''}>Menu item</Link>
          <Link to={''}>Menu item</Link>
        </ul>
      </FooterMenuItems>
      <FooterMenuItems>
        <h2>Title 3</h2>
        <ul>
          <Link to={''}>Menu item</Link>
          <Link to={''}>Menu item</Link>
          <Link to={''}>Menu item</Link>
        </ul>
      </FooterMenuItems>
      <FooterMenuItems>
        <h2>Title 4</h2>
        <ul>
          <Link to={''}>Menu item</Link>
          <Link to={''}>Menu item</Link>
          <Link to={''}>Menu item</Link>
        </ul>
      </FooterMenuItems>
    </FooterMenuGroupComponent>
  )
}
