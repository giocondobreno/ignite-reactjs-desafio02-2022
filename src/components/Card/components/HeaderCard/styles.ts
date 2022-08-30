import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }
`
export const TitleContainer = styled.div``
export const Title = styled.h3`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3rem;
`
export const Description = styled.h4`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors['base-text']};
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.1375rem;
  margin-top: 0.125rem;
  display: flex;
  align-items: center;
`
