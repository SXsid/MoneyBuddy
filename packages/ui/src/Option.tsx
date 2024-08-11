interface optionProp{
    onselect:(value:string)=>void
    options:{
        key:string,
        value:string
    }[]
}
export function Option({onselect,options}:optionProp){
    return(
        <select className=" w-full my-4 rounded-sm p-3 bg-transparent text-blue-600" onChange={(e)=>{
            onselect(e.target.value)
        }}>{options.map((v)=>{
            return <option className="bg-slate-950  outline-none text-blue-600" value={v.key}>{v.value}</option>
        })}</select>
    )

}