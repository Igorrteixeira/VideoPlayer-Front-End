import PageVideos from "../components/PageVideos/PageVideo"
import GlobalStyle from "../global/globalStyle"
import PlayerState from "../provider/PlayerStateProvider"

export default function Index() {
  return (
    <PlayerState>
      <GlobalStyle />
      <PageVideos/>
    </PlayerState>

  )
}
