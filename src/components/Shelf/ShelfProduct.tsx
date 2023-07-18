import { styled } from "styled-components"

const ProductComponentShelf = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  height: 450px;
  background: var(--bg-wire-1);
  border-radius: 5px;
  transition: all 200ms ease-in-out;

  &:hover{
    box-shadow: 0px 0px 10px rgba(0,0,0,0.32);
  }
`

const ImageShelfComponent = styled.img`
  width: 100%;
`

export default function ShelfProduct() {
  return (
    <ProductComponentShelf>
      <ImageShelfComponent src="" alt=""/>
    </ProductComponentShelf>
  )
}
