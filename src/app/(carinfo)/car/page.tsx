import CarPanel from "@/components/CarPanel"
export default function Car(){
    return (
        <main className="p-5">
            <h1 className="text-4xl font-semibold text-orange-500" >Choose Your Dream Workspace</h1>
            <div className="text-center"><CarPanel/></div>
        </main>
    )
}