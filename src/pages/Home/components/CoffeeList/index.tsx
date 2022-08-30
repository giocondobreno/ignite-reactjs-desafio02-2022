import { coffees } from '../../../../mocks/Coffes'
import { CoffeeCard } from '../CoffeeCard'
import { Coffees, CoffeeListContainer, TitleContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <TitleContainer>Nossos Cafés</TitleContainer>
      <Coffees>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </Coffees>
    </CoffeeListContainer>
  )
}
