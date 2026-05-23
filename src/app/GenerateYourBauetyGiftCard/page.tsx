"use client";
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useState
import { FaCamera } from "react-icons/fa";
import { useQRCode } from 'next-qrcode';
import useSound from 'use-sound';
import ButtonClick from "@/app/central-beuaty-award/utils"
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { useRouter } from "next/navigation";
import Sound from "../Sound";

import Loader from "@/components/Loader";

const page = () => {

  // window.my_mute = false;

  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [buttonHidden, setButtonHidden] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState(3);
  const [keepUrls, setKeepUrls] = useState<string>("");
  const [newImage, setNewImage] = useState<string>("");
  const { Canvas } = useQRCode();
  const [play] = useSound('/mp3/click.mp3');
  const [count] = useSound('/mp3/cound.mp3');
  const router = useRouter();
  const POST_request = async (imageSrc: string) => {
    // setButtonHidden(!buttonHidden)
    const response = await fetch(
      "https://thairath.promptdue.com/centrall/uploadBase64",
      // https://thairath.promptdue.com/centrall/uploadBase64
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          img_upload: imageSrc,
        }),
      }
    );
    const result = await response.json();
    console.log(result, "response post image");
    // POST_nextStept(result._id);

    setKeepUrls(result.images_faceSwap);
    // console.log(result.images_faceSwap);

    setNewImage("https://centralawards.creaive.ai/central-beuaty-award/GenerateYourBauetyGiftCard/" + result.images_faceSwap.replace("https://thairath.promptdue.com/images/replicate/", "").replace(".png", ""))
    // setButtonHidden(!buttonHidden)
  };

  const capture = () => {
    // play()
    count()
    setButtonHidden(!buttonHidden)
    const delay = 3000;

    setInterval(() => {
      setTimeLeft((timeLeft) => --timeLeft);
    }, 1000);

    setTimeout(async () => {
      const imageSrc = webcamRef.current?.getScreenshot();
      if (imageSrc) {
        setImgSrc(imageSrc);
        POST_request(imageSrc);
      }
    }, delay);
    setButtonHidden(!buttonHidden)
  };

  useEffect(() => {
    console.log(keepUrls);
    // console.log(keepUrls.length)

  }, [keepUrls]);

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault()
      }}
    >
      <Sound muted={false} />

      {keepUrls.length > 0 ? (
        <div className="absolute z-100 w-screen h-screen bg-[#F6E7DF]">
          <div className="flex w-full m-auto items-center justify-center">
            <img src="/img/CentralBeautyAward2024/BeautyGalerie.png" className="w-[70%]" />
          </div>

          <div className=" grid grid-cols-1 p-4 gap-4  bg-[#F6E7DF] pt-8">
            <img
              src={`${keepUrls}`}
              // central-beuaty-award/GenerateYourBauetyGiftCard/
              // src="/img/CentralBeautyAward2024/AW 01 No Logo.png"
              className="w-[400px] hv:w-[1200px] rounded-[40px] m-auto "
            />

            <div className="hidden relative z-20 m-auto justify-center items-center hv:flex overflow-hidden ">
              <div className="m-auto justify-center items-center bg-white ">
                <Canvas
                  text={`${newImage}`}
                  // text='test'
                  options={{
                    errorCorrectionLevel: 'M',
                    margin: 3,
                    scale: 8,
                    width: 300,
                    color: {
                      dark: '#000000',
                      light: '#FFFFFF',
                    },
                  }}
                />
                <div className="text-[18px] text-semiBlod text-black w-full m-auto text-center">
                  SCAN TO DOWNLOAD
                </div>
              </div>
            </div>

            <div className="absolute text-black text-[18px] justify-center h-[100px] top-[80%] hv:top-[10%] pt-4 hidden hv:flex">
              <ButtonClick />
            </div>

            <div className="flex m-auto justify-between">
              <MdOutlineArrowBack
                size={50}
                onClick={() => {
                  play()
                  router.back()
                }}
                color="#e4c7ad"
                className="w-[80px] h-[80px] border-2 border-[#e4c7ad] rounded-[100px] bg-[#F6E7DF] hv:hidden"
              />

              <div className="w-[200px] text-[10px] hv:hidden uppercase font-semibold items-center text-center">
                HOLD TO DOWNLOAD
              </div>

              <MdHome
                size={50}
                onClick={() => {
                  play()
                  // router.push("/central-beuaty-award")
                  window.location.href = `https://ide.creaive.ai/nisa_central`
                }}
                color="#e4c7ad"
                className="w-[80px] h-[80px] border-2 border-[#e4c7ad] rounded-[100px] bg-[#F6E7DF] hv:hidden"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className=" bg-[#F6E7DF]">

          <div className="flex w-full m-auto items-center justify-around">
            <img src="/img/CentralBeautyAward2024/BeautyGalerie.png" className="w-[70%] " />
          </div>

          {imgSrc ? (
            <div className="border-[#e4c7ad] w-screen h-screen hv:px-0 ">
              <div className="relative pt-4">
                {/*  */}
                <img
                  src={imgSrc}
                  alt="webcam"
                  className="z-0 flex blur-lg m-auto items-center justify-center bg-white rounded-[40px] w-[400px] h-[500px] object-center hv:w-[1200px] hv:h-auto"
                />
                {/*  */}
                <div className="absolute z-10 w-full top-[40%]">
                  <Loader />
                </div>
              </div>

              <div className="flex w-full m-auto items-center justify-center pt-[10vh]">
                <img src="/img/CentralBeautyAward2024/BEAUTY AWARDS 2024.png" className="w-[70%]" />
              </div>

            </div>
          ) : (
            <div className="border-[#e4c7ad] w-screen h-screen hv:px-0 overflow-hidden">
              <div className="absolute w-screen items-center justify-center flex top-[30%] text-[200px]">
                {timeLeft}
              </div>

              <div className="absolute text-black text-[18px] justify-center h-[100px] top-[80%] hv:top-[10%] pt-4 hidden hv:flex">
                <ButtonClick />
              </div>

              <div className=" pt-4">
                <Webcam
                  ref={webcamRef}
                  screenshotFormat="image/png"
                  color="#e4c7ad"
                  className="flex w-[400px] h-[500px] object-cover hv:w-[1200px] hv:h-auto m-auto items-center justify-center bg-white rounded-[40px] top-[4vh]"
                />
              </div>

              <div className="relative h-auto w-screen m-auto items-center flex py-4">
                {
                  buttonHidden ? (
                    <div className=" hv:w-[100px] hv:h-[100px]">

                    </div>
                  ) : (
                    <div className="flex items-center justify-around w-[430px] m-auto px-4 hv:px-0">
                      <MdOutlineArrowBack
                        size={50}
                        onClick={() => {
                          play()
                          router.back()
                        }}
                        color="#e4c7ad"
                        className="w-[80px] h-[80px] border-2 border-[#e4c7ad] rounded-[100px] bg-[#F6E7DF] hv:hidden"
                      />
                      <div className="w-[100px] h-[100px] m-auto border-[#e4c7ad] border-2 rounded-[150px]">
                        <FaCamera
                          className="m-auto h-full"
                          size={50}
                          color="#e4c7ad"
                          onClick={capture}
                        />
                      </div>
                      <MdHome
                        size={50}
                        onClick={() => {
                          play()
                          // router.push("/central-beuaty-award")
                          window.location.href = `https://ide.creaive.ai/nisa_central`
                        }}
                        color="#e4c7ad"
                        className="w-[80px] h-[80px] border-2 border-[#e4c7ad] rounded-[100px] bg-[#F6E7DF] hv:hidden"
                      />
                    </div>
                  )
                }
              </div>
              <div className="absolute w-full m-auto items-center justify-center hv:pt-[10vh] ">
                <img src="/img/CentralBeautyAward2024/BEAUTY AWARDS 2024.png" className="w-[70%] m-auto" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
