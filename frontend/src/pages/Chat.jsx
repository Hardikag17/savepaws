import Chatting from "../components/Chatting";
import "../styles/chat.css";
import { useContext } from "react";
import { UserContext } from "../utils/userContext";
import { useState } from "react";
import { getRoom, socket } from "../utils/socket";
import { useEffect } from "react";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../utils/user";

export default function Chat() {
  const { state } = useContext(UserContext);
  const { receiverId } = useParams();
  //const [receiverId, setReceiverId] = useState();
  const [senderId, setSenderId] = useState();
  const [messageList, setMessageList] = useState([]);
  const [room, setRoom] = useState();
  const [receiverInfo, setReceiverInfo] = useState();

  const getMessages = useCallback(async () => {
    getRoom(senderId, receiverId).then((res) => {
      setRoom(res);
      if (res?.length > 0) {
        socket.emit("join_room", room);
        socket.emit("previous_messages", room);
        socket.on("previous_messages_list", (data) => {
          let res = data;
          if (res) {
            setMessageList("");
            res.forEach((element) => {
              setMessageList((list) => [...list, element]);
            });
          }
        });
      }
    });

    console.log("prev:", messageList);
  }, [receiverId, senderId, room, messageList]);

  useEffect(() => {
    setSenderId(state?.userID);
    getMessages();
  }, [state, getMessages]);

  useEffect(() => {
    getUserInfo(receiverId).then((res) => {
      setReceiverInfo(res[0]);
    });
  }, [receiverId]);

  return (
    <div className="chat-component container-fluid d-flex w-100 justify-content-between">
      <div className="userslist w-25 border-2 border-white p-2">
        <button
          className=" btn btn-lg btn-light text-black w-100 text-left"
          style={{ fontSize: "18px" }}
          // onClick={() => setReceiverId("g90bm4shlftghf94")}
        >
          <img
            type="button"
            data-bs-toggle="dropdown"
            src={` https://paws-adoption.s3.ap-south-1.amazonaws.com/users/${receiverId}.jpeg`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg";
            }}
            width="55"
            height="55"
            className="rounded-circle dropdown-toggle"
            alt="Placeholder profile pic"
          />
          &nbsp; &nbsp;
          {receiverInfo?.name}
        </button>
      </div>
      <div className=" absolute  w-75 bg-white h-90 d-flex flex-column m-2 rounded ">
        {room && receiverId && senderId ? (
          <Chatting
            socket={socket}
            RoomId={room}
            previous_messages={messageList}
            ReceiverId={receiverId}
            SenderId={senderId}
            SenderName={state.name}
            receiverInfo={receiverInfo}
          />
        ) : (
          <div className="text-center margin-auto ">Loading...</div>
        )}
      </div>
    </div>
  );
}
