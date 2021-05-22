import React from "react";

export interface UserProp {
  username: String;
  firstLetter: String;
}

const User: React.FC<UserProp> = ({ username, firstLetter }) => {
  return (
    <div>
      <p>{`Username: ${username}`}</p>
      <p>{`firstLetter: ${firstLetter}`}</p>
    </div>
  );
};

export default User;
