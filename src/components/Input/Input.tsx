import { forwardRef, InputHTMLAttributes } from 'react'

import { ErrorMessage, InputStyleContainer, InputWrapper } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

// eslint-disable-next-line react/display-name
export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { error, className, ...props },
  ref,
) {
  return (
    <InputWrapper className={className}>
      <InputStyleContainer {...props} ref={ref} hasError={!!error} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  )
})
