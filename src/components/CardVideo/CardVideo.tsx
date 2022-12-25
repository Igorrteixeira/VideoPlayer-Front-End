import React , { useRef } from 'react'
import { formatTime } from '../../services/formatTime'
import * as S from './Style'

const CardVideo = () => {
  const videoRef = useRef<any>()
  return (
    <S.Container>
    
      <S.Video 
      ref={videoRef}
      src="https://storage.googleapis.com/future-apis.appspot.com/1.mp4"
      />
      <S.Time>{formatTime(Number(videoRef?.current?.duration))}</S.Time>
      <S.Content>
      <S.Description>defergr</S.Description>
      <S.Title>title</S.Title>
      </S.Content>

    </S.Container>
  )
}

export default CardVideo