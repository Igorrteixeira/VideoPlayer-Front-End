import React , { useRef } from 'react'
import { Videos } from '../../data'
import { formatTime } from '../../services/formatTime'
import * as S from './Style'

interface Props {
  videos:Videos[]
}

const CardVideo = (props:Props) => {
  const videoRef = useRef<any>()
  return (
    <>
    {props.videos.map(video =>{
      return (
    <S.Container  key={video.id}>
      <S.Video 
      ref={videoRef}
      src={video.url}
      />
      <S.Time>{formatTime(Number(videoRef?.current?.duration))}</S.Time>
      <S.Content>
      <S.Description>{video.description}</S.Description>
      <S.Title>{video.title}</S.Title>
      </S.Content>

    </S.Container>
      )
    })
    }
    </>
  )
}

export default CardVideo