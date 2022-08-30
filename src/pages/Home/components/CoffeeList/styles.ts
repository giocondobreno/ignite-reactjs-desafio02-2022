import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  padding: 0 10rem;
`
export const TitleContainer = styled.h2`
  margin-top: 2rem;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.6rem;
`
export const Coffees = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 1.5rem;
  column-gap: 2rem;
  flex-wrap: wrap;

  margin: 2rem 0 9.8125rem 0;
`
