
export const Input = ({
    placeholder,
    onchange,
    label
}: {
    placeholder: string;
    onchange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}) => {
    return <div className="pt-2 w-full">
        <label className="block mb-2 text-sm font-medium text-white">{label}</label>
        <input onChange={onchange} type="number" id="first_name" className=" border border-gray-300 text-md rounded-lg  bg-transparent outline-none text-white focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} />
    </div>
}