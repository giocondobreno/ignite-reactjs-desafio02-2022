import styled from 'styled-components'

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.3rem;
  gap: 1.5rem;
  margin-top: 0.9375rem;
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};

  border-radius: 6px 44px;
`
export const SelectedCoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.3rem;
  gap: 1.5rem;
  margin: 0.9375rem 0 2rem 0;

  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 44px;

  overflow: scroll;
  max-height: 21.4rem;
`
