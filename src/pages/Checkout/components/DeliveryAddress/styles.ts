import styled from 'styled-components'

export const DeliveryAddressContainer = styled.article`
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
export const DeliveryAddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-auto-flow: dense;
  gap: 1rem;
  grid-auto-flow: dense;

  color: red;
  font-weight: 400;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`
