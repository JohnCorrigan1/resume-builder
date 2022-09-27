export default function ResumeEducation(props){
    return(
        <div>
        <div className="education mt-10 ml-10 mr-10 flex">
          <h2 className="font-bold flex w-2/3">{props.school}</h2>
          <div className="ml-auto">
            {props.start} - {props.end}
          </div>
        </div>
        <h3 className="ml-10 mt-2">{props.study}</h3>
        </div>
    )
}