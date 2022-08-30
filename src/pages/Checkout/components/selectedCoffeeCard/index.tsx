import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  ActionsContainer,
  CoffeeCardContainer,
  CoffeeName,
  CoffeePrice,
  CoffeeThumb,
  DetailsContainer,
  InfoContainer,
  RemoveButton,
  RemoveButtonLabel,
} from './styles'

interface SelectedCoffeeCardProps {
  coffee: CartItem
}

export function SelectedCoffeeCard({ coffee }: SelectedCoffeeCardProps) {
  const { changeCartItemQuantity, removeItemInCart } = useCart()

  function handleIncreaseQuantity() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecreaseQuantity() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveItem() {
    removeItemInCart(coffee.id)
  }

  const total = coffee.quantity * coffee.price

  const totalFormatted = formatMoney(total)

  return (
    <CoffeeCardContainer>
      <InfoContainer>
        <CoffeeThumb src={`/coffees/${coffee.photo}`} />
        <DetailsContainer>
          <CoffeeName>{coffee.name}</CoffeeName>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
              quantity={coffee.quantity}
            />
            <RemoveButton>
              <Trash size={22} />
              <RemoveButtonLabel onClick={handleRemoveItem}>
                REMOVER
              </RemoveButtonLabel>
            </RemoveButton>
          </ActionsContainer>
        </DetailsContainer>
      </InfoContainer>
      <CoffeePrice>{totalFormatted}</CoffeePrice>
    </CoffeeCardContainer>
  )
}
