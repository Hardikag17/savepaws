import "../styles/ui.css";
import "../styles/responsive.css";
import React, { useState } from "react";

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
        <div className="container">
          <article className="card">
            <div className="card-body">
              <div className="row">
                <aside className="col-md-6">
                  <article className="gallery-wrap">
                    <div className="card img-big-wrap">
                      <a href="/">
                        {" "}
                        <img src={imgS} width="300px" alt="error" />
                      </a>
                    </div>
                    <div className="thumbs-wrap">
                      <a href="#" className="item-thumb">
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80"
                          onClick={handleOnClick}
                          alt="error"
                        />
                      </a>
                      <a href="#" className="item-thumb">
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80"
                          onClick={handleOnClick}
                          alt="error"
                        />
                      </a>
                      <a href="#" className="item-thumb">
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
                          onClick={handleOnClick}
                          alt="error"
                        />
                      </a>
                      <a href="#" className="item-thumb">
                        {" "}
                        <img
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
                    <h3 className="title">Name of the pet</h3>
                    <div>
                      <ul className="rating-stars">
                        <li className="stars-active">
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <span className="label-rating mr-3 text-muted">7/10</span>
                      <a href="/" className="btn-link  mr-3 text-muted">
                        {" "}
                        <i className="fa fa-heart"></i> Save for later{" "}
                      </a>
                    </div>

                    <hr />

                    <div className="mb-3">
                      <h6>Basic Information</h6>
                      <ul className="schema-ul">
                        <li>Id: </li>
                        <li>Age: </li>
                        <li>gender: </li>
                        <li>Breed: type1 (type2)</li>
                        <li>Color: type1, (type2)</li>
                        <li>Status: </li>
                      </ul>

                      <hr />

                      <h6>Health</h6>
                      <ul>
                        <li>Vaccinated: </li>
                        <li>Status: </li>
                        <li>Sterilized: </li>
                      </ul>

                      <hr />
                      <h6>Location</h6>
                      <ul>
                        <li>City: </li>
                        <li>State: </li>
                      </ul>

                      <hr />

                      <h6>Description</h6>
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
                    <hr />

                    <div className="mb-4">
                      <a href="/" className="btn btn-success mr-1">
                        Adopt now
                      </a>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </article>

          <article className="card mt-5">
            <div className="card-body">
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
