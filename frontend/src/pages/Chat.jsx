import Chatting from "../components/Chatting";
import { useForm } from "react-hook-form";
import "../styles/chat.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Chat() {
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
      </div>

      <div className=" absolute  w-75 p-2 bg-white h-90 d-flex flex-column p-2 m-2 rounded ">
        <div className=" w-100">
          <center>
            <b>text messages will appear here</b>
          </center>
          <div className=" w-25">hey!!</div>
        </div>
        <div className=" align-self-end w-100 d-flex input-group">
          <input
            type="text"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            {...register("message")}
            className={`form-control form-control-lg  ${
              errors.name ? "is-invalid" : ""
            }`}
          />
          <button
            href="#"
            class="input-group-append btn btn-success btn-sm text-white px-4"
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
}
