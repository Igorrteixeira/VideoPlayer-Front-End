import PageVideos from "../components/PageVideos/PageVideo"
import PlayerState from "../provider/PlayerStateProvider"

export default function Index() {
  return (
    <PlayerState>
      <PageVideos />
    </PlayerState>
  )
}
