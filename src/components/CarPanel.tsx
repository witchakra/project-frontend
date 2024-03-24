'use client'

import { useReducer } from "react"
import ProductCard from "./ProductCard"
import Link from "next/link"
import { link } from "fs"
import { useRef } from "react"

export default function CarPanel (){

    const countRef = useRef(0)
    const inputRef = useRef<HTMLInputElement>(null)


    const mockCarRepo =[
        {cid:"001",name:"CO-OP",image:"/img/co-op.jpg"},
        {cid:"002",name:"NoblePlay",image:"/img/nobleplay.jpg"},
        {cid:"003",name:"GetAway",image:"/img/getaway.jpg"},
    ]

    return (
        <div>
            <div style={{margin:"20px",display:"flex", flexDirection:"row",
            flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
               {
                    mockCarRepo.map((carItem) => (
                        <Link href={`/car/${carItem.cid}`} className="w-1/5">
                            <ProductCard carName={carItem.name} imgSrc={carItem.image} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}