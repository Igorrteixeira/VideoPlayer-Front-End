import React from 'react'
import CardVideo from '../../components/CardVideo/CardVideo'
import FilterVideos from '../../components/FilterVideos/FilterVideos'
import PlayerVideo from '../../components/PlayerVideo/PlayerVideo'
import {Videos, videos,filter} from "../../data"

const Home = () => {

  return (
    <div>
      <PlayerVideo/>
      <FilterVideos
      videos={videos}
      filter={filter}
      />
    </div>
  )
}

export default Home