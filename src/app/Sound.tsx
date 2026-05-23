"use client"
import { useEffect, useRef } from 'react'

type Props = {
    muted: boolean;
}

const Sound = ({ muted }: Props) => {

    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (typeof Audio === "undefined") return

        if (!audioRef.current) {
            const a = new Audio("/mp3/award.mp3")
            a.loop = true
            audioRef.current = a
        }

        const audio = audioRef.current

        // prop semantics kept from original: muted=true -> play, muted=false -> pause
        if (!muted) {
            audio.pause()
            return
        }

        const start = () => {
            audio.play().catch(() => {})
            window.removeEventListener("pointerdown", start)
            window.removeEventListener("keydown", start)
            window.removeEventListener("touchstart", start)
        }

        // Try to autoplay; if the browser blocks it, start on the first user interaction.
        audio.play().catch(() => {
            window.addEventListener("pointerdown", start)
            window.addEventListener("keydown", start)
            window.addEventListener("touchstart", start)
        })

        return () => {
            window.removeEventListener("pointerdown", start)
            window.removeEventListener("keydown", start)
            window.removeEventListener("touchstart", start)
        }
    }, [muted])

    return null
}

export default Sound
