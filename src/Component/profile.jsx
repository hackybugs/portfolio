import React from "react";
import profileImg from "./../assets/profile.jpg";
import profileAltImg from "./../assets/profile.jpg";

function ProfileHead({ person, size }) {
  return (
    <>
      <div className="profileHead d-flex justify-content-between">
        <div className="content p-4">
          <h3> Hey Its! Shubham </h3>
          <span>
            {" "}
            <strong>Role</strong> : <i>Associate Software Engineer </i>
            <br />
            <strong>Status</strong> : <i>Working </i>
          </span>
        </div>
        <div className="profileImage p-4">
          <span >
            <img src={profileImg} alt={profileAltImg} className="ProfileimageContainer" />
          </span>
        </div>
      </div>
    </>
  );
}
export default ProfileHead;
