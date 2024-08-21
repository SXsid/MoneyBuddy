"use client"

import { Card } from "@repo/ui/card";
import { usePathname } from "next/navigation";
import  BankConfirm from "../../api/Banktransfer/bank";


export default function Home() {
    const path=usePathname()
    const data = path.split("/")
    console.log(data)
    const token=data[2]
    const number=Number(data[3])
  return (
    <div className="flex justify-center items-center h-screen w-full bg-white">
        
      <Card title="netbankig">
          <div className="flex mt-8 px-12 justify-between">
          <Button onclick={async()=> { const res = await BankConfirm(token,(number)/100,"confirm")
    
            window.close()
        }
        
        
          
          }>
            Allow
          </Button>
          <Button onclick={async()=> { const res= await BankConfirm(token,(number)/100,"reject")
    
    window.close()
}


  
  }>
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