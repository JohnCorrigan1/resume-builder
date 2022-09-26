import GetInfo from "./GetInfo";
import GetEducation from "./GetEducation";
import GetExperience from "./GetExperience";

export default function CvForm(){

    return(
        <div>
            <GetInfo />
            <GetEducation />
            <GetExperience />
        </div>
    )
}