'use client'

import { VlogPlayer } from "./VlogPlayer"
import { useState } from "react"
import { Rating } from "@mui/material"

export function TravelCard() {

    const[playing,setPlaying] = useState(true)
    const[rating,setRating] = useState(0)

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200
        flex flex-row">
            <VlogPlayer vdoSrc="/video/ThailandNatural.mp4" isPlaying ={playing} ></VlogPlayer>
            <div className=" m-5">
                Thailand Natural

                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm" onClick={() => { setPlaying(!playing) }}>
                    {playing? 'pause' :'Play'}
                </button>

                <Rating className="w-full h-[10%]" value = {(rating ==undefined)? 0:rating}
                onChange={(e,newValue) => {if(newValue!=null) setRating(newValue)}}/>
            </div>
        </div>
    )
}