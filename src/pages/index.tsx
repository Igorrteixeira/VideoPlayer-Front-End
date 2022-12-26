import Home from "./Home/Home"
import GlobalStyle from "../global/globalStyle"
import PlayerState from "../provider/PlayerStateProvider"

export default function Index() {
  return (
    <PlayerState>
      <GlobalStyle />
      <Home />
    </PlayerState>

  )
}
