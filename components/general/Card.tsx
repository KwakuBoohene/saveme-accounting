import Image from "next/image"

export default function Card(props:any){
    return(
        <div className="px-6 py-4 rounded-lg bg-white w-64 shadow-lg shadow-gray-200">
        <div className="text-gray-400 my-2">
            {props.name}
        </div>

        <div className="text-gray-700 text-3xl font-semibold my-2">
            $ {props.amount}
        </div>

        <div className="">
            <span className="">
                <Image
                src={
                    props.upwards?
                    '/assets/icons/icon-green-arrow-up.svg':
                    '/assets/icons/icon-red-arrow-down.svg'}
                alt="Icon green arrow"
                width={10}
                height={10}
                />
            </span>
            {
                props.percentage?(
                    <span className="mx-2">
                    {props.percentage}%
                </span>
                ):null
            }
            
        </div>

        {
                props.link?(
                    <div className="
                    cursor-pointer font-bold
                    text-green-primary
                    hover:text-green-secondary transition-all 
                    duration-500">
                         {props.link_text?props.link_text:'View Statement'}
                    </div>
                ):null
            }
        


    </div>
    )
}