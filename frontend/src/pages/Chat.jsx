import Chatting from "../components/Chatting";
import { useForm } from "react-hook-form";
import "../styles/chat.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../utils/userContext";
import * as yup from "yup";
import Message from "../components/message";
import { useState } from "react";
import { getRoom, socket } from "../utils/socket";
import { useEffect } from "react";

export default function Chat() {
  // const [sendMessages, setSendMessages] = useState([]);
  // const [receiveMessages, setReceiveMessages] = useState([]);
  const { state } = useContext(UserContext);
  const [receiverId, setRecevierId] = useState();
  const [messageList, setMessageList] = useState([]);
  const [room, setRoom] = useState("");

  useEffect(() => {
    if (state.userID == "g90bm3wzlftdl2qd") setRecevierId("g90bm4shlftghf94");
    else setRecevierId("g90bm3wzlftdl2qd");

    getRoom(state.userID, receiverId).then((res) => {
      setRoom(res);
      console.log(room);
      if (res?.length > 0) socket.emit("join_room", room);
    });

    
  });

  useEffect(() => {
    socket.on("receive_message", (message) => {
      setMessageList((list) => [...list, message.text]);
      console.log(messageList);
    });
  }, [socket]);

  const onSubmit = (data) => {
    let message = {
      RoomId: room,
      SenderId: state.userID,
      RecevierId: receiverId,
      text: data.message,
    };
    socket.emit("send_message", message);
    setMessageList((list) => [...list, message.text]);
  };

  const formSchema = yup.object().shape({
    message: yup.string().required("message is required"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  return (
    <div className="chat-component container-fluid d-flex justify-content-between">
      <div className="userslist w-25 border-2 border-white p-2">
        <h6>These are users list</h6>
        {messageList.length > 0 &&
          messageList.map((el) => {
            return <div>{el}</div>;
          })}
      </div>

      <div className=" absolute  w-75 bg-white h-90 d-flex flex-column m-2 rounded ">
        <div className=" w-100">
          <div className=" w-100 d-flex align-items-center bg-success p-2 text-white rounded">
            <div className=" px-2">
              <img
                type="button"
                data-bs-toggle="dropdown"
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                width="55"
                height="55"
                className="rounded-circle dropdown-toggle"
                alt="Placeholder profile pic"
              />
            </div>
            User's Name (Pet Name)
          </div>
          <center>
            <b>Text messages will appear here</b>
          </center>
          <div className=" p-2">
            <Message type="send" />
            <Message type="receive" />
            <Message type="send" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" mt-auto align-self-end w-100 d-flex input-group"
        >
          <input
            type="text"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            {...register("message")}
            className={`form-control form-control-lg shadow-none  ${
              errors.name ? "is-invalid" : ""
            }`}
          />
          <button
            href="#"
            class="input-group-append btn btn-success btn-sm text-white px-4"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}
