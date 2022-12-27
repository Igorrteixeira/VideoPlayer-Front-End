import * as S from './Style'
import React, { useContext, useState } from 'react'
import { Videos, videos, listFilter } from "../../data"
import CardVideo from '../../components/CardVideo/CardVideo'
import PlayerVideo from '../../components/PlayerVideo/PlayerVideo'
import PlayerContext from "../../context/PlayerContext"
import ButtonFilter from '../../components/ButtonFilter/ButtonFilter'
import CardDescriptipn from '../../components/CardDescription/CardDescriptipn'

const Home = () => {
  const { playerState, setPlayerState } = useContext(PlayerContext)
  const [video, SetVideo] = useState<Videos>({ id: 0, description: '', category: '', title: '', url: '', })
  const [filter, setFilter] = useState<string>("Todos")

  return (
    <S.Container screen={playerState.fullScreen}>
      <S.ContainerVideo>
        <PlayerVideo
          url={video.url}
        />
        <CardDescriptipn
          video={video}
        />
      </S.ContainerVideo>

      <S.ContainerFilter>

        <S.ListFilter>
          {listFilter.map(item => {
            return <ButtonFilter key={item}
              handleClick={() => setFilter(item)}
              title={item} />
          })}
        </S.ListFilter>

        {videos.map((item,index) => {
          if (filter === "Todos" || item.category === filter) {
            return <CardVideo key={index}
              video={item}
              handleClick={() => SetVideo(item)}
            />
          }
        })}
      </S.ContainerFilter>
    </S.Container>

  )
}

export default Home