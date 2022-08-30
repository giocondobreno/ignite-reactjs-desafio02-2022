import { ButtonCounter, CounterContainer, Quantity } from './styles'

interface QuantityInputProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}
export function QuantityInput({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityInputProps) {
  return (
    <CounterContainer>
      <ButtonCounter disabled={quantity <= 1} onClick={onDecrease}>
        -
      </ButtonCounter>
      <Quantity type="number" readOnly value={quantity} />
      <ButtonCounter onClick={onIncrease}>+</ButtonCounter>
    </CounterContainer>
  )
}
