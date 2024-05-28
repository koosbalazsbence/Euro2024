import React, { useEffect, useRef } from "react"
import fire from "../../assets/Fire.mp3"

const MusicPlayer = () => {
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }, [])

  return (
    <div>
      <audio ref={audioRef} src={fire} loop />
    </div>
  )
}

export default MusicPlayer
