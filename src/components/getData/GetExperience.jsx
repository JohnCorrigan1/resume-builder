import Card from "../ui/Card";

export default function GetExperience() {
    
   return(
        <Card>
            <form action="">
                <div className="flex flex-col items-center">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" className=" w-2/3"/>
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="title">Job Title</label>
                    <input type="text" className=" w-2/3" />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="tasks">Daily Tasks/Deatils</label>
                    <textarea className=" w-2/3"></textarea>
                </div>
            </form>
        </Card>
    )
}