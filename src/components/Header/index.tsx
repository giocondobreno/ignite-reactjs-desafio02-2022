import {
  Logo,
  NavBar,
  Actions,
  LocationButton,
  CartButton,
  Badge,
} from './styles'
import logoCoffeeDelivery from '../../assets/images/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <NavBar>
      <NavLink to="/">
        <Logo src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <Actions>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationButton>

        <NavLink to="/checkout">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            {cartQuantity > 0 && (
              <Badge>
                <span>{cartQuantity}</span>
              </Badge>
            )}
          </CartButton>
        </NavLink>
      </Actions>
    </NavBar>
  )
}
