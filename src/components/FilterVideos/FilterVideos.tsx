import React from 'react'
import * as S from "./Style"
import { Videos } from '../../data'
import CardVideo from '../CardVideo/CardVideo'
import ButtonFilter from '../ButtonFilter.tsx/ButtonFilter'

interface Props {
    videos:Videos[]
    filter:string[]
  }

const FilterVideos = (props:Props) => {
  return (
    <S.Container>
        <ButtonFilter title={props.filter}/>
        <CardVideo videos={props.videos}/>
    </S.Container>
  )
}

export default FilterVideos