


import { Dashboard } from "../../components/Dashbord"

import { geteuserDATA, getName } from "../../api/client/userData"



export default async  function(){
    const userName = await getName()
    const Data= await geteuserDATA()
    
    // const [input,setInput]=useState("")
    
    return <div className="text-white">
            {userName?<div className="text-3xl text-semiblod underline mt-3 text-gray-500">Hello,{userName}..</div>:<div className="text-xl text-red-800">Login before You procede</div>}
            <Dashboard  userData={Data} userName={userName || ""}/>
      </div>
}