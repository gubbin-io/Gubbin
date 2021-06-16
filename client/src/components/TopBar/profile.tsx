import React from "react";

const ProfileToggle = React.forwardRef(({ onClick }: any, ref: any) => (
  <img
    src="/images/user.png"
    className="d-inline-block align-top"
    alt="userPic"
    style={{
      borderRadius: "50%",
      width: "2.25rem",
      height: "2.25rem",
    }}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export default ProfileToggle;
