import styled from 'styled-components'

export const OrderTotalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`
export const Subtotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 0.5rem;
`
export const DeliveryTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const OrderTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Description = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.1375rem;

  display: flex;
  align-items: center;
  text-align: right;

  color: ${(props) => props.theme.colors['base-text']};
`
export const Value = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;

  /* identical to box height, or 21px */
  display: flex;
  align-items: center;
  text-align: right;

  /* Base/Text */
  color: ${(props) => props.theme.colors['base-text']};
`

export const LargeDescription = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.625rem;

  /* identical to box height, or 26px */
  display: flex;
  align-items: center;
  text-align: right;

  /* Base/Subtitle */
  color: ${(props) => props.theme.colors['base-subtitle']};
`
export const LargeValue = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.625rem;

  /* identical to box height, or 26px */
  display: flex;
  align-items: center;
  text-align: right;

  /* Base/Subtitle */
  color: ${(props) => props.theme.colors['base-subtitle']};
`
export const ConfirmOrderButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  /* Brand / Yellow */
  background: ${(props) => props.theme.colors['brand-yellow']};
  border-radius: 6px;
  border: none;
  width: 100%;
`
export const ConfirmOrderButtonLabel = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.4rem;

  text-transform: uppercase;
  color: ${(props) => props.theme.colors['base-white']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['brand-yellow-dark']};
  }
`
