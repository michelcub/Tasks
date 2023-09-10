'use client'
import Link from "next/link"
export const CardBoard = ({board}) => {
    
    return (
        <article id={board?.id} className="bg-slate-700 w-[16rem] h-[12rem] rounded-lg border-s-4 border-green-400 flex p-4 flex-col">
            <h2>{board?.title||"Title"}</h2>
            <div className="w-full h-full overflow-hidden">
                <p>{board?.description||"Description"}</p>
            </div>
            
            <div className="flex justify-center mt-auto">
                <Link className="px-12 py-1 border border-green-400 rounded-lg" href={'/'}>View</Link>
            </div> 
        </article>
    )
}