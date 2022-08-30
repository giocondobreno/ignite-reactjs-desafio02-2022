import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  Tags,
  Image,
  Name,
  Description,
  Buy,
  Price,
  Actions,
  BuyButton,
  CoffeeCardContainer,
  TagDescription,
  PriceSymbol,
} from './styles'

export type Coffee = {
  id: number
  photo: string
  tags: string[]
  name: string
  description: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity((state) => state - 1)
  }

  function handleAddCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }
  const formatPrice = formatMoney(coffee.price)

  return (
    <CoffeeCardContainer>
      <Image src={`/coffees/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <TagDescription key={`${coffee.id}${tag}`}>{tag}</TagDescription>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <Buy>
        <Price>
          <PriceSymbol>R$</PriceSymbol>
          {formatPrice}
        </Price>
        <Actions>
          <QuantityInput
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
            quantity={quantity}
          />
          <BuyButton onClick={handleAddCart}>
            <ShoppingCart weight="fill" size={22} />
          </BuyButton>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  )
}
