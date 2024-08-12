"use client"
import { FaSearch } from "react-icons/fa";

export function Search({onchange}:{onchange:(e:React.ChangeEvent<HTMLInputElement>)=>void}){
    return(
        <div className=" relative border-2 rounded-md border-slate-800">
            <input className="outline-blue-600 bg-transparent w-full text-white py-2 px-3 rounded-lg" placeholder="search" onChange={onchange}/>
            <div className="text-blue-600 flex top-0 right-0 justify-center items-center absolute mt-2 text-2xl ">
              <FaSearch />

            </div>
        </div>
    )
}