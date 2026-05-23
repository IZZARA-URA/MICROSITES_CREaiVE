"use client";
import React, { useEffect, useState } from "react";
import { data } from "../data";
import useSound from 'use-sound';

import Link from "next/link";
import ButtonClick from '@/app/central-beuaty-award/utils'


type Props = {
    image: string;
    name: string;
    href_to: string;
    PRODUCT_DATA: any;
};


interface CircleObject {
    radius: number,
    rotate: number,
    rotateReverse: number
}

// const First_ProductBox = ({ image, name, href_to }: Props) => {
//   const [play] = useSound('/mp3/click.mp3');
//   return (
//     <Link href={href_to} onClick={() => play()}>
//       <img src={image} className="w-[20vw] h-[12vh] z-20 top-[1200px] m-auto" />
//       <div className="text-black text-[10px] hv:text-[30px] font-semiBold p-4 m-auto">{name}</div>
//     </Link>
//   );
// };


const First_ProductBox = ({ image, name, PRODUCT_DATA }: Props) => {
    const [play] = useSound('/mp3/click.mp3');

    const [IsHidden, setIsHidden] = useState(true)

    const toggleIsHidden = () => {
        play()
        setIsHidden(!IsHidden)
    }


    return (
        <div>
            {
                IsHidden ? (
                    <div>
                        <div onClick={toggleIsHidden}>
                            <img src={PRODUCT_DATA.category[0].order[0].image} className="w-[20vw] h-[12vh] z-20 top-[1200px] m-auto" />
                            <div className="text-black text-[10px] hv:text-[30px] font-semiBold p-4 m-auto">{name}</div>
                        </div >
                    </div>
                ) : (
                    <div>
                        <div>
                            <div>
                                <img src={image} className="w-[20vw] h-[12vh] z-20 top-[1200px] m-auto" />
                                <div className="text-black text-[10px] hv:text-[30px] font-semiBold p-4 m-auto">{name}</div>
                            </div >
                        </div>
                        <div onClick={toggleIsHidden} className="absolute w-screen h-screen top-0 left-0 bg-white appear-animetion">
                            {/* <div className='absolute z-50 right-1 hv:right-8 w-[20vw] hv:w-[250px] text-black top-[5vh] hv:top-[20vh] top-[20vh] hv:p-4 hv:pt-0 move-left-animation '>
                                <div onClick={FirstClick} className='border-2 rounded-[20px] shadow-xl '>
                                    <img src={data.data.BestSunscreen.first.image} className='pt-4' />
                                    <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-sctoBold uppercase'>
                                        {data.data.BestSunscreen.first.name}
                                    </div>
                                </div>

                                <div onClick={SecondClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
                                    <img src={data.data.BestSunscreen.second.image} className='pt-4' />
                                    <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-sctoBold uppercase'>
                                        {data.data.BestSunscreen.second.name}
                                    </div>
                                </div>

                                <div onClick={ThirdClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
                                    <img src={data.data.BestSunscreen.third.image} className='pt-4' />
                                    <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-sctoBold uppercase'>
                                        {data.data.BestSunscreen.third.name}
                                    </div>
                                </div>

                                <div onClick={FourthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
                                    <img src={data.data.BestSunscreen.fourth.image} className='pt-4' />
                                    <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-sctoBold uppercase'>
                                        {data.data.BestSunscreen.fourth.name}
                                    </div>
                                </div>

                                <div onClick={FifthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
                                    <img src={data.data.BestSunscreen.fifth.image} className='pt-4' />
                                    <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-sctoBold uppercase'>
                                        {data.data.BestSunscreen.fifth.name}
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                )
            }
        </div>
    );
};


function BestSkincare() {
    const [itemcircle, setitemcircle] = useState<CircleObject[]>([]);
    const [itemsAll, setItemsAll] = useState(6);
    const PRODUCT_DATA = data.skincare



    
    useEffect(() => {
        const build_circle = () => {
            const num = 7; //Number of Square to be generate
            const type = 1;
            let radius = 100; //distance from center
            let start = -90; //shift start from 0
            let slice = (360 * type) / num;
    
            let items = [];
            let i;
            for (i = 0; i < num; i++) {
                let rotate = slice * i + start;
                let rotateReverse = rotate * -1;
    
                // items.push([
                //     radius, 
                //     rotate,
                //     rotateReverse
                // ]);
    
    
                setitemcircle((itemcircle) =>[...itemcircle, { 
                    radius: radius, 
                    rotate: rotate, 
                    rotateReverse: rotateReverse
                }])
            }
    
            console.log(itemcircle)
    
            // setitemcircle(items)
    
    
        }

        

        build_circle()


        console.log(PRODUCT_DATA)
    }, [])



    return (
        <div className=" w-screen h-screen overflow-hidden bg-white">
            <div className=" w-screen h-screen items-center text-center m-auto">
                {/*         
                <div className="absolute z-50 text-black text-[18px] h-[10vh] top-[85%] hv:top-[30%]  hv:flex-none hv:justify-start justify-around p-4 w-full hv:w-auto">
                    <ButtonClick />
                </div> */}

                <div className="absolute z-10 flex  hv:top-[20vh] w-screen m-auto font-sctoBold uppercase appear-animetion">
                    {/*  */}


                    {
                        itemcircle.map((item, index,) => (
                            <div key={index} className="w-[10vw] h-[10vw] bg-gray-100 rounded-full shadow-xl m-auto" >

                            </div>
                        ))
                    }






                    {/*  */}
                    <div className="grid grid-cols-12 justify-center items-center m-auto gap-10 w-screen">
                        <div className="col-start-4">{/*  */}</div>
                        {/* <div className="col-start-4 col-span-3 items-center justify-center m-auto">
                            <First_ProductBox
                                PRODUCT_DATA={PRODUCT_DATA}
                                image={PRODUCT_DATA.category[0].order[0].image}

                                name={PRODUCT_DATA.category[0].name}
                                // href_to={PRODUCT_DATA.BestEssence.}
                            />
                        </div> */}

                        {/* <div className="col-end-10 col-span-3 items-center justify-center m-auto">
                            <First_ProductBox
                                PRODUCT_DATA={PRODUCT_DATA}
                                image={PRODUCT_DATA.BestMenSkincare.first.image}
                                name={PRODUCT_DATA.BestMenSkincare.name}
                                href_to={PRODUCT_DATA.BestMenSkincare.href}
                            />
                        </div>

                        <div className="col-start-2 col-span-3 ">
                            <First_ProductBox
                                PRODUCT_DATA={PRODUCT_DATA}
                                image={PRODUCT_DATA.BestSunscreen.first.image}
                                name={PRODUCT_DATA.BestSunscreen.name}
                                href_to={PRODUCT_DATA.BestSunscreen.href}
                            />
                        </div>
                        <div className="col-end-12 col-span-3 ">
                            <First_ProductBox
                                PRODUCT_DATA={PRODUCT_DATA}
                                image={PRODUCT_DATA.BestSerum.first.image}
                                name={PRODUCT_DATA.BestSerum.name}
                                href_to={PRODUCT_DATA.BestSerum.href}
                            />
                        </div>

                        <div className="col-start-3 col-span-3 hv:col-start-2 hv:col-span-3 ">
                            <First_ProductBox
                                PRODUCT_DATA={PRODUCT_DATA}
                                image={PRODUCT_DATA.BestMoisturizer.first.image}
                                name={PRODUCT_DATA.BestMoisturizer.name}
                                href_to={PRODUCT_DATA.BestMoisturizer.href}
                            />
                        </div>

                        <div className="col-end-11 col-span-3 hv:col-end-12 hv:col-span-3 ">
                            <First_ProductBox
                                PRODUCT_DATA={PRODUCT_DATA}
                                image={PRODUCT_DATA.BestEyeCream.first.image}
                                name={PRODUCT_DATA.BestEyeCream.name}
                                href_to={PRODUCT_DATA.BestEyeCream.href}
                            />
                        </div> */}
                    </div>
                </div>

                <div className="relative h-full top-[0%] appear-animetion">
                    <img src={PRODUCT_DATA.dataTrophyImg} className="z-0 bottom-0 " />
                </div>

            </div>
        </div>
    );
}

export default BestSkincare;
