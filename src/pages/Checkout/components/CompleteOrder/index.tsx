import { DeliveryAddress } from '../DeliveryAddress'
import { PaymentMethod } from '../PaymentMethod'
import { CompleteOrderContainer, CompleteOrderTitle } from './styles'

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <CompleteOrderTitle>Complete seu pedido</CompleteOrderTitle>
      <DeliveryAddress />
      <PaymentMethod />
    </CompleteOrderContainer>
  )
}
