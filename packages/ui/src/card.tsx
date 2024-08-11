export function Card({title,children}:{title:string,children:React.ReactNode}){
  return(
    <div className="border border-slate-800 p-4 rounded-lg w-auto">
      <h1 className="text-blue-600 text-xl font-semibold">{title}</h1>
      <div>
          {children}
      </div>
    </div>
  )
}