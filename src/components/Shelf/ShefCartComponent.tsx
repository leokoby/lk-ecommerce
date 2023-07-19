import { styled } from "styled-components"


const CartComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`

const ButtonAddToCart = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: var(--bg-wire-5);
  color: #fff;
  cursor: pointer;
`
const InputCartComponent = styled.div`
  input{
    width: 100%;
    max-width: 100px;
    text-align: center;
    padding: 10px 0;
    border-radius: 10px;
    border: 1px solid var(--bg-wire-5);
    font-size: 1rem;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

export default function ShefCartComponent() {
  return (
    <CartComponent>
      <InputCartComponent>
        <button>+</button>
        <input type="number" min={1}/>
        <button>-</button>
      </InputCartComponent>
      <ButtonAddToCart>
        Buy
      </ButtonAddToCart>
    </CartComponent>
  )
}
