import RequestCard from "../components/requestCard";
import { getRequestByUserID } from "../utils/requests";
import { useContext } from "react";
import { UserContext } from "../utils/userContext";
import { useEffect } from "react";
import { useState } from "react";
export default function Requests() {
  const { state } = useContext(UserContext);
  const [userRequest, setuserRequest] = useState([]);

  useEffect(() => {
    getRequestByUserID(state.userID).then((res) => {
      let response = res.data;
      setuserRequest([response]);
    });
  }, [getRequestByUserID]);

  const dummyCards = [...Array(2)].map((_, index) => (
    <RequestCard key={index} />
  ));

  return (
    <div className="container p-2  ">
      <hr />
      <h3>Your Adoption Request</h3>
      <hr />
      <div className=" d-flex">
        {state.user && userRequest && userRequest.length > 0 ? (
          [...userRequest].map((element, key) => {
            return <RequestCard data={element} key={key} isAdopt={true} />;
          })
        ) : (
          <div />
        )}
      </div>
      <hr />
      <h3>Your Pet's Requests</h3>
      <hr />
      <div className=" d-flex">{dummyCards}</div>
    </div>
  );
}
