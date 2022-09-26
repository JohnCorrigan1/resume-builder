import Card from "../ui/Card";

export default function GetInfo() {
  return (
    <Card>
      <form action="">
        <div className="flex flex-col  mr-auto ml-auto items-center">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" className="w-2/3" />
        </div>
        <div className="flex flex-col mr-auto ml-auto items-center">
          <label htmlFor="email">Email</label>
          <input type="email" className="w-2/3" />
        </div>
        <div className="flex flex-col mr-auto ml-auto items-center">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" className="w-2/3" />
        </div>
        <div className="flex flex-col mr-auto ml-auto items-center">
          <label htmlFor="address">Address</label>
          <input type="text" className="w-2/3" />
        </div>
      </form>
    </Card>
  );
}
