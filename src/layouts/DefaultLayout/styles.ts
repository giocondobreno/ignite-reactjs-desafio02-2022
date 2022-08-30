import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors['base-background']};
`
