export default function Resume(props) {
  return (
    <div>
      <div className="bg-white w-3/4 mr-auto ml-auto ">
        <div className="resume-header text-center">
          <h1 className="mb-5 mt-5 font-bold text-2xl">{props.data.fullName}</h1>
          <div>
            {props.data.email} | {props.data.phone} | {props.data.address}
          </div>
        </div>
        <div className="education mt-10 ml-5">
            <h2 className="font-bold">{props.data.school}<div className="w-1/2"></div>{props.data.start}</h2>
        </div>
      </div>
    </div>
  );
}
