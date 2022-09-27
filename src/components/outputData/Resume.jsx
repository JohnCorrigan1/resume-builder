import ResumeHeader from "./ResumeHeader";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";

export default function Resume(props) {
  return (
    <div className="h-full">
      <div className="bg-white w-3/4 mr-auto ml-auto p-5 min-h-full">
        <ResumeHeader
          name={props.data.infoData.fullName}
          email={props.data.infoData.email}
          phone={props.data.infoData.phone}
          address={props.data.infoData.address}
        />
        {props.data.educationData.map((item) => (
          <ResumeEducation
            school={item.school}
            start={item.start}
            end={item.end}
            study={item.study}
          />
        ))}

        {props.data.experienceData.map((item) => (
        <ResumeExperience
          company={item.company}
          title={item.title}
          start={item.experienceStart}
          end={item.experienceEnd}
          tasks={item.tasks}
        />
        ))}
      </div>
    </div>
  );
}
