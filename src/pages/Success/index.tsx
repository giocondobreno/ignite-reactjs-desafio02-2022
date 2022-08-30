import { OrderSummary } from './components/OrderSummary'
import { SuccessContainer, SuccessImage } from './Styles'
import image from '../../assets/images/Success.svg'

export function SuccessPage() {
  return (
    <SuccessContainer>
      <OrderSummary />
      <SuccessImage src={image} alt="" />
    </SuccessContainer>
  )
}
