import "../styles/ui.css";
import "../styles/responsive.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faComments } from "@fortawesome/free-solid-svg-icons";

library.add(fab);
function PetViewPage() {
  const handleOnClick = (event) => {
    setimgS(event.target.src);
  };

  const [imgS, setimgS] = useState(
    "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80"
  );

  return (
    <div>
      <section className="section-content padding-y bg">
        <div className="container-fluid">
          <article className="pet">
            <div className="pet-body">
              <div className="row">
                <aside className="col-md-6">
                  <article className="gallery-wrap">
                    <div className="pet img-big-wrap">
                      <a href="/">
                        {" "}
                        <img src={imgS} alt="Selected view" />
                      </a>
                    </div>
                    <div className="thumbs-wrap">
                      <a href="#" className="item-thumb">
                        {" "}
                        <img
                          className="cover"
                          src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80"
                          onClick={handleOnClick}
                          alt="error"
                        />
                      </a>
                      <a href="#" className="item-thumb">
                        {" "}
                        <img
                          className="cover"
                          src="https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80"
                          onClick={handleOnClick}
                          alt="error"
                        />
                      </a>
                      <a href="#" className="item-thumb">
                        {" "}
                        <img
                          className="cover"
                          src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
                          onClick={handleOnClick}
                          alt="error"
                        />
                      </a>
                      <a href="#" className="item-thumb">
                        {" "}
                        <img
                          className="cover"
                          src="https://images.unsplash.com/photo-1536809188428-e8ecf663d0be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          onClick={handleOnClick}
                          alt="error"
                        />
                      </a>
                    </div>
                  </article>
                </aside>
                <main className="col-md-6">
                  <article>
                    <div className=" d-flex justify-content-between w-full align-items-center me-2 ms-2">
                      <div>
                        <h3 className="title" style={{ color: "green" }}>
                          <b>Name of the pet, </b>
                          <span style={{ fontSize: "20px", color: "black" }}>
                            (City, State)
                          </span>
                        </h3>
                      </div>
                      <div className="like_adopt">
                        <span className="sp_heart" role="button">
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="heart-hover"
                          />{" "}
                          Like
                        </span>
                      </div>
                    </div>

                    <hr width="90%" />

                    <div className="mb-3">
                      <h5>
                        <b>Basic Information</b>
                      </h5>
                      <ul className="schema-ul">
                        <li>Id: </li>
                        <li>Age: </li>
                        <li>gender: </li>
                        <li>Breed: type1 (type2)</li>
                        <li>Color: type1, (type2)</li>
                        <li>Status: </li>
                      </ul>

                      <hr width="90%" />

                      <h5>
                        <b>Health</b>
                      </h5>
                      <ul>
                        <li>Vaccinated: </li>
                        <li>Status: </li>
                        <li>Sterilized: </li>
                      </ul>

                      <hr width="90%" />

                      <h5>
                        <b>Description</b>
                      </h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged
                      </p>
                    </div>

                    <div className="mb-4">
                      <button
                        className="btn btn-success mr-1"
                        style={{ color: "white" }}
                      >
                        Adopt now
                      </button>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </article>

          <article className="pet mt-5">
            <div className="pet-body">
              <div className="row">
                <aside className="col-md-6">
                  <h3>Comments</h3>
                  <dl className="row">
                    {/* <dt className="col-sm-3">Display</dt>
                              <dd className="col-sm-9">13.3-inch LED-backlit display with IPS</dd> */}
                  </dl>
                </aside>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default PetViewPage;
