import Image from "next/image"

export default function CarDetailPage({params} : {params:{cid:string}}){

    const mockCarRepo = new Map()
    mockCarRepo.set("001",{name:"CO-OP",image:"/img/co-op.jpg"})
    mockCarRepo.set("002",{name:"NoblePlay",image:"/img/nobleplay.jpg"})
    mockCarRepo.set("003",{name:"GetAway",image:"/img/getaway.jpg"})

    return (
        <main className="text-center p-5">
            <h1 className = "text-lg font-medium">Car ID {params.cid}</h1>
            <div className="flex flex-row my-5">
                <Image src = {(mockCarRepo.get(params.cid).image)}
                alt ='Car Image' width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>

                <div className="text-md mx-5">{(mockCarRepo.get(params.cid).name)}</div>

            </div>
        </main>
    )
}


export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}