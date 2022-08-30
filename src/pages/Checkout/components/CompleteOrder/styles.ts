import styled from 'styled-components'

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CompleteOrderTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.title};
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.4625rem;
`
