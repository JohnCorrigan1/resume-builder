export default function ResumeHeader(props){
    return(
        <div className="resume-header text-center">
        <h1 className="mb-5 mt-5 font-bold text-2xl">
          {props.name}
        </h1>
        <div>
          {props.email} {"\n"}| {props.phone} | {props.address}
        </div>
      </div>
    )
}