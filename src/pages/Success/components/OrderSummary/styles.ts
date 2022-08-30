import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const OrderSummaryTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const OrderSummaryTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.title};
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 1.3rem;

  color: ${(props) => props.theme.colors['brand-yellow-dark']};
`

export const OrderSummarySubtitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;

  color: ${(props) => props.theme.colors['base-subtitle']};
  font-stretch: 100;
`
export const OrderSummaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme.colors['brand-purple-dark']};
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;
`
export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  color: ${(props) => props.theme.colors['base-white']};
`

export const AddressIcon = styled(Icon)`
  background: ${(props) => props.theme.colors['brand-purple']};
`
export const DeliveryIcon = styled(Icon)`
  background: ${(props) => props.theme.colors['brand-yellow']};
`
export const PaymentIcon = styled(Icon)`
  background: ${(props) => props.theme.colors['brand-yellow-dark']};
`

export const Info = styled.p`
  line-height: 1.4rem;
`
