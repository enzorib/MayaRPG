export default function Stats(props){
    return(
        <div className=" p-4 bg-[#FFF9F2] w-full h-32 rounded-3xl flex flex-col justify-between ">
            <p className=" text-[#000000]">{props.label}</p>
            <h1 className=" text-6xl text-[#000000]">{props.valor}</h1>

        </div>

    )
}