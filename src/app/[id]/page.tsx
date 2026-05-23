"use client";

import React, { useEffect, useRef, useState } from "react";
import useSound from 'use-sound';
// import ButtonClick from '@/app/central-beuaty-award/utils'
// import { useAppSelector, useAppDispatch, useAppStore } from '../../lib/hook'
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
// <!-- COLORS -->
// <!-- # -->
// <!-- #e4c7ad -->
// <!-- #dcbb9a -->
// <!-- #b18b68 -->

const CentralBeuatyAward = ({ params }: { params: { id: string } }) => {
  const [isTouch, setIstouch] = useState(false);

  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const CliclHandler = () => {
    setIstouch(!isTouch);
  };

  const router = useRouter();
  const [play] = useSound('/mp3/click.mp3');


  const BackClick = () => {
    play()
    router.back()
  }
  const BackHome = async () => {
    play()
    // window.location.href = `https://ide.creaive.ai/nisa_central`

    await fetch(
      "https://app.promptdue.com/newDisPlay/update",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user_id: params.id,
          type_play: 'Nisa-Central-Beuaty-Award',
        }),
      });

    // console.log(params.id)
  }


  useEffect(() => {
    // function handleContextMenu(e: { preventDefault: () => void; }) {
    //   e.preventDefault(); // prevents the default right-click menu from appearing
    // }
    // const rootElement = (document.getElementById('my-component') as HTMLFormElement);
    // rootElement.addEventListener('contextmenu', handleContextMenu);


    const heightx = window.innerHeight
    const widthx = window.innerWidth

    setHeight(heightx)
    setWidth(widthx)

    if (isTouch) {
      setTimeout(() => {
        setIstouch(!isTouch)
      }, 30000)
    }

    // return () => {
    //   rootElement.removeEventListener('contextmenu', handleContextMenu);
    // };
  }, [isTouch]);

  return (
    <div
    // id="my-component" 
    // onContextMenu={(e) => {
    //   e.preventDefault()
    // }}
    >


      {/* {params.id} */}
      {isTouch ? (
        <div className="relative w-screen h-screen overflow-hidden bg-white appear-animetion">
          {/* <audio src="/mp3/award.mp3" autoPlay loop /> */}
          {/* <div className="absolute text-[100px] bg-red-600">
            {width}x{height}
           </div>  */}
          <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
            <div className="flex hv:w-full m-auto items-center justify-center">
              <img
                src="/img/CentralBeautyAward2024/BeautyGalerie.png"
                className="w-[70%]"
              />
            </div>

            <div className="relative z-50 w-screen h-screen m-auto items-center justify-center top-[20%] ">
              <Link

                href="/central-beuaty-award/GenerateYourBauetyGiftCard"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40vh] m-auto "
                onClick={() => play()}
              >
                <img
                  src="/img/CentralBeautyAward2024/Generate your beauty card.png"
                  className="w-[40vw]"
                />
              </Link>

              {/* Top Center */}
              <Link
                href="/central-beuaty-award/BestFrangrance"
                onClick={() => play()}
              >
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58vh] m-auto">
                  <img
                    src="/img/CentralBeautyAward2024/BestFrangrance/Best Fragrance.png"
                    className="w-[30vw]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestLuxury"
                onClick={() => play()}
              >
                <button className="absolute top-1/2 left-[2%] -translate-y-[44vh] m-auto">
                  <img
                    src="/img/CentralBeautyAward2024/BestLuxury/Best Luxury.png"
                    className="w-[30vw]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestMakeUp"
                onClick={() => play()}
              >
                <button className="absolute top-1/2 right-[2%] -translate-y-[44vh] m-auto">
                  <img
                    src="/img/CentralBeautyAward2024/BestMakeUp/Best Make Up.png"
                    className="w-[30vw]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestSkincare"
                onClick={() => play()}
              >
                <button className="absolute top-1/2 left-[8%] -translate-y-[22vh] m-auto">
                  <img
                    src="/img/CentralBeautyAward2024/BestSkincare/Best Skincare.png"
                    className="w-[30vw]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestEcoFriendly"
                onClick={() => play()}
              >
                <button className="absolute top-1/2 right-[8%] -translate-y-[22vh] m-auto">
                  <img
                    src="/img/CentralBeautyAward2024/BestEcoFriendly/Best Eco-Friendly.png"
                    className="w-[30vw]"
                  />
                </button>
              </Link>
            </div>

            <div className="absolute z-50 text-black text-[18px] h-[10vh] top-[85%] hv:top-[30%]  hv:flex-none hv:justify-start justify-around p-4 w-full hv:w-auto">
              <div className="justify-around hv:justify-start flex hv:flex-none hv:ml-[100px] gap-4">
                <MdOutlineArrowBack
                  size={80}
                  onClick={BackClick}
                  color="#e4c7ad"
                  className=" border-2 border-[#e4c7ad] rounded-[100px]"
                />
                <MdHome
                  size={80}
                  onClick={() => BackHome()}
                  color="#e4c7ad"
                  className=" border-2 border-[#e4c7ad] rounded-[100px]"
                />
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="relative w-screen h-screen overflow-hidden bg-black transition-all duration-75" onClick={CliclHandler}>
          <div className="absolute z-20 w-full h-full opacity-60">
            <video loop muted autoPlay preload="none" className="w-screen h-screen object-cover">
              <source
                src="/mp4/CentralBeautyAward2024/award.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="absolute z-30 w-full text-gray text-center top-[50%] hv:text-end hv:top-[20%] opacity-loop-animate">
            <button onClick={CliclHandler}>
              <div className="animate-bounce flex text-[40px] justify-center items-center w-[200px] h-[200px] border-4 rounded-[100%] font-light font-serif text-gray-200 border-gray-200 m-auto bg-black bg-opacity-50 uppercase hv:mr-10">
                Touch
              </div>
            </button>
          </div>
          {/* <MdTouchApp size={120} className="justify-end w-full"/> */}
        </div>
      )}
    </div>
  );
};

export default CentralBeuatyAward;
