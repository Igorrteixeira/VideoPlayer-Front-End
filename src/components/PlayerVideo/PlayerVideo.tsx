import React, { useRef,useEffect,useContext} from 'react'
import * as S from "./Style"
import { formatTime } from "../../services/formatTime"
import { FaPlay, FaPause } from "react-icons/fa"
import { BiFullscreen, BiVolumeMute, BiVolumeFull } from "react-icons/bi"
import { usePlayer } from '../../hooks/usePlayer'
import  PlayerContext from "../../context/PlayerContext"

interface Props {
  url:string
}

const PlayerVideo = (props:Props) => {
  
  const {playerState, setPlayerState} = useContext(PlayerContext)
  let videoRef = useRef<any>()

  const { changePlay,
    handleTimeUpdate,
    changePorcentege,
    changePlayBack,
    changeVolume,
    handleVolumeUpdate,
    changeMute,
    changeFullScreen } = usePlayer(videoRef,props.url)

  return (
    <S.ContainerVideo screen={playerState.fullScreen}>
      <S.Video
        ref={videoRef}
        src={props.url}
        onTimeUpdate={handleTimeUpdate}
        onVolumeChange={handleVolumeUpdate}
        autoPlay     
      />

      <S.Controls display={playerState.play} className='controls' >
        <S.ProgressBar
          name='persentage'
          type="range"
          min={0}
          max={100}
          value={playerState.persentage}
          onChange={changePorcentege}
        />
        <S.ContButtons>
          <S.ButtonsLeft >
            <S.PlayButton
              onClick={() => changePlay()}>
              {playerState.play ? <FaPause size={"25px"} /> : <FaPlay size={"25px"} />}
            </S.PlayButton>

            <S.Volume >
              {!playerState.mute || playerState.volume === 0 ? 
                <BiVolumeMute  size={"25px"}
                  className="icon-volume"
                  onClick={() => changeMute()}
                /> :
                <BiVolumeFull size={"25px"}
                  onClick={() => changeMute()}
                />
              }
              <S.VolumeBar
                id="bar-volume"
                name='volume'
                type="range"
                min={0}
                max={100}
                value={playerState.volume}
                onChange={changeVolume}
              />
            </S.Volume>

            <S.TimeVideo>
              {formatTime(playerState.currentTime)} {"/" +formatTime(playerState.time)}
            </S.TimeVideo>
          </S.ButtonsLeft>

          <S.ButtonsRigth>
            <S.Speed name="speed" id="speed" onChange={changePlayBack}>
              {[1, 1.25, 1.50, 1.75, 2].map(speed =>
                <option
                  key={speed}
                  value={speed}>
                  {speed}</option>
              )}
            </S.Speed>
            <S.FullScreenButton onClick={() => changeFullScreen()}>
              <BiFullscreen size={"25px"} />
            </S.FullScreenButton>
          </S.ButtonsRigth>

        </S.ContButtons>
      </S.Controls>
    </S.ContainerVideo>
  )
}

export default PlayerVideo