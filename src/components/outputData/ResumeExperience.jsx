export default function ResumeExperience(props){
    return(
        <div className="ml-10 mt-10 mr-10">
            <div className="flex justify-between">
            <h1 className="font-bold">{props.company}</h1>
            <div>{props.start} - {props.end}</div>
            </div>
            <div className="mt-2">
                <h2>Job Title:ඞ {props.title}</h2>
            </div>
            <div className="mt-2 ml-5 mr-5">{props.tasks}</div>
        </div>
    )
}