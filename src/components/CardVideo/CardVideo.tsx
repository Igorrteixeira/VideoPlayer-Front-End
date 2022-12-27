import React, { useRef } from 'react'
import { formatTime } from '../../services/formatTime'
import { Videos } from '../../data'
import * as S from './Style'

export interface PropsCardVideo {
  video: Videos
  handleClick: () => void
}

const CardVideo = (props: PropsCardVideo) => {
  const { id, title, url, description } = props.video
  const videoRef = useRef<any>()
  return (
    <S.Container key={id}>
      
      <S.Video onClick={props.handleClick}
        ref={videoRef}
        src={url}
      />
      <S.Time>{formatTime(Number(videoRef?.current?.duration))}</S.Time>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

      </S.Content>
    </S.Container>
  )
}

export default CardVideo