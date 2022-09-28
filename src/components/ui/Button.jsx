export default function Button(props){
    return(
        <div className="flex justify-center mt-2">
            <button type="submit" className=" bg-indigo-400 p-1 w-16 rounded-md text-white border">{props.text}</button>
        </div>
    )
}