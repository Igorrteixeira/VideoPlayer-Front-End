import React,{useContext,useState} from 'react'
import CardVideo from '../../components/CardVideo/CardVideo'
import PlayerVideo from '../../components/PlayerVideo/PlayerVideo'
import {Videos, videos,filter} from "../../data"
import {Container,ContainerFilter,ContainerVideo } from "./Style"
import  PlayerContext from "../../context/PlayerContext"
import  ButtonFilter  from '../../components/ButtonFilter/ButtonFilter'
import Loader from '../../components/Loader/Loader'
import CardDescriptipn from '../../components/CardDescription/CardDescriptipn'

const Home = () => {
  const {playerState, setPlayerState} = useContext(PlayerContext)
  const [video,SetVideo] = useState<Videos>({id:0,description:"",title:"",url:'',})

  return (
    <Container screen={playerState.fullScreen}>
    
    <ContainerVideo>
    <PlayerVideo
    url={video.url}
    />
    <CardDescriptipn video={video}/>
    </ContainerVideo>

   <ContainerFilter>
    <ButtonFilter
    title={filter}
    />
    {videos.map(item => {
      return <CardVideo
      video={item}
      handleClick={()=>SetVideo(item)}
      />
    })}
   </ContainerFilter>
    </Container>
      
  )
}

export default Home