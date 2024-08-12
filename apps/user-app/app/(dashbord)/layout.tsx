import { Sidebar } from "../components/Sidebar";
import { FaHome } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { BiTransfer } from "react-icons/bi";


export default  function Layout({children}:{children:React.ReactNode}):JSX.Element{
   
    
    return(
        <div className="flex  ">
            <div className="hidden lg:block border-r border-slate-800 min-h-screen max-h-screen-[10] mr-7">
                <div className="mt-14">
                    <Sidebar href="/dashbord" title="Dashboard" icon={<FaHome />}/>
                    <Sidebar href="/transection" title="Transection" icon={<FaClock />}/>
                    <Sidebar href="/transfer" title="Transfer" icon={<BiTransfer />
}/>
                </div>

            </div>
            <div>
                {children}
            </div>
        </div>
    )
}   