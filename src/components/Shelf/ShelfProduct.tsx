import { styled } from "styled-components"
import ShefCartComponent from "./ShefCartComponent"

const ProductComponentShelf = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  height: 450px;
  background: var(--bg-wire-2);
  border-radius: 5px;
  transition: all 200ms ease-in-out;  
  margin: 20px 0;

  &:hover{
    box-shadow: 0px 0px 10px rgba(0,0,0,0.32);
  }
`

const ImageShelfComponent = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  padding: 10px;
  border-radius: 15px;
`

const ProductNameComponent = styled.span`
  width: 100%;
  padding: 10px;
  p{
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
  }
`

const ProductPriceComponent = styled.span`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
`

export default function ShelfProduct() {
  return (
    <ProductComponentShelf>
      <ImageShelfComponent src="https://placehold.co/300x300" alt=""/>
      <ProductNameComponent>
        <p>Product Name</p>
      </ProductNameComponent>
      <ProductPriceComponent>
        $00,00
      </ProductPriceComponent>
      <ShefCartComponent/>
    </ProductComponentShelf>
  )
}
