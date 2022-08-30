import styled from 'styled-components'

export const PaymentMethodContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  margin-top: 0.9375rem;
  width: 40rem;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 11.2rem 11.2rem 11.2rem;
  gap: 0.75rem;
`
export const PaymentMethodInputContainer = styled.div`
  margin-top: -1.2rem;
`
export const PaymentMethodInput = styled.input`
  visibility: hidden;
  appearance: none;

  &:checked + label {
    background: ${(props) => props.theme.colors['brand-purple-light']};
    outline: 1px solid ${(props) => props.theme.colors['brand-purple']};
  }
`
export const PaymentMethodLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  border: none;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors['brand-purple-dark']};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`
export const PaymentMethodDescription = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors['base-text']};
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 1.2rem;
`
export const PaymentMethodError = styled.span`
  color: ${(props) => props.theme.colors['base-error']};
  font-weight: 400;
  margin-top: -1rem;
`
