import React, { useState, useRef, useEffect } from 'react'
import { formatTime } from "../../services/formatTime"
import * as S from "./Style"
import { BiVolumeFull } from "react-icons/bi"
import { FaPlay, FaPause } from "react-icons/fa"
import {BiFullscreen,BiVolumeMute} from "react-icons/bi"
import { moveCursor } from 'readline'

const videoUrl = "https://storage.googleapis.com/future-apis.appspot.com/1.mp4"

const usePlayer = (videoRef: any) => {
  const [play, setPlay] = useState<boolean>(false)
  const [persentage, setPersentage] = useState<number>(0)
  const [volume, setVolume] = useState(100)
  const [mute,SetMute] = useState<boolean>(true)
  const [fullScreen,SetFullScreen] = useState<boolean>(false)
  const [time, setTime] = useState({
    time: 0,
    currentTime: 0
  })
  // play pause
  const changePlay = () => {
    setPlay(!play)
  }
  // altera a bara de duração
  const handleTimeUpdate = () => {
    const currentPorcentage = (videoRef.current.currentTime / videoRef.current.duration * 100)
    setPersentage(currentPorcentage)
  }
  // altera a porcentagem
  const changePorcentege = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentPersentageValue: number = Number(event.target.value)
    videoRef.current.currentTime = (videoRef.current.duration / 100) * currentPersentageValue
    setPersentage(currentPersentageValue)
  }
  // VELOCIDADE DE EXECUÇÃO
  const changePlayBack = (event: React.ChangeEvent<HTMLSelectElement>) => {
    videoRef.current.playbackRate = event.target.value
  }

  // PERMITE ALTERAR A BARRA DE VOLUME

  const handleVolumeUpdate = () => {
    const currentVolume = videoRef.current.volume * 100
    setVolume(currentVolume)
  }
  // MOSTRA ALTERAÇÃO DO VOLUME
  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, videoRef.current.volume)
    const currentPorcentageValue: number = Number(event.target.value)
    videoRef.current.volume = currentPorcentageValue / 100
    setVolume(Number(event.target.value))
  }

  const ChangeMute = () => {
    SetMute(!mute)
    videoRef.current.muted = mute
  }


  const  toggleFullScreen = () => {
      SetFullScreen(!fullScreen)
    if (!fullScreen) { 
        document.documentElement.requestFullscreen();
    }else {  
        document.exitFullscreen();
    }
  }

  useEffect(() => {
    play ? videoRef.current.play() :
      videoRef.current.pause()
  }, [play])

  useEffect(() => {
    setTime({
      time: videoRef.current.duration,
      currentTime: videoRef.current.currentTime
    })
  }, [videoRef?.current?.currentTime])

  return { changePlay, play, handleTimeUpdate, persentage, changePorcentege, changePlayBack, volume, changeVolume, handleVolumeUpdate, time ,ChangeMute,mute,toggleFullScreen}
}


const PlayerVideo = () => {

  const videoRef = useRef<any>()
  // console.log(videoRef.current.duration,videoRef.current.currentTime)
   
  const { changePlay, play, handleTimeUpdate, persentage, changePorcentege, changePlayBack, changeVolume, volume, handleVolumeUpdate, time,ChangeMute,mute,toggleFullScreen} = usePlayer(videoRef)


  return (
    <S.ContainerVideo>
      <S.Video
        ref={videoRef}
        src={videoUrl}
        onTimeUpdate={handleTimeUpdate}
        onVolumeChange={handleVolumeUpdate}
        
      />
      <S.Controls className='controls'>

      <S.ProgressBar
          name='persentage'
          type="range"
          min={0}
          max={100}
          value={persentage}
          onChange={changePorcentege}
        />


        <S.ContButtons>
        <S.PlayButton
          onClick={() => changePlay()}>
          {play ? <FaPause size={"25px"} /> : <FaPlay size={"25px"} />}
        </S.PlayButton>

        <S.Volume >
          {mute ?  
          <BiVolumeFull size={"25px"} 
          className="icon-volume"
          onClick={()=>ChangeMute()}
          />:
          <BiVolumeMute size={"25px"} 
          onClick={()=>ChangeMute()}
          />
        }
        
          <S.VolumeBar
            id="bar-volume"
            name='volume'
            type="range"
            min={0}
            max={100}
            // step={0.1}
            value={volume}
            onChange={changeVolume}
          />
            <S.TimeVideo>
          {formatTime(time.currentTime)}/{formatTime(time.time)}
        </S.TimeVideo>
        </S.Volume>


      


      
        
        <S.Speed name="speed" id="speed" onChange={changePlayBack}>
          {[1, 2, 3].map(speed =>
            <option
              key={speed}
              value={speed}>
              {speed}</option>
          )}
        </S.Speed>

        <S.FullScreenButton onClick={()=>toggleFullScreen()}>
          <BiFullscreen size={"25px"}/>
        </S.FullScreenButton>

        </S.ContButtons>
      </S.Controls>
    </S.ContainerVideo>
  )
}

export default PlayerVideo