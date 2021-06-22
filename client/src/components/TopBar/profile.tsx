import React from "react";
import Avatar from "react-avatar";

const ProfileToggle = React.forwardRef(
  ({ onClick, userName }: any, ref: any) => {
    return (
      <Avatar
        name={userName}
        size="36"
        textSizeRatio={1.75}
        color="#1c7ed6"
        round={true}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        style={{ cursor: "pointer" }}
      />
    );
  }
);

export default ProfileToggle;
