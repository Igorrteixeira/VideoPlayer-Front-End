import { useEffect, useContext } from "react"
import PlayerContext from "../context/PlayerContext"

const usePlayer = (videoRef: any, url: string) => {

    const { playerState, setPlayerState } = useContext(PlayerContext)

    const changePlay = () => {
        setPlayerState({ ...playerState, play: !playerState.play })
        if (playerState.play) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }

    }

    const handleTimeUpdate = () => {
        const currentPorcentage: number = (videoRef.current.currentTime / videoRef.current.duration * 100)
        setPlayerState({ ...playerState, persentage: currentPorcentage })
        setPlayerState({
            ...playerState,
            time: videoRef.current.duration,
            currentTime: videoRef.current.currentTime
        })
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
        setPlayerState({ ...playerState, mute: !playerState.mute, })
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
        setPlayerState({
            play: false,
            persentage: 0,
            volume: 100,
            mute: true,
            fullScreen: false,
            time: 0,
            currentTime: 0
        })
    }, [url])

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

export default usePlayer



