import "../styles/profile.css";
export default function Profile() {
  return (
    <div className="profile d-flex flex-column">
      <div className="profile-img"></div>
      <div className="details">
        <div className="personal-details">This is personal details</div>
        <div>
          Previous activity
          <div>Here is the previous post cards.</div>
        </div>
      </div>
    </div>
  );
}
