import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faComments } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../utils/userContext";
import truncateString from "../utils/truncate";
import { API_ROOT } from "../api-config";
import axios from "axios";
import "../styles/card.css";

library.add(fab);
export default function Card({
  name,
  description,
  rescuerId,
  comments,
  postedOn,
  PetID,
}) {
  const { state } = useContext(UserContext);
  const [likeColor, setlikeColor] = useState();
  const [likes, setlikes] = useState(0);

  useEffect(() => {
    getlikes();
  });

  const getlikes = async () => {
    try {
      await axios
        .get(`${API_ROOT}/social/${PetID}/${state.userID}/like`)
        .then((res) => {
          setlikes(res.data.count);
          if (res.data.status) {
            setlikeColor("red");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cards">
      <section className="cards container-fluid">
        <article className="card-pet card--2">
          <div className="card__info-hover">
            <a id="heart">
              <span className="like">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="heart-hover"
                  style={{ color: likeColor }}
                />
                &nbsp;
                {likes} Likes
              </span>
            </a>
            <div className="card__clock-info">
              <svg className="card__clock" viewBox="0 0 24 24">
                <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
              </svg>
              <span className="card__time">{postedOn} </span>
            </div>
          </div>
          <div
            className="card__img"
            style={{
              // backgroundImage: `url('https://paws-adoption.s3.ap-south-1.amazonaws.com/pets/${PetID}-1.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // height: "300px",
              // width: "350px",
            }}
          />
          {/* <img
              src={`https://paws-adoption.s3.ap-south-1.amazonaws.com/pets/${PetID}-1.jpg`}
              alt="Card img"
            /> */}

          <div
            className="card__img--hover"
            style={{
              // backgroundImage: `url('https://paws-adoption.s3.ap-south-1.amazonaws.com/pets/${PetID}-1.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          {/* <img
                src={`https://paws-adoption.s3.ap-south-1.amazonaws.com/pets/${PetID}-1.jpg`}
                alt="card hover img"
              /> */}
          {/* </div> */}

          <div className="card__info">
            <span>
              <b>{name}</b>
            </span>
            <h4 className="card__title">{description}</h4>
            <span className="card__by">
              Posted by
              <a href="/" className="card__author px-2" title="author">
                {truncateString(rescuerId, 7)}
              </a>
              <span className="comments px-2">
                <FontAwesomeIcon icon={faComments} />
                &nbsp;
                {comments} Comments
              </span>
            </span>
            {/* <span className="comments"><i className="fas fa-comments"></i>45 Comments</span>
              <p>comments</p> */}
          </div>
        </article>
      </section>
    </div>
  );
}
