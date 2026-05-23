'use client'
import React, { useEffect, useState } from 'react'
import { RiShare2Line } from "react-icons/ri";

export default function Page({ params }: { params: { img_id: string } }) {


    const shareImage = async (link: string) => {
        // console.log(link)
        const blob = await fetch(link).then((r) => r.blob());

        const share = async (blob: Blob) => {
            // console.log(blob)
            const data = {
                title: "",
                files: [
                    new File([blob], "image_download.png",
                        {
                            // title: "ssss",
                            type: blob.type,
                        }
                    ),
                ],
            };

            try {
                if (!navigator.canShare(data)) {
                    // throw new Error("Can't share data.", data);
                }
                await navigator.share(data);
            } catch (e) {
                // console.log(e.name, e.message);
            }
        };

        share(blob);
    }



    return (
        <div className="absolute z-100 w-screen h-screen bg-[#F6E7DF]">
            <div className="flex w-full m-auto items-center justify-center">
                <img src="/img/CentralBeautyAward2024/BeautyGalerie.png" className="w-[70%]" />
            </div>
            <div className=" grid grid-cols-1 p-4 gap-4  bg-[#F6E7DF] pt-8">
                <img src={`https://thairath.promptdue.com/images/replicate/${params.img_id}.png`}
                    className='m-auto w-[400px] hv:w-[1200px] rounded-[40px]'
                />
            </div>

            <div className='w-full m-auto justify-center' onClick={() => shareImage(`https://thairath.promptdue.com/images/replicate/${params.img_id}.png`)}>
                <RiShare2Line 
                    size={50}
                    className='border-[#e4c7ad] border-2 rounded-[100px] m-auto text-[#e4c7ad] p-2'
                />
            </div>

        </div >
    )
}
// https://thairath.promptdue.com/images/replicate/pyXnFAuhsxKHl4BKFcbJHf68ioZnpz9Y2Q3juK0cgAzYSmDmB3d3rvajEPetA9cA.png
// https://thairath.promptdue.com/images/central/