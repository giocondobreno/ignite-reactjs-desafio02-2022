import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'
import { HomePageContainer } from './syles'

export function HomePage() {
  return (
    <HomePageContainer>
      <Intro />
      <CoffeeList />
    </HomePageContainer>
  )
}
