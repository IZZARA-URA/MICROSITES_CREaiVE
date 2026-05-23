"use client";
import React from "react";
import { data } from "./data";
import useSound from 'use-sound';

import Link from "next/link";
import ButtonClick from '@/app/central-beuaty-award/utils'


type Props = {
  image: string;
  name: string;
  href_to: string;
};

const First_ProductBox = ({ image, name, href_to }: Props) => {
  const [play] = useSound('/mp3/click.mp3');
  return (
    <Link href={href_to} onClick={() => play()}>
      <img src={image} className="w-[20vw] h-[12vh] z-20 top-[1200px] m-auto" />
      <div className="text-black text-[10px] hv:text-[30px] font-semiBold p-4 m-auto">{name}</div>
    </Link>
  );
};

function BestSkincare() {


  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white"     
    onContextMenu={(e) => {
      e.preventDefault()
    }}>
      <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
        <div className="flex w-[80%] hv:w-full m-auto items-center justify-center">
          <img src="/img/CentralBeautyAward2024/CentralBeautyAward2024.png" />
        </div>

        <div className="absolute z-50 text-black text-[18px] h-[10vh] top-[85%] hv:top-[30%]  hv:flex-none hv:justify-start justify-around p-4 w-full hv:w-auto">
          <ButtonClick />
        </div>

        <div className="absolute z-10 flex  hv:top-[25vh] w-screen m-auto font-sctoBold uppercase appear-animetion">
          <div className="grid grid-cols-12 justify-center items-center m-auto gap-10 w-screen">
            <div className="col-start-4">{/*  */}</div>
            <div className="col-start-4 col-span-3 items-center justify-center m-auto">
              <First_ProductBox
                image={data.data.BestEssence.first.image}
                name={data.data.BestEssence.name}
                href_to={data.data.BestEssence.href}
              />
            </div>

            <div className="col-end-10 col-span-3 items-center justify-center m-auto">
              <First_ProductBox
                image={data.data.BestSunscreen.first.image}
                name={data.data.BestSunscreen.name}
                href_to={data.data.BestSunscreen.href}
              />
            </div>

            <div className="col-start-2 col-span-3 text-[40px]">
              <First_ProductBox
                image={data.data.BestMenSkincare.first.image}
                name={data.data.BestMenSkincare.name}
                href_to={data.data.BestMenSkincare.href}
              />
            </div>
            <div className="col-end-12 col-span-3 text-[40px]">
              <First_ProductBox
                image={data.data.BestSerum.first.image}
                name={data.data.BestSerum.name}
                href_to={data.data.BestSerum.href}
              />
            </div>

            <div className="col-start-3 col-span-3 hv:col-start-2 hv:col-span-3 text-[40px]">
              <First_ProductBox
                image={data.data.BestMoisturizer.first.image}
                name={data.data.BestMoisturizer.name}
                href_to={data.data.BestMoisturizer.href}
              />
            </div>

            <div className="col-end-11 col-span-3 hv:col-end-12 hv:col-span-3 text-[40px]">
              <First_ProductBox
                image={data.data.BestEyeCream.first.image}
                name={data.data.BestEyeCream.name}
                href_to={data.data.BestEyeCream.href}
              />
            </div>
          </div>
        </div>

        <div className="relative w-screen h-full top-[-16%] appear-animetion">
          <img src={data.dataTrophy} className="z-0 bottom-0" />
        </div>
      </div>
    </div>
  );
}

export default BestSkincare;
