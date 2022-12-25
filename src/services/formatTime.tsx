export const formatTime = (time:number) => {
    if(time){
    const minutoos =  Math.floor(time / 60) 
    const segundos = Math.floor(time % 60)
    return `${minutoos}:${String(`00${segundos}`).slice(-2)}`
    }
  }
