import Card from "../ui/Card";
import './forms.css'

export default function GetEducation() {
  return (
    <Card>
      <form action="">
        <div className="flex flex-col items-center">
          <label htmlFor="school">School Name</label>
          <input type="text" id="school"className="w-2/3" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="area">Study area</label>
          <input type="text" id="area"className=" w-2/3" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="start">Start Date</label>
          <input type="text" id="start" className=" w-2/3"/>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="end">End Date (blank if not complete)</label>
          <input type="text" id="end" className=" w-2/3"/>
        </div>
      </form>
    </Card>
  );
}
