"use client"
import React, { useEffect, useState, useRef } from 'react'

type Props = {
    muted: boolean;
}


const Sound = ({ muted }: Props) => {

    const [muteds, setMuted] = useState(muted)

    const audio = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio("/mp3/award.mp3") : undefined
      );

    useEffect(() => {

        if (muteds) {
            audio.current?.play();
        } else {
            audio.current?.pause();
        }

        console.log(muted)

    }, [muteds])
    

    return (
        <div>
            {
                muted ? (
                    <div>   
                        {/* <div className='test-[50px]'>
                            test
                        </div> */}
                    </div>
                ) : (
                    <div>
                        {/* <audio src="/mp3/award.mp3" loop autoPlay/> */}
                    </div>
                )
            }
        </div>
    )
}

export default Sound