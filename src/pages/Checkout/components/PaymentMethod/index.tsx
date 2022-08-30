import {
  PaymentMethodDescription,
  PaymentMethodError,
  PaymentMethodInput,
  PaymentMethodInputContainer,
  PaymentMethodLabel,
  PaymentMethodOptionsContainer,
} from './styles'
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { HeaderCard } from '../../../../components/Card/components/HeaderCard'
import { useTheme } from 'styled-components'
import { Card } from '../../../../components/Card'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethod() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  const { colors } = useTheme()

  return (
    <Card>
      <HeaderCard
        icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
      <PaymentMethodOptionsContainer>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentMethodInputContainer key={key}>
            <PaymentMethodInput
              id={key}
              type="radio"
              {...register('paymentMethod')}
              value={key}
            />
            <PaymentMethodLabel htmlFor={key}>
              {icon}
              <PaymentMethodDescription>
                {label.toUpperCase()}
              </PaymentMethodDescription>
            </PaymentMethodLabel>
          </PaymentMethodInputContainer>
        ))}
      </PaymentMethodOptionsContainer>
      {paymentMethodError && (
        <PaymentMethodError>{paymentMethodError}</PaymentMethodError>
      )}
    </Card>
  )
}
