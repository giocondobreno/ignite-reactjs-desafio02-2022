import styled from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/default'
import introBackground from '../../../../assets/images/intro-background.svg'
export const IntroContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  margin: 5.875rem 0 5.875rem 0;

  background-image: ${() => `url(${introBackground})`};
  background-size: contain;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  width: 36.75rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Title = styled.h1`
  color: ${(props) => props.theme.colors['base-title']};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.textSizes['title-title-xl']};
  font-weight: 800;
  line-height: 3.9rem;
`
export const Subtitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: 400;
  font-size: ${(props) => props.theme.textSizes['text-regular-l']};
  line-height: 1.625rem;
`

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 1.25rem;
  width: 35.43rem;
`
interface ItemVariantProps {
  variant: 'yellow-dark' | 'yellow' | 'gray' | 'purple'
}

const itemVariants = {
  'yellow-dark': defaultTheme.colors['brand-yellow-dark'],
  yellow: defaultTheme.colors['brand-yellow'],
  gray: defaultTheme.colors['base-text'],
  purple: defaultTheme.colors['brand-purple'],
}

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 17rem;
  gap: 0.75rem;
`
export const ItemIconContainer = styled.div<ItemVariantProps>`
  padding: 0.5rem;
  background-color: ${(props) => itemVariants[props.variant]};
  border-radius: 50%;
  svg {
    display: flex;
    flex-direction: row;
    color: ${(props) => props.theme.colors['base-white']};
  }
`
export const ItemDescription = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors['base-text']};
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.3rem;
`

export const IntroImage = styled.img`
  width: 29.75rem;
`
