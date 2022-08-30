import { MapPin } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import Input from '../../../../components/Input/Input'
import { HeaderCard } from '../../../../components/Card/components/HeaderCard'

import { DeliveryAddressFormContainer } from './styles'
import { Card } from '../../../../components/Card'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function DeliveryAddress() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <Card>
      <HeaderCard
        icon={<MapPin size={22} />}
        title="Endereço de Entrega"
        description="Informe o endereço onde deseja receber seu pedido"
      />

      <DeliveryAddressFormContainer>
        <Input
          type="text"
          placeholder="CEP"
          className="cep"
          {...register('cep')}
          error={errors.cep?.message}
        />
        <Input
          type="text"
          placeholder="Rua"
          className="street"
          {...register('street')}
          error={errors.street?.message}
        />

        <Input
          type="text"
          placeholder="Número"
          {...register('number')}
          error={errors.number?.message}
        />
        <Input
          type="text"
          placeholder="Complemento (Opcional)"
          className="complement"
          {...register('complement')}
          error={errors.complement?.message}
        />

        <Input
          type="text"
          placeholder="Bairro"
          {...register('district')}
          error={errors.district?.message}
        />
        <Input
          type="text"
          placeholder="Cidade"
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          type="text"
          placeholder="UF"
          {...register('postalCode')}
          error={errors.postalCode?.message}
        />
      </DeliveryAddressFormContainer>
    </Card>
  )
}
