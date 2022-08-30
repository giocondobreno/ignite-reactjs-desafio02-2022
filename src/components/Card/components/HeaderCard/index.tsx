import { ReactNode } from 'react'
import { Description, HeaderContainer, Title, TitleContainer } from './styles'

interface HeaderContainerProps {
  title: string
  description?: string
  icon?: ReactNode
}

export function HeaderCard({ title, description, icon }: HeaderContainerProps) {
  return (
    <HeaderContainer>
      {icon}
      <TitleContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleContainer>
    </HeaderContainer>
  )
}
