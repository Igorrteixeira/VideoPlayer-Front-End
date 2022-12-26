import React from 'react'
import { DEFALT_VALUE } from '../provider/PlayerStateProvider'

interface Player {
    play: boolean,
    persentage: number,
    volume: number,
    mute: boolean,
    fullScreen: boolean,
    time: number,
    currentTime: number
}


type PlayerContextType = {
    playerState: Player,
    setPlayerState: (newState: Player) => void
}

const PlayerContext = React.createContext<PlayerContextType>(DEFALT_VALUE)

export default PlayerContext