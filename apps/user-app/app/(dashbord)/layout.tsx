import { Sidebar } from "../components/Sidebar";
import { FaHome } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { BiTransfer } from "react-icons/bi";
import { GoGraph } from "react-icons/go";


export default  function Layout({children}:{children:React.ReactNode}):JSX.Element{
   
    
    return(
        <>
            <div className="lg:block hidden " >
            <div className="flex">
            <div className="hidden md:block border-r border-slate-800 min-h-screen max-h-screen-[10] mr-7 ">
                <div className="mt-14">
                    <Sidebar href="/graph" title="data" icon={<GoGraph />}/>

                    <Sidebar href="/dashbord" title="Dashboard" icon={<FaHome />}/>
                    <Sidebar href="/transection" title="Transection" icon={<FaClock />}/>
                    <Sidebar href="/transfer" title="Transfer" icon={<BiTransfer />}/>
                </div>

            </div>
            <div className="justify-center relative">
                {children}
            </div>
            </div>
            
            </div>
            <div className="flex justify-center items-center h-screen text-blue-600  lg:hidden text-3xl border-2 border-slate-400 ">
                ONLY FOR DESKTOP
            </div>


        </>
    )
}   