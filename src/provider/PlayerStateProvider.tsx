import React, { useState, ReactNode } from 'react'
import PlayerContext from '../context/PlayerContext'

type PlayerContextProps = {
    children: ReactNode
}

export const DEFALT_VALUE = {
    playerState: {
        play: false,
        persentage: 0,
        volume: 100,
        mute: true,
        fullScreen: false,
        time: 0,
        currentTime: 0
    },
    setPlayerState: () => { },
}

const PlayerContextProvider = ({ children }: PlayerContextProps) => {
    const [playerState, setPlayerState] = useState(DEFALT_VALUE.playerState)
    return (
        < PlayerContext.Provider
            value={{ playerState, setPlayerState }}>
            {children}
        </ PlayerContext.Provider>
    )
}
export default PlayerContextProvider