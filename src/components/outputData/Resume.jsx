import ResumeHeader from "./ResumeHeader";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";

export default function Resume(props) {
  return (
    <div className="h-full">
      <div className="bg-white w-3/4 mr-auto ml-auto p-5 min-h-full">
        <ResumeHeader
          name={props.data.fullName}
          email={props.data.email}
          phone={props.data.phone}
          address={props.data.address}
        />
        <ResumeEducation 
        school={props.data.school}
        start={props.data.start}
        end={props.data.end}
        study={props.data.study}
        />
        <ResumeExperience 
        company={props.data.company}
        title={props.data.title}
        start={props.data.experienceStart}
        end={props.data.experienceEnd}
        tasks={props.data.tasks}
        />
      </div>
    </div>
  );
}
