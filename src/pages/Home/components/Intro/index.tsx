import {
  IntroContainer,
  IntroImage,
  TitleContainer,
  Item,
  ContentContainer,
  Title,
  Subtitle,
  ItemDescription,
  BenefitsContainer,
  ItemIconContainer,
} from './styles'
import image from '../../../../assets/images/introduction.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <ContentContainer>
        <TitleContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </TitleContainer>
        <BenefitsContainer>
          <Item>
            <ItemIconContainer variant="yellow-dark">
              <ShoppingCart weight="fill" size={16} />
            </ItemIconContainer>
            <ItemDescription>Compra simples e segura</ItemDescription>
          </Item>
          <Item>
            <ItemIconContainer variant="gray">
              <Timer weight="fill" size={16} />
            </ItemIconContainer>
            <ItemDescription>Embalagem mantém o café intacto</ItemDescription>
          </Item>
          <Item>
            <ItemIconContainer variant="yellow">
              <Package weight="fill" size={16} />
            </ItemIconContainer>
            <ItemDescription>Entrega rápida e rastreada</ItemDescription>
          </Item>
          <Item>
            <ItemIconContainer variant="purple">
              <Coffee weight="fill" size={16} />
            </ItemIconContainer>
            <ItemDescription>O café chega fresquinho até você</ItemDescription>
          </Item>
        </BenefitsContainer>
      </ContentContainer>
      <IntroImage src={image} alt=""></IntroImage>
    </IntroContainer>
  )
}
