import RequestCard from "../components/requestCard";
export default function Requests() {
  return (
    <div className="container p-2  ">
      <div>
        <hr />
        <h3>Your Adoption Request</h3>
        <hr />
        <RequestCard />
      </div>

      <div>
        <hr />
        <h3>Your Pet's Requests</h3>
        <hr />
        <RequestCard />
      </div>
    </div>
  );
}
