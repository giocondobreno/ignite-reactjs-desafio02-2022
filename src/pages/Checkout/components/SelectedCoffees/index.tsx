import { Card } from '../../../../components/Card'
import { useCart } from '../../../../hooks/useCart'
import { OrderTotals } from '../OrderTotals'
import { SelectedCoffeeCard } from '../selectedCoffeeCard'

import { SelectedCoffeesContainer, SelectedCoffeesTitle } from './styles'

export function SelectedCoffees() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <SelectedCoffeesTitle>Cafés Selecionados</SelectedCoffeesTitle>
      <Card>
        {cartItems.map((item) => (
          <SelectedCoffeeCard key={item.id} coffee={item} />
        ))}
        <OrderTotals />
      </Card>
    </SelectedCoffeesContainer>
  )
}
