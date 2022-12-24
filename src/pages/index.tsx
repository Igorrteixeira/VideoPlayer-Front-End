import Home from "./Home/Home"
import GlobalStyle from "../global/globalStyle"
import styled from "styled-components"

const Container = styled.main`
  max-width: 100vw;
  max-height: 100vh;
`
export default function Index() {
  return (
    <Container>
    <GlobalStyle/>
    <Home/>
    </Container>

  )
}
