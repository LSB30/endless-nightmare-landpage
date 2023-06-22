import { Container, Title, ContainerBtn } from "./styles"
import Btn from "../Button"

export default function Home () {
  return (
    <Container>
      <p>the <span>horror game</span> of the year</p>
      <Title>
        <h1>ENDLESS NIGHTMARE</h1>
      </Title>

      <p>You need to find the way out or your night will never end!</p>
      
      <ContainerBtn>
        <p>READ MORE</p>
        <Btn
        title= "PLAY NOW"
        />
      </ContainerBtn>
      
    </Container>
  )
}