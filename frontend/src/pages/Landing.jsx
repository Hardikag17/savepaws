import "../styles/Landing.css";

export default function Landing() {
  return (
    <div id="Landing">
      {/* Banner div */}
      <div class="banner-div ps-4">
        <h1 style={{ fontSize: "95px" }}>Paws Adoption</h1>
        <h3 style={{ fontSize: "28px" }}>
          Everyone can pass by,but not everyone can stop and help.
        </h3>
        <h2 style={{ fontSize: "48px" }}>Adopt,don't shop.</h2>
        <h3 style={{ fontSize: "28px" }}>
          We inspire and enpower communities to make difference in the lives of
          animals.Find your new best friend and give a pet a loving home.
        </h3>
        <a href="/home" class="btn btn-success btn-lg banner-btn mt-3">
          Find a buddy
        </a>
      </div>
    </div>
  );
}
