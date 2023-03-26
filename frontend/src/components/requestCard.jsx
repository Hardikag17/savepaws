export default function RequestCard() {
  return (
    <div className=" container d-flex border rounded border-2 border-solid border-success border-opacity-50 py-2">
      <div>
        <img
          width={250}
          height={250}
          className=" rounded box-shadow"
          src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="w-100 bg-light p-3">
        <div>
          <span>
            <b>Name</b>
          </span>
          <h4 className="">Description</h4>
          <span className="">
            Posted by
            <a href="/" className="" title="author">
              Rescuer ID
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
