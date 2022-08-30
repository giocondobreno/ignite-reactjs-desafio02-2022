import styled from 'styled-components'

export const CoffeeCardContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #c3c3c3;
  width: 100%;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`
export const CoffeeThumb = styled.img`
  width: 4rem;
  height: 4rem;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const CoffeeName = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3rem;

  display: flex;
  align-items: center;

  /* Base/Subtitle */
  color: ${(props) => props.theme.colors['base-subtitle']};
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  /* Base/Button */
  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
`

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;

  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  border: none;

  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }
`
export const RemoveButtonLabel = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.2rem;

  color: ${(props) => props.theme.colors['base-text']};
`
export const CoffeePrice = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3rem;

  display: flex;
  align-items: flex-start;
  text-align: right;

  color: ${(props) => props.theme.colors['base-text']};

  width: 4.6rem;
`
