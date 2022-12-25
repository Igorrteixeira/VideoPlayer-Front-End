import { useState, useEffect } from "react"

interface Player {
    play: boolean,
    persentage: number,
    volume: number,
    mute: boolean,
    fullScreen: boolean,
    time: number,
    currentTime: number
}

export const usePlayer = (videoRef: any) => {
    const [playerState, setPlayerState] = useState<Player>({
        play: false,
        persentage: 0,
        volume: 100,
        mute: true,
        fullScreen: false,
        time: 0,
        currentTime: 0
    })

    const changePlay = () => {
        setPlayerState({ ...playerState, play: !playerState.play })
    }

    const handleTimeUpdate = () => {
        const currentPorcentage: number = (videoRef.current.currentTime / videoRef.current.duration * 100)
        setPlayerState({ ...playerState, persentage: currentPorcentage })
    }

    const changePorcentege = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentPersentageValue: number = Number(event.target.value)
        videoRef.current.currentTime = (videoRef.current.duration / 100) * currentPersentageValue
        setPlayerState({ ...playerState, persentage: currentPersentageValue })
    }

    const handleVolumeUpdate = () => {
        const currentVolume = videoRef.current.volume * 100
        setPlayerState({ ...playerState, volume: currentVolume })
    }

    const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentPorcentageValue: number = Number(event.target.value)
        videoRef.current.volume = currentPorcentageValue / 100
        setPlayerState({ ...playerState, volume: currentPorcentageValue })
    }

    const changeMute = () => {
        setPlayerState({ ...playerState, mute: !playerState.mute })
        videoRef.current.muted = playerState.mute
    }

    const changeFullScreen = () => {
        setPlayerState({ ...playerState, fullScreen: !playerState.fullScreen })
        if (!playerState.fullScreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    const changePlayBack = (event: React.ChangeEvent<HTMLSelectElement>) => {
        videoRef.current.playbackRate = event.target.value
    }

    useEffect(() => {
        playerState.play ? videoRef.current.play() :
            videoRef.current.pause()
    }, [playerState.play])

    useEffect(() => {
        setPlayerState({
            ...playerState,
            time: videoRef.current.duration,
            currentTime: videoRef.current.currentTime
        })
    }, [videoRef?.current?.currentTime])

    return {
        playerState,
        changePlay,
        handleTimeUpdate,
        changePorcentege,
        handleVolumeUpdate,
        changeVolume,
        changeMute,
        changeFullScreen,
        changePlayBack
    }

}




