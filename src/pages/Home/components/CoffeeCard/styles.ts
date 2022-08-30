import styled from 'styled-components'

export const CoffeeCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  margin-top: 3.375rem;
  padding: 0 0.1rem 1.5rem 0.1rem;
`

export const Image = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -2rem;
  border: none;
  border-radius: 50%;
`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 0.35rem;
  column-gap: 0.25rem;
  margin: 0.75rem;
`
export const TagDescription = styled.span`
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme.colors['brand-yellow-light']};
  color: ${(props) => props.theme.colors['brand-yellow-dark']};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.textSizes['text-bold-s']};
  font-weight: 600;
  text-transform: uppercase;
`

export const Name = styled.span`
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-family: ${(props) => props.theme.fonts.title};
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3rem;
  margin-top: 0.8rem;
`

export const Description = styled.span`
  color: ${(props) => props.theme.colors['base-label']};
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 0.87rem;
  line-height: 1.3rem;
  margin-top: 0.5rem;
  text-align: center;
  padding: 0 1.25rem;
`

export const Buy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.2rem;
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 0.08rem;
  font-weight: 800;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors['base-text']};
  font-family: ${(props) => props.theme.fonts.title};
  flex: 0;
`
export const PriceSymbol = styled.span`
  color: ${(props) => props.theme.colors['base-text']};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 0.65rem;
`
export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.5rem;
`

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors['base-button']};
  background-color: red;
  border-radius: 10px;
`
export const ButtonCounter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0.4rem;
  width: 2rem;
  color: ${(props) => props.theme.colors['brand-purple-dark']};
  background-color: ${(props) => props.theme.colors['base-button']};
  font-family: ${(props) => props.theme.fonts.regular};

  font-size: 1.2rem;
`
export const Quantity = styled.input`
  width: 2.5rem;
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.colors['base-button']};
`

export const BuyButton = styled.button`
  padding: 0.4rem;
  background-color: ${(props) => props.theme.colors['brand-purple-dark']};
  border-radius: 5px;
  border: none;

  svg {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors['base-white']};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['brand-purple']};
  }
`
