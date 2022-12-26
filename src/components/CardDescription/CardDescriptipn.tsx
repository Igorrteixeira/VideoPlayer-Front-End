import React from 'react'
import { Videos } from '../../data'
import * as S from './Style'

interface Props {
    video:Videos
}

const CardDescriptipn = (props:Props) => {
    const {title,description,id} = props.video
  return (
    <S.Container>
        <S.Title>{title}</S.Title>
        <S.Content>
            <S.Description>
                {description}
            </S.Description>
        </S.Content>
    </S.Container>
  )
}

export default CardDescriptipn