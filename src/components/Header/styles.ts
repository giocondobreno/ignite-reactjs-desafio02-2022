import styled from 'styled-components'

export const NavBar = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90rem;
  height: 6.5rem;
  padding: 2rem 10rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  background: ${(props) => props.theme.colors['base-background']};
`

export const Logo = styled.img`
  width: 5.28rem;
  height: 2.5rem;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  width: 14rem;
`

/* interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
} */

export const BaseActionButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 6px;
  border: none;
`
export const LocationButton = styled(BaseActionButton)`
  background: ${(props) => props.theme.colors[`brand-purple-light`]};

  span {
    color: ${(props) => props.theme.colors[`brand-purple-dark`]};
    font-weight: 400;
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    line-height: 1.13rem;
    font-family: ${(props) => props.theme.fonts.regular};
  }

  svg {
    color: ${(props) => props.theme.colors[`brand-purple-dark`]};
  }
`

export const CartButton = styled(BaseActionButton)`
  background: ${(props) => props.theme.colors[`brand-yellow-light`]};
  color: ${(props) => props.theme.colors[`brand-yellow-dark`]};

  position: relative;

  span {
    background: ${(props) => props.theme.colors[`brand-yellow-dark`]};
  }

  svg {
    color: ${(props) => props.theme.colors[`brand-yellow-dark`]};
  }
`
interface BadgeProps {
  show?: boolean
}

export const Badge = styled.div<BadgeProps>`
  background: ${(props) => props.theme.colors['brand-yellow-dark']};
  border-radius: 50%;

  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  right: calc(-1.25rem / 2);
  top: calc(-1.25rem / 2);

  span {
    font-family: ${(props) => props.theme.fonts.regular};
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 0.975rem;

    color: ${(props) => props.theme.colors['base-white']};

    text-align: center;
    letter-spacing: -0.06em;
  }
`
