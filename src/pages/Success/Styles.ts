import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 6.375rem;
  padding: 14.75rem 0 14.75rem 0;
  background-color: ${(props) => props.theme.colors['base-gray']};
`
export const SuccessImage = styled.img`
  width: 30.75rem;
  height: 18.3125rem;
`
