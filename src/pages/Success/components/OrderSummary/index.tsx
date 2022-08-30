import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../../../Checkout'
import { paymentMethods } from '../../../Checkout/components/PaymentMethod'
import {
  AddressIcon,
  DeliveryIcon,
  DescriptionContainer,
  Info,
  OrderSummaryContainer,
  OrderSummaryInfoContainer,
  OrderSummarySubtitle,
  OrderSummaryTitle,
  OrderSummaryTitleContainer,
  PaymentIcon,
} from './styles'

interface LocationType {
  state: OrderData
}

export function OrderSummary() {
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <OrderSummaryContainer>
      <OrderSummaryTitleContainer>
        <OrderSummaryTitle>Uhu! Pedido confirmado</OrderSummaryTitle>
        <OrderSummarySubtitle>
          Agora é só aguardar que logo o café chegará até você
        </OrderSummarySubtitle>
      </OrderSummaryTitleContainer>

      <OrderSummaryInfoContainer>
        <DescriptionContainer>
          <AddressIcon>
            <MapPin weight="fill" size={16} />
          </AddressIcon>
          <Info>
            Entrega em <strong>{state.street}</strong>, {state.number}
            <br />
            {state.district} - {state.city}, {state.postalCode}
          </Info>
        </DescriptionContainer>

        <DescriptionContainer>
          <DeliveryIcon>
            <Timer weight="fill" size={16} />
          </DeliveryIcon>
          <Info>
            Previsão de entrega
            <br />
            <strong>20 min - 30 min</strong>
          </Info>
        </DescriptionContainer>

        <DescriptionContainer>
          <PaymentIcon>
            <CurrencyDollar weight="fill" size={16} />
          </PaymentIcon>
          <Info>
            Pagamento na entrega
            <br />
            <strong>{paymentMethods[state.paymentMethod].label}</strong>
          </Info>
        </DescriptionContainer>
      </OrderSummaryInfoContainer>
    </OrderSummaryContainer>
  )
}
