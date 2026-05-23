"use client"

import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";
import useSound from 'use-sound';
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";


const ButtonClick = () => {
    const router = useRouter();
    const [play] = useSound('/mp3/click.mp3');


    const BackClick = () => {
        play()
        router.back()
    }
    const BackHome = () => {
        play()
        // router.push("/central-beuaty-award")
        // router.redire
        // redirect(`https://ide.creaive.ai/nisa_central`)
        window.location.href = `https://ide.creaive.ai/nisa_central`
    }


    return (
        <div className="justify-around hv:justify-start flex hv:flex-none hv:ml-[100px] gap-4"> 
            <MdOutlineArrowBack
                size={80}
                onClick={BackClick}
                color="#e4c7ad"
                className=" border-2 border-[#e4c7ad] rounded-[100px]"
            />
            {/* <MdHome
                size={80}
                onClick={BackHome}
                color="#e4c7ad"
                className=" border-2 border-[#e4c7ad] rounded-[100px]"
            /> */}
        </div>
    )
}

export default ButtonClick