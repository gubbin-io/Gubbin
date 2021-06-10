import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import useStyles from "./style";

export interface UserProp {
  clubName: String;
  description: String;
  clubIconURL: String;
  onClick: () => void;
}

const User: React.FC<UserProp> = ({
  clubName,
  description,
  clubIconURL,
  onClick,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} onClick={onClick}>
      <img
        className={classes.clubIcon}
        src={clubIconURL.toString()}
        alt="Club Icon"
      ></img>
      <div className={classes.clubDetails}>
        <span className={classes.title}>{clubName}</span>
        <span className={classes.tagline}>{description}</span>
      </div>
      <Button className={classes.joinButton}>Join</Button>
    </Card>
  );
};

export default User;
