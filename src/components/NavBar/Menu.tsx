import { styled } from "styled-components"
  
  const MenuComponent = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: 2rem;
  `
  
  const LinkItem = styled.li`
    width: max-content;
    padding: 0.5rem;
  `
  
  const Link = styled.a`
    color: var(--bg-wire-5);
    font-weight: 300;
    cursor: pointer;
    text-decoration: none;
    transition: all 200ms ease-in-out ;
    &:hover{
      transition: all 200ms ease-in-out ;
      color: var(--bg-wire-3);
    }

  `

export default function Menu() {
  return (
    <MenuComponent>
      <LinkItem>
        <Link>
          T-shirt
        </Link>
      </LinkItem>
      <LinkItem>
        <Link>
          Pants
        </Link>
      </LinkItem>
      <LinkItem>
        <Link>
          Shoes
        </Link>
      </LinkItem>
   
    </MenuComponent>
  )
}