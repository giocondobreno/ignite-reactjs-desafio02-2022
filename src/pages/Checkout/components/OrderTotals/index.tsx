import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {} from '../SelectedCoffees/styles'
import {
  ConfirmOrderButton,
  ConfirmOrderButtonLabel,
  DeliveryTotal,
  Description,
  LargeDescription,
  LargeValue,
  OrderTotal,
  OrderTotalsContainer,
  Subtotal,
  Value,
} from './styles'

const TOTAL_DELIVERY = 3.5

export function OrderTotals() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const totalOrder = cartItemsTotal + TOTAL_DELIVERY

  const cartItemsTotalFormatted = formatMoney(cartItemsTotal)
  const totalDeliveryFormatted = formatMoney(TOTAL_DELIVERY)
  const totalOrderFormatted = formatMoney(totalOrder)

  const isEmptyCart = cartQuantity === 0

  return (
    <OrderTotalsContainer>
      <Subtotal>
        <Description>Total de Itens</Description>
        <Value>{cartItemsTotalFormatted}</Value>
      </Subtotal>
      <DeliveryTotal>
        <Description>Entrega</Description>
        <Value>{totalDeliveryFormatted}</Value>
      </DeliveryTotal>
      <OrderTotal>
        <LargeDescription>Total</LargeDescription>
        <LargeValue>{totalOrderFormatted}</LargeValue>
      </OrderTotal>

      <ConfirmOrderButton disabled={isEmptyCart} type="submit">
        <ConfirmOrderButtonLabel>CONFIRMAR PEDIDO</ConfirmOrderButtonLabel>
      </ConfirmOrderButton>
    </OrderTotalsContainer>
  )
}
