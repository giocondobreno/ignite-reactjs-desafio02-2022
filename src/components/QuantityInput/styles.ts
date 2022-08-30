import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors['base-button']};
  background-color: red;
  border-radius: 10px;
`
export const ButtonCounter = styled.button.attrs({
  type: 'button',
})`
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
