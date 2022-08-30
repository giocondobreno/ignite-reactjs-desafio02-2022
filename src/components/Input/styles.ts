import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors['base-error']};
  }
`
interface InputStyleContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.input<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  display: flex;
  align-items: center;
  transition: 0.4s;
  padding: 0 0.75rem;

  color: ${({ theme }) => theme.colors['base-text']};

  &:focus {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors['base-error']};
    `}
`

export const ErrorMessage = styled.span`
  font-size: 0.9rem;
`
