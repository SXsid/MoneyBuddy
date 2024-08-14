"use client"
// import Image from "next/image";
// import { Button } from "@repo/ui/button";
// import styles from "./page.module.css";
import { Card } from "@repo/ui/card";
import axios from "axios";
import { usePathname } from "next/navigation";

export default function Home() {
    const path=usePathname()
    const data = path.split("/")
  return (
    <div className="flex justify-center items-center h-screen w-full">
        
      <Card title="netbankig">
          <div className="flex mt-8 px-12 justify-between">
          <Button onclick={async()=> { await axios.post("http://localhost:8080/idfcbank",{
            token:data[1],
            amount:Number(data[2])/100,
            status:"approved"
          }
          
        )
    
            window.close()
        }
        
        
          
          }>
            Allow
          </Button>
          <Button onclick={async()=> { await axios.post("http://localhost:8080/idfcbank",{
            token:data[1],
            amount:Number(data[2])/100,
            status:"reject"
          }) 
          
          window.close()} }>
            Reject
          </Button>
          </div>
      </Card>
      
    </div>
  );
}

function Button({children,onclick}:{children:React.ReactNode,onclick:()=>void}){
  return(
    <button onClick={onclick} type="button" className="text-white bg-blue-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
      {children}
    </button>
  )
}