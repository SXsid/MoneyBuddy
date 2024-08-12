import { Tabel } from "../../components/Tabel";

export default function() {
    return (
        <div>
            <div className="px-8 mt-8 text-blue-600 left-0 font-extrabold text-3xl">Your Transections</div>
            <div className="mt-8 lg:text-center lg:w-auto w-full">
                <Tabel/>
            </div>


        </div>
    )
}